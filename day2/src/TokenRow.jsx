import React from "react";

export default function TokenRow({ symbol, amount, price = 0}) {
    const usd = (Number(amount) || 0) * (Number(price) || 0);
    return(
        <div>
            {symbol}: {amount} - ${usd.toLocaleString(undefined, { maximumFractionDigits: 6})}
        </div>
    )
}