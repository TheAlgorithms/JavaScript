const array1=[-100,101,102,-103,-99];
const positivearray=array1.filter(number=>(number>0));
alert(positivearray);
const totalsum1=array1.reduce((acc,number)=>{return acc+number},0);
alert(totalsum1);
array1.forEach((number)=>{
    if(number>0)
    {
        alert(number);
    }
});
const decimalnumberarray=[1.2,1.3,1.4,2,2.5,10.11];
const totalsum2=decimalnumberarray.reduce((acc,number)=>{return acc+Math.round(number)},0);
alert(totalsum2);
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
dragons.includes('John');
dragons.filter(name=>name.includes('John'));
const power2=(number)=>number**2;
power100(5);
const basket=['Apples','Mangoes','Banana'];
for(let i=0;i<basket.length;i++)
{
        console.log(basket[i]);
}
basket.forEach(items=>console.log(items));
for(items in basket)
{
    console.log(items);
}
for(items of basket)
{
        console.log(items);
}
const detailedbasket=
{
    fruit:'Apple',
    vegetable:'potato',
    drink:'Thumsup',
}
detailedbasket.forEach(items=>console.log(items));
for(items in detailedbasket)
{
    console.log(items);
}
const array = [-1,0,3,100, 99, 2, 99];
const biggestNumberInArray1=(arr)=> 
{
    let highest=0;
    for(let i=0;i<arr.length;i++)
    {
        if(highest<arr[i])
        {
            highest=arr[i];
        }
    }
    return highest;
}
const biggestNumberInArray2=(arr)=>
{
    let highest=0;
    arr.forEach(item=>{
        if(highest<item)
        {
            highest=item;
        }
    })
    return highest;
}
const biggestNumberInArray3=(arr)=>
{
    let highest=0;
    for(item of arr)
    {
            if(highest<item)
            {
                    highest=item;
            }
    }
    return highest;
}
const factorial=(number)=>
{
    let fact=1;
    for(let i=1;i<number;i++)
    {
            fact+=fact*i;
    }
    return fact;
}
factorial(5);
const palindrome=(number)=>
{
    number=number+"";
    let reversenumber=number.split("").reverse().join("");
    if(number ===reversenumber)
    {
        console.log(`${reversenumber} is palindrome number`);
    }
    else
    {
        console.log(`${reversenumber} is not palindrome number`);
    }
}
palindrome(123);
const sumofcubes=(number)=>
{
    let sumofcubes=0;
    while(number)
    {
        let remainder=number%10;
        sumofcubes=sumofcubes+(remainder**3);
        number=Math.floor(number/10);
    }
return sumofcubes;

}
const amstrong=(number)=>
{
   if(sumofcubes(number) ===number)
   {
        console.log(`${number} is amstrong`);
   }
   else
   {
        console.log(`${number} is not amstrong`);
   }
}
amstrong(371);
const factorial=(number)=>
{
    let fact=1;
    for(let i=1;i<=number;i++)
    {
        fact=fact*i;
    }
    console.log(fact);
}
factorial(3);




