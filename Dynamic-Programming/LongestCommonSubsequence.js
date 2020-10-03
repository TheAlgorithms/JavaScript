/*
    * Given two sequences, find the length of longest subsequence present in both of them. 
    * A subsequence is a sequence that appears in the same relative order, but not necessarily contiguous. 
    * For example, “abc”, “abg”, “bdf”, “aeg”, ‘”acefg”, .. etc are subsequences of “abcdefg”
*/

function longestCommonSubsequence(x, y, str1, str2, dp) {
  if (x == -1 || y == -1) return 0;
  else {
    if (dp[x][y] != 0) return dp[x][y];
    else {
      if (str1[x] == str2[y]) {
        return dp[x][y] = 1 + longestCommonSubsequence(x - 1, y - 1, str1, str2, dp);
      }
      else {
        return dp[x][y] = Math.max(longestCommonSubsequence(x - 1, y, str1, str2, dp), longestCommonSubsequence(x, y - 1, str1, str2, dp))
      }
    }
  }

}

function main() {
  const str1 = "ABCDGH"
  const str2 = "AEDFHR"
  const dp = new Array(str1.length + 1).fill(0).map(x => new Array(str2.length + 1).fill(0))
  const res = longestCommonSubsequence(str1.length - 1, str2.length - 1, str1, str2, dp)
  console.log(res);
}

main()
