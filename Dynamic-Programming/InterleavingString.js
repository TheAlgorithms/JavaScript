function isInterleave(s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) {
    return false;
  }
  
  const N1 = s1.length;
  const N2 = s2.length;
  const DP = [...Array(N1+1)].map(r => Array(N2+1).fill(false));
  
  for (let r = 0; r <= N1; r++) {
    for (let c = 0; c <= N2; c++) {
      if (r === 0 && c === 0) {
        DP[r][c] = true;
      } else if (r === 0) {
        DP[r][c] = DP[r][c-1] && s2[c-1] === s3[r+c-1];
      } else if (c === 0) {
        DP[r][c] = DP[r-1][c] && s1[r-1] === s3[r+c-1];
      } else {
        DP[r][c] = (DP[r][c-1] && s3[r+c-1] === s2[c-1]) || (DP[r-1][c] && s3[r+c-1] === s1[r-1]);
      }
    }
  }
  
  return DP[N1][N2];
}
