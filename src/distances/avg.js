export default function avg(a, b) {
  let ii = a.length;
  let max = 0;
  let ans = 0;
  let aux = 0;
  for (let i = 0; i < ii; i++) {
    aux = Math.abs(a[i] - b[i]);
    ans += aux;
    if (max < aux) {
      max = aux;
    }
  }
  return (max + ans) / 2;
}
