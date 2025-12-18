use anchor_lang::prelude::*;
use anchor_lang::system_program::{transfer, Transfer};
use crate::state::*;
use crate::constants::*;
use crate::errors::*;

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

pub fn request_airdrop(mut ctx: Context<RequestAirdrop>) -> Result<()> {
        let accounts = &mut ctx.accounts;
        
        let amount = CLAIM_AMOUNT;

        // cooldown check
        let now = Clock::get()?.unix_timestamp;

        let day_index = now / 86_400;

        // reset daily counter if it's a new day
        if accounts.user_state.last_claim_day != day_index {
            accounts.user_state.claimed_today = 0;
        }
        // daily limit check
        if accounts.user_state.claimed_today + amount > DAILY_LIMIT {
            return err!(FaucetError::DailyLimitExceeded);
        }


        if now - accounts.user_state.last_claim < COOLDOWN_SECONDS {
            return err!(FaucetError::CooldownNotPassed);
        }
        let system_program = accounts.system_program.to_account_info();
        
        // vault balance check
        if accounts.vault.to_account_info().lamports() < amount {
            return err!(FaucetError::VaultEmpty);
        }

        // CPI accounts
        let from = accounts.vault.to_account_info();
        let to = accounts.user.to_account_info();
        let cpi_accounts = Transfer { from, to };
        
        // signer seeds
        let seeds: &[&[u8]] = &[
            b"vault",
            &[ctx.bumps.vault],
        ];
        let signer_seeds = &[seeds];
        
        // cpi_context
        let cpi_ctx = CpiContext::new_with_signer(system_program, cpi_accounts, signer_seeds);
        
        // SOL transfer
        transfer(cpi_ctx, amount)?;
        
        
        // last_claim and total_claimed update
        accounts.user_state.last_claim = now;
        accounts.user_state.total_claimed += amount;

        accounts.user_state.claimed_today += amount;
        accounts.user_state.last_claim_day = day_index;

        Ok(())
    }