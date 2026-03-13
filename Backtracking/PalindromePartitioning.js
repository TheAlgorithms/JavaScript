/**
 * Palindrome Partitioning Algorithm
 * Given a string, find all possible ways to partition it into palindromic substrings
 */

function isPalindrome(s, left, right) {
  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
}

function partition(s) {
  const result = [];
  const current = [];

  function backtrack(start) {
    if (start === s.length) {
      result.push([...current]);
      return;
    }

    for (let end = start; end < s.length; end++) {
      if (isPalindrome(s, start, end)) {
        current.push(s.substring(start, end + 1));
        backtrack(end + 1);
        current.pop();
      }
    }
  }

  backtrack(0);
  return result;
}

export { partition };
