/*
Problem statement:
The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number N ?
*/
var n = 600851475143; // For problem 3 in projecteuler.net, N=600851475143
var i = 2;
var ans = 1;
while(i*i <= n) {
    while(n%i == 0) {
        n /= i;
        ans = i;
    }
    i++;
}
if(n > ans) ans = n;
console.log(ans);