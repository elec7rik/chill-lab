use anchor_lang::prelude::*;

declare_id!("CM1z9R99bhM7tE9Adma9gtsYwBok9mocnWRz4Sw7NMCG");

#[program]
pub mod gibsol_program {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
