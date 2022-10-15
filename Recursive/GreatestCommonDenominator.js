/**
 * @function GreatestCommonDenominator
 * @description function to find GCD,Greatest Common Denominator using recursion.
 * @param {Integer,Integer} m,n - The input integer
 * @return {Integer} 
 * @see [GCD,Greatest_Common_Denominator](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwizx9SpxeL6AhVZEbcAHeaLAHsQFnoECDAQAQ&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FGreatest_common_divisor&usg=AOvVaw2IQlEdhJP3Cgc-fAubRh9D)
 */

function gcd(m, n) {
    if (n === 0) return m;
    return gcd(n, m % n);
}
export { gcd }
