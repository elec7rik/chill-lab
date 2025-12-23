# todo - program

- [x] set up vault pda and write `initialize_vault` instruction  
- [x] create user state pda for tracking last claim + total claimed  
- [x] write `request_airdrop` instruction (basic transfer + state update)  
- [x] add cooldown checks  
- [x] add daily/total limit checks  
- [x] add checks for vault balance before sending sol  
- [x] split code into modules
- [x] build basic anchor tests for both instructions
- [ ] deploy program to devnet and note the program id  
- [ ] fund the vault pda manually for the first run  
- [ ] start ui work: connect wallet and call `request_airdrop`  
- [ ] create a simple off-chain script to top up the vault regularly  
- [ ] add docs explaining how the faucet works and how to fund the vault  

# todo - ui

# Faucet UI TODO

- [x] Install Tailwind CSS
- [x] Initialize shadcn/ui
- [x] Centered page layout
- [x] Show title and short description
- [x] Faucet card container
- [ ] Wallet connection status
- [ ] Shortened public key display
- [x] "Request SOL" button
- [ ] Disable button while tx is pending
- [ ] Show success or error message


## note
- request_airdrop() test not working - FIXED
- gitshould VaultState be a type or should i just go with SystemAccount - FIXED