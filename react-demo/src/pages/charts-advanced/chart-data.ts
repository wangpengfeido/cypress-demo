export async function getChartsData(from: number, end: number) {
  let res = await fetch(`http://localhost:10000/?from=${from}&end=${end}`, { mode: 'cors' });
  let data = res.json();
  return data;
}
