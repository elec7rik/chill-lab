use anchor_lang::prelude::*;

#[error_code]
pub enum FaucetError {
    #[msg("Cooldown period has not passed yet")]
    CooldownNotPassed,
    
    #[msg("Vault does not have enough SOL")]
    VaultEmpty,

    #[msg("Daily limit exceeded for today")]
    DailyLimitExceeded,
}