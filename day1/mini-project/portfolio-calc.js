// wallet object holds -
// 1. solana balance
// 2. list of tokens
// 3. amount of tokens held

const wallet = {
    solBalance: 10,
    tokenList: [
        {symbol: "USDC", amount: 100},
        {symbol: "SEND", amount: 50000},
        {symbol: "BONK", amount: 5000000},
    ],
}

const prices = {
    SOL: 1000,
    SEND: 10,
    USDC: 1,
    BONK: 0.01,
}

// calc function to calculate the total portfolio value
let totalUsdValue = wallet.solBalance * prices.SOL;

for(let i = 0; i < wallet.tokenList.length; i++) {
    const token = wallet.tokenList[i];
    const price = prices[token.symbol];
    totalUsdValue = totalUsdValue + token.amount * price;
}

console.log("Total Portfolio Value In USD: ", totalUsdValue);