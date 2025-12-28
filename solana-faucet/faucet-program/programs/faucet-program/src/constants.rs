// faucet config
pub const LAMPORTS_PER_SOL: u64 = 1_000_000_000;

pub const CLAIM_AMOUNT: u64 = 10_000_000_000; 
pub const DAILY_LIMIT: u64 = 30 * LAMPORTS_PER_SOL; // 1 SOL/day/user
pub const COOLDOWN_SECONDS: i64 = 180; // 3 minutes