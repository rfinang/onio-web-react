export function convertTime(value, from, to) {
    const base = normalizeDuration(1, from);
    return (Number(value) || 0) * base / normalizeDuration(1, to);
}


export function normalizeDuration(duration, unit) {
    const map = { us: 0.001, ms: 1, sec: 1000, min: 60000, hour: 3600000 };
    return (Number(duration) || 0) * (map[unit] || 1);
}

export function dbmToMw(dbm) {
    return Math.pow(10, (Number(dbm) || 0) / 10);
}