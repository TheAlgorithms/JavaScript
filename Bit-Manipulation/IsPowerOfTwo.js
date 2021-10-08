/*
    author: @Aayushi-Mittal

    This script will check whether the given
    number is a power of two or not.

*/

export const IsPowerOfTwo = (n) => {
    if ((n&(n-1))==0 && n!=0)
        return true;
    else
        return false;
}
  
// console.log(IsPowerOfTwo(0));
  