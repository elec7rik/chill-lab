# day 2 stuff

- react basics: componenets are functions that return JSX
- props = data passed from parent to child
- controlled inputs: input value comes from state and updates through onChange
- updating nested state: need to create new copies for everything that needs to be re-rendered
- mutating old values doesn't trigger a re-render
- splitting UI - TokenRow + WalletHeader make App cleaner (even if it looks ugly now)
- total USD is a derived value (recomputed on state changes)

## to-remember
- react won't re-render if state is mutated; it needs new objects/arrays
- prop names are case sensitive
- JSX returns ONE root element
- .map() turns arrays into UI