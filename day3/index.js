// usage: node index.js "capablanca"
const username = process.argv[2] || "drdrunkenstein";

async function getUserStats(username) {
    const res = await fetch(`https://lichess.org/api/user/${username}`);
    if (!res.ok) throw new Error(`http ${res.status}`);
    const data = await res.json();

    // safe read with defaults
    const wins = data.count?.win ?? 0;
    const losses = data.count?.loss ?? 0;
    const draws = data.count?.draw ?? 0;
    const total = data.count?.all ?? 0;

    const blitz = data.perfs?.blitz?.rating ?? "n/a";
    const bullet = data.perfs?.bullet?.rating ?? "n/a";
    const rapid = data.perfs?.rapid?.rating ?? "n/a";

    let winRate = "n/a";
    if (total > 0) {
        const ratio = wins / total;
        const winPercent = ratio * 100;
        winRate = winPercent.toFixed(1) + "%";
    }

    return {
        username: data.username ?? username,
        total,
        wins,
        losses,
        draws,
        winRate,
        ratings: {bullet, blitz, rapid}
    }
}

const stats = await getUserStats(username);

console.log(`
user:      ${stats.username}
games:     ${stats.total}
wins:      ${stats.wins}
losses:    ${stats.losses}
draws:     ${stats.draws}
win rate:  ${stats.winRate}

ratings:
  bullet:  ${stats.ratings.bullet}
  blitz:   ${stats.ratings.blitz}
  rapid:   ${stats.ratings.rapid}
`);
