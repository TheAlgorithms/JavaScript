function hcf(a,b)
{
if(a==b)
return a;
var max,min;
if(a>b)
{
    max=a;
    min=b;
}
else{
    max=b;
    min=a;
}
if(min==0)
return max;
return hcf(min,max%min);




}


var a=5;
var b=4161615;
console.log(hcf(a,b));