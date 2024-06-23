/**
// https://projecteuler.net/problem=53
There are exactly ten ways of selecting three from five, 12345:
123, 124, 125, 134, 135, 145, 234, 235, 245, 345
In combinatorics, we use the notation, 5C3 = 10
In general, nCr = n!/(r!(n-r)!), where r <= n
n! = n*(n-1)*...*3*2*1, and 0! = 1
It is not until n=23, that a value exceeds one-million: 23C10 = 1144066
How many, not necessarily distinct, value of nCr for 1 <= n <= 100 are greater than one-million?
*/
export const answer = (minVal, maxVal) => {
  /*
  When n is fixed, the maximum value of nCr is when r is the closes to n/2.
  //Since nCr = nC(n-r), loop from the ceil of n/2 and increase by one until
  the value becomes less than or equal to one million. Then, multiply by two
  because of symmetry, but if n is even, then subtract one to avoid overcounting.
  */
  var factorials = [1];
  var maxR = 0;
  var numWork = 0;
  var totalNumWork = 0;
  for (var i=1;i<=maxVal;i++){
    factorials.push(factorials[factorials.length-1]*i);
  }
  for (var n=minVal;n<=maxVal;n++){
    maxR = Math.ceil(n/2);
    numWork = 0;
    for (var r=maxR;r<=n;r++){
      if (factorials[n]/(factorials[r]*factorials[n-r]) > 1000000){
        numWork++;
      }
      else{
        break;
      }
    }
    if (n%2 == 1){
      numWork = 2*numWork;
    }
    else{
      numWork = Math.max(0, 2*numWork-1);
    }
    totalNumWork += numWork;
  }
  return totalNumWork
}
