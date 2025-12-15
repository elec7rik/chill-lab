## the key idea

the faucet works because the vault pda keeps getting sol from the external devnet faucet through off-chain scripts. the on-chain program can only distribute what the vault already holds.

## user story

when a developer needs some free sol on devnet, they come to the faucet site, connect their wallet, and hit “request sol.” that triggers a transaction that calls the program.

the program then runs a few checks:

- did this wallet already claim in the last x minutes?

- is the wallet still within the daily limit?

- does the vault pda have enough sol left to give?

if everything passes, the program transfers a small amount of sol from the vault pda straight to the user’s wallet. once that’s done, the program updates the user’s on-chain record with the latest claim timestamp and how much they’ve claimed so far.

the user sees a success message and has to wait for the cooldown before they can request sol again.

## faucet behaviour

the program uses a vault pda to hold all the sol it can give out. this vault holds whatever sol is sent to it. an automated script keeps topping up this vault by requesting sol from the official devnet faucet and transferring it into the vault pda whenever the limit resets.

when someone calls `request_airdrop`, the program loads or creates a user-specific pda that tracks their last claim time and total claimed amount. the program checks if the cooldown has passed, checks if the user is still within the allowed limit, and checks if the vault pda has enough sol to actually send.

if everything is valid, the program signs using the vault pda seeds and transfers a small amount of sol from the vault to the user’s wallet. then it updates the user’s state pda with the new timestamp and claimed total.
