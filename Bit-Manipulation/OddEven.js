


/*
    author: IndianBlitz
   

    This script will find number is Odd or even 
    in binary representation of given number


*/
//Check even if true then return 1 else return 0 which means number is odd;
function checkEvenOdd(num){
    'use strict';
    if((num & 1) === 0)
        return 1;
    else
        return 0;
}

export {checkEvenOdd}
