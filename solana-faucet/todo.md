# todo

- set up vault pda and write `initialize_vault` instruction  
- create user state pda for tracking last claim + total claimed  
- write `request_airdrop` instruction with cooldown + limits  
- add checks for vault balance before sending sol  
- build basic anchor tests for both instructions  
- deploy program to devnet and note the program id  
- fund the vault pda manually for the first run  
- start ui work: connect wallet and call `request_airdrop`  
- create a simple off-chain script to top up the vault regularly  
- add docs explaining how the faucet works and how to fund the vault  
