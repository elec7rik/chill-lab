// faucet config
pub const LAMPORTS_PER_SOL: u64 = 1_000_000_000;

pub const CLAIM_AMOUNT: u64 = 200_000_000; // 0.2 SOL per request
pub const DAILY_LIMIT: u64 = 1 * LAMPORTS_PER_SOL; // 1 SOL/day/user
pub const COOLDOWN_SECONDS: i64 = 180; // 3 minutes