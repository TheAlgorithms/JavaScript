/**
// https://projecteuler.net/problem=69

Euler's totient function, phi(n) [sometimes called the phi function], is defined
as the number of positive integers not exceeding n which are relatively prime to n.
For example, as 1, 2, 4, 7, 8, are all less than or equal to nine
and relatively prime to nine, phi(9)=6.

It can be seen that n=6 produces a maximum n/phi(n) for n <= 10

Find the value of n <= 1000000 for which n/phi(n) is a maximum.

 */
export const answer = (maxval) => {
  //To maximize n/phi(n), phi(n) must be minimized, so phi(n) must have the most unique prime factors, and n must be equal to the product of primes each to the first power, so it equals to 2*3*5*7*...
  var productsofar = 1;
  var primes = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,57];
  for (var idx=0;idx<primes.length;idx++){
    if (productsofar*primes[idx] > maxval){
      return productsofar
    }
    productsofar *= primes[idx]
  }
}
