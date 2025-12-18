use anchor_lang::prelude::*;

#[account]
pub struct VaultState {}

impl Space for VaultState {
    const INIT_SPACE: usize = 8;
}