function decimalToBinary(n){
  var binary = "";
  var temp = n;

  while(temp > 0){
      if(temp % 2 == 0){
          binary = "0" + binary;
      }
      else {
          binary = "1" + binary;
      }
      temp = Math.floor(temp / 2);
  }
  return binary;
}

 function stringToBinary(text){
     res = "";
     var length = text.length;
     for(var i = 0 ; i<length ; i++){
       // Char to ASCII
         var asciival = text[i].charCodeAt();
         console.log(decimalToBinary(asciival));

     }
 }


stringToBinary('Conversion')
