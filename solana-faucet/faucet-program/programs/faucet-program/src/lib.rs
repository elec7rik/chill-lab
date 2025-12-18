use anchor_lang::prelude::*;

pub mod constants;
pub mod errors;
pub mod instructions;
pub mod state;

use instructions::*;

declare_id!("2iKADw5KnvSbSBmxZYsozTjjPWNMoYnHXecwwMjptXcz");

#[program]
pub mod faucet_program {
    use super::*;

    pub fn initialize_vault(ctx: Context<InitializeVault>) -> Result<()> {
        instructions::initialize_vault::initialize_vault(ctx)
    }

    pub fn request_airdrop(ctx: Context<RequestAirdrop>) -> Result<()> {
        // ctx.accounts.request_airdrop(&ctx.bumps)
        instructions::request_airdrop::request_airdrop(ctx)
    }
}
