use anchor_lang::prelude::*;
use anchor_lang::system_program::{self, Transfer};
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
    pub vault: SystemAccount<'info>,

    pub system_program: Program<'info, System>,
}

pub fn request_airdrop(ctx: Context<RequestAirdrop>) -> Result<()> {
    let amount = CLAIM_AMOUNT;
    let now = Clock::get()?.unix_timestamp;
    let day_index = now / 86_400;

    let user_state = &mut ctx.accounts.user_state;

    // reset daily counter if new day
    if user_state.last_claim_day != day_index {
        user_state.claimed_today = 0;
    }

    if user_state.claimed_today + amount > DAILY_LIMIT {
        return err!(FaucetError::DailyLimitExceeded);
    }

    if now - user_state.last_claim < COOLDOWN_SECONDS {
        return err!(FaucetError::CooldownNotPassed);
    }

    // vault balance check
    if ctx.accounts.vault.lamports() < amount {
        return err!(FaucetError::VaultEmpty);
    }

    // SOL transfer (this CPI is REQUIRED)
    system_program::transfer(
        CpiContext::new_with_signer(
            ctx.accounts.system_program.to_account_info(),
            Transfer {
                from: ctx.accounts.vault.to_account_info(),
                to: ctx.accounts.user.to_account_info(),
            },
            &[&[
                b"vault",
                &[ctx.bumps.vault],
            ]],
        ),
        amount,
    )?;

    // update state
    user_state.last_claim = now;
    user_state.last_claim_day = day_index;
    user_state.claimed_today += amount;
    user_state.total_claimed += amount;

    Ok(())
}
