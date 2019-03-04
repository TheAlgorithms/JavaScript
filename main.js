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

