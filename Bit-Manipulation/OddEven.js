/*
    author: IndianBlitz
    
    This script will find number is Odd or even 
*/

function checkEvenOdd(num){
    'use strict';
    if((num & 1) === 0){
         return 1;
    }
    else{
        return 0;
    }
        
}

export { checkEvenOdd };
