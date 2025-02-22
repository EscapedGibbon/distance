export default function tanimoto(a, b, bitvector) {
  if (bitvector) {
    let inter = 0;
    let union = 0;
    for (let j = 0; j < a.length; j++) {
      inter += a[j] && b[j];
      union += a[j] || b[j];
    }
    if (union === 0) {
      return 1;
    }
    return inter / union;
  } else {
    let ii = a.length;
    let p = 0;
    let q = 0;
    let m = 0;
    for (let i = 0; i < ii; i++) {
      p += a[i];
      q += b[i];
      m += Math.min(a[i], b[i]);
    }
    return 1 - (p + q - 2 * m) / (p + q - m);
  }
}
