use anchor_lang::prelude::*;
use anchor_lang::system_program::{transfer, Transfer};

// faucet config
pub const LAMPORTS_PER_SOL: u64 = 1_000_000_000;

pub const CLAIM_AMOUNT: u64 = 200_000_000; // 0.2 SOL per request
pub const DAILY_LIMIT: u64 = 1 * LAMPORTS_PER_SOL; // 1 SOL/day/user
pub const COOLDOWN_SECONDS: i64 = 180; // 3 minutes



declare_id!("2iKADw5KnvSbSBmxZYsozTjjPWNMoYnHXecwwMjptXcz");

#[program]
pub mod faucet_program {
    use super::*;

    pub fn initialize_vault(_ctx: Context<InitializeVault>) -> Result<()> {
        Ok(())
    }

    pub fn request_airdrop(ctx: Context<RequestAirdrop>) -> Result<()> {
        ctx.accounts.request_airdrop(&ctx.bumps)
    }
}

#[derive(Accounts)]
pub struct InitializeVault<'info> {
    #[account(
        init,
        payer = payer,
        space = VaultState::INIT_SPACE,
        seeds = [b"vault"],
        bump,
    )]
    pub vault: Account<'info, VaultState>,
    #[account(mut)]
    pub payer: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct RequestAirdrop<'info> {
    #[account(mut)]
    pub user: Signer<'info>,
    #[account(
        init_if_needed,
        payer = user,
        space = UserState::INIT_SPACE,
        seeds = [b"user", user.key().as_ref()],
        bump
    )]
    pub user_state: Account<'info, UserState>,
    #[account(
        mut,
        seeds = [b"vault"],
        bump
    )]
    pub vault: Account<'info, VaultState>,
    pub system_program: Program<'info, System>,
}

#[account]
pub struct UserState {
    pub last_claim: i64,
    pub total_claimed: u64,
    // for daily limit tracking
    pub claimed_today: u64,
    pub last_claim_day: i64,
}

impl Space for UserState {
    const INIT_SPACE: usize = 8 + 8 + 8 + 8 + 8;
}

impl<'info> RequestAirdrop<'info> {
    pub fn request_airdrop(&mut self, bumps: &RequestAirdropBumps) -> Result<()> {
        let amount = CLAIM_AMOUNT;

        // cooldown check
        let now = Clock::get()?.unix_timestamp;

        let day_index = now / 86_400;

        // reset daily counter if it's a new day
        if self.user_state.last_claim_day != day_index {
            self.user_state.claimed_today = 0;
        }
        // daily limit check
        if self.user_state.claimed_today + amount > DAILY_LIMIT {
            return err!(FaucetError::DailyLimitExceeded);
        }


        if now - self.user_state.last_claim < COOLDOWN_SECONDS {
            return err!(FaucetError::CooldownNotPassed);
        }
        let system_program = self.system_program.to_account_info();
        
        // vault balance check
        if self.vault.to_account_info().lamports() < amount {
            return err!(FaucetError::VaultEmpty);
        }

        // CPI accounts
        let from = self.vault.to_account_info();
        let to = self.user.to_account_info();
        let cpi_accounts = Transfer { from, to };
        
        // signer seeds
        let seeds: &[&[u8]] = &[
            b"vault",
            &[bumps.vault],
        ];
        let signer_seeds = &[seeds];
        
        // cpi_context
        let cpi_ctx = CpiContext::new_with_signer(system_program, cpi_accounts, signer_seeds);
        
        // SOL transfer
        transfer(cpi_ctx, amount)?;
        
        
        // last_claim and total_claimed update
        self.user_state.last_claim = now;
        self.user_state.total_claimed += amount;

        self.user_state.claimed_today += amount;
        self.user_state.last_claim_day = day_index;

        Ok(())
    }
}

#[account]
pub struct VaultState {}

impl Space for VaultState {
    const INIT_SPACE: usize = 8;
}

#[error_code]
pub enum FaucetError {
    #[msg("Cooldown period has not passed yet")]
    CooldownNotPassed,
    
    #[msg("Vault does not have enough SOL")]
    VaultEmpty,

    #[msg("Daily limit exceeded for today")]
    DailyLimitExceeded,
}
