function ispalindrome(input){
var reverse=0,real=input;
var l=input.toString().length;
for(var i=0;i<l;i++)
{
    reverse=reverse*10+(real%10);
    real=Math.floor(real/10);
}
return(input==reverse);
}
console.log(ispalindrome(135441));
console.log(ispalindrome(13531));
console.log(ispalindrome(135555));
console.log(ispalindrome(111111));