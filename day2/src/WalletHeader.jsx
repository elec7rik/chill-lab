import React from "react";

export default function WalletHeader({ owner, solBalance, onSolChange }) {
    return (
        <div>
            <div>
                <div>{owner}</div>
                <div>owner</div>
            </div>

            <div>
                <div>
                    <input type="number"
                    value={solBalance}
                    onChange={e => onSolChange(Number(e.target.value))}
                    style={{width: 100}}
                    />
                </div>
                <div>SOL</div>
            </div>
        </div>
    )
}