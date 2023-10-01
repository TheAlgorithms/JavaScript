// How to Convert Binary to Text
// 1.Get binary byte.
// 2.Convert binary byte to decimal.
// 3.Get character of ASCII code from ASCII table.
// 4.Continue with next byte.
  
  function binaryAgent(str) {
    function toDecimal(x){
        let i=0;
        let sum=0
        while(x>0){
        sum+=(x%10)*Math.pow(2,i);
        x=Math.floor(x/10);
        i++;
        }
        return sum;
    }
    let arr=str.split(" ").map(x=>parseFloat(x));
    let arr1=arr.map(toDecimal)
    arr1=arr1.map(x=>String.fromCharCode(x))
    console.log(arr1.join(""))
    return arr1.join("")
  }
  
  export { binaryAgent }