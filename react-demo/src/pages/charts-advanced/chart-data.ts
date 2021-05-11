export function getChartsData(from: number, end: number) {
  let res: { x: number; y: number }[] = [];
  for (let i = from, j = 1; i <= end; i += 1000 * 60 * 60 * 24, j++) {
    res.push({ x: i, y: Math.round(Math.random() * 100) });
  }
  return Promise.resolve(res);
}
