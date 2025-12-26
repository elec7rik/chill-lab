# Solana Faucet

A simple on-chain Solana faucet built on devnet.  
Users can connect a wallet and request DEVNET SOL with cooldowns and limits enforced fully on-chain.

---

## What it does

- Connects to Solana wallets (Phantom, Solflare)
- Allows users to request test SOL
- Enforces cooldown and daily limits using PDAs
- Transfers SOL from a program-owned vault
- No backend server, all logic lives on-chain

---

## Tech stack

- Solana + Anchor (Rust)
- React + TypeScript (Vite)
- Tailwind CSS + shadcn
- Solana Wallet Adapter

---

## How it works

- A vault PDA holds SOL for distribution
- A per-user PDA tracks claim history and limits
- The `request_airdrop` instruction validates limits and transfers SOL using a signed CPI
- The frontend submits transactions directly using the Anchor IDL

---

## Running locally

### Program
```bash
cd solana-faucet/faucet-program
anchor build
anchor deploy --provider.cluster devnet
```

Initialize the vault once:
```bash
export ANCHOR_WALLET=~/.config/solana/id.json
npx ts-node scripts/init_vault.ts
```

### Frontend
```bash
cd solana-faucet/ui
npm install
npm run dev
```