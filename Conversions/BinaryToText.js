// How to Convert Binary to Text
// 1.Get binary byte.
// 2.Convert binary byte to decimal.
// 3.Get character of ASCII code from ASCII table.
// 4.Continue with next byte.
  
 function binaryToText(str) {
    let arr=str.split(" ").map(x=>String.fromCharCode(parseInt(x,2))).join("");
    return arr;
  }
  
  export { binaryToText }
