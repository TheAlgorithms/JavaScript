function decimalToBinary(num) {
  var bin = [];
  while (num > 0) {
  bin.unshift(num % 2);
  num >>= 1; // basically /= 2 without remainder if any
  }
  console.log("The decimal in binary is " + bin.join(''));
}

decimalToBinary(2);
decimalToBinary(7);
decimalToBinary(35);
