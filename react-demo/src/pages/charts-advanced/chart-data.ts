export function getChartsData(from: number, end: number) {
  let res: { x: number; y: number }[] = [];
  for (let i = from; i <= end; i++) {
    res.push({ x: i, y: Math.round(Math.random() * 100) });
  }
  return Promise.resolve(res);
}
