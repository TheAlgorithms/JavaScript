//row count
let row = 8; 
// defining an empty string
let pyramid = "";
// row loop
for (let outer = 1; outer <=row; outer++) {
  // printing spaces
  for (let inner = 1; inner < outer; inner++) 
    pyramid += " ";
  // printing star
  for (let inner = 0; inner < 2 * (row-outer) - 1; inner++) 
    pyramid += "*";
  
  pyramid += "\n";
}
// printing pyramid
console.log(pyramid);