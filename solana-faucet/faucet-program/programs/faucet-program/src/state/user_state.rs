use anchor_lang::prelude::*;

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