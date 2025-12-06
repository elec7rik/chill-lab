import fs from "fs";

const address = "0xa4b366ad22fc0d06f1e934ff468e8922431a87b8";

async function getUserTrades() {
  const url = `https://data-api.polymarket.com/trades?user=${address}&limit=50`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    // Save to file
    fs.writeFileSync("trades.json", JSON.stringify(data, null, 2));

    console.log("Saved latest 50 trades to trades.json");

    return data;
  } catch (err) {
    console.error("Error fetching trades:", err);
  }
}

getUserTrades();
