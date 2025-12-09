import React, { useState } from 'react'
import './App.css'
import WalletHeader from './WalletHeader'
import TokenRow from './TokenRow'

function App() {
  const [wallet, setWallet] = useState({
    owner: "jane",
    solBalance: 10,
    tokenList: [
      { symbol: "USDC", amount: 10},
      { symbol: "SEND", amount: 1000},
      { symbol: "BONK", amount: 10000},
    ]
  });

  const prices = {
    SOL: 200,
    USDC: 1,
    SEND: 0.1,
    BONK: 0.01,
  };

  function setSolBalance(n) {
    setWallet(old => ({...old, solBalance: Number(n)}))
  }

  let total = (wallet.solBalance ?? 0) * (prices.SOL ?? 0);

  for (let i = 0; i < wallet.tokenList.length; i++) {
    let token = wallet.tokenList[i];
    let price = prices[token.symbol]
    total +=  Number(token.amount || 0) * price;
  }

  return(
    <div>

      <WalletHeader
        owner={wallet.owner}
        solBalance={wallet.solBalance}
        onSolChange={setSolBalance}
      />

      { wallet.tokenList.map((t, index) => (
        <div key={t.symbol}>
          <input type="number"
          value={t.amount}
          onChange={e => {
            const newAmount = Number(e.target.value)

            setWallet(oldWallet => {
              const copy = { ...oldWallet }
              copy.tokenList = [...oldWallet.tokenList]
              copy.tokenList[index] = {
                ...copy.tokenList[index],
                amount: newAmount
              }
              return copy
            })
          }} />
          <TokenRow symbol={t.symbol} amount={t.amount} price={prices[t.symbol]}/>
          {/* { <div>${t.amount * prices[t.symbol]}</div>} */}
        </div>
      ))
    }
    <div>Total USD: ${total.toLocaleString(undefined, {maximumFractionDigits: 2})}</div>
    </div>
  )
}

export default App
