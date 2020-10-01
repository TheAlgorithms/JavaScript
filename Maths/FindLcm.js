/*
    author: PatOnTheBack
    license: GPL-3.0 or later

    Modified from:
        https://github.com/TheAlgorithms/Python/blob/master/maths/findLcm.py

    More about LCM:
        https://en.wikipedia.org/wiki/Least_common_multiple
*/

'use strict'

// Find the LCM of two numbers.
function findLcm(num1, num2) {
  return (num1/findGcd(num1,num2))*num2
}

function findGcd(num1,num2){
    if(num1==0){
        return num2
    }
    else{
        return findGcd(num2%num1,num1)
    }
}
        
        
        
        
// Run `findLcm` Function
var num1 = 12
var num2 = 76
console.log(findLcm(num1, num2))
