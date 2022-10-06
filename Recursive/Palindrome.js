/**
 * @function Palindrome
 * @description Check whether the given string is Palindrome or not.
 * @param {String} str - The input string
 * @return {Boolean}.
 * @see [Palindrome](https://en.wikipedia.org/wiki/Palindrome)
 */

const isPalindrome = (() => {
  return function isPalindrome (str) {
    str = str.replace(/[^a-z0-9]/i, '').toLowerCase();
    // wrap the recursive _isPalindrome function with _trampoline()
    return (str.length > 0) && _trampoline(_isPalindrome)(str);
  };

  // trampoline() — higher-order function
  function _trampoline (fn) {
    return function _trampolined (...args) {
      let result = fn(...args);
      while (typeof result === 'function') {
        result = result();
      }
      return result;
    }
  }

  function _isPalindrome (str) {
    const len = str.length;

    if (len <= 1) return true;
    if (str[0] !== str[len - 1]) return false;

    // return a function that calls the recursive function
    return () => _isPalindrome(str.slice(1, -1));
  }
})();
