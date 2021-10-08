//row count
let row = 8; 
// defining an empty string
let square = "";
// row loop
for (let outer = 0; outer < row; outer++) { // external loop
  // internal loop
  for (let inner = 0; inner < row; inner++)  
    square += "*";
  
  // newline after each row
  square += "\n";
}
// printing the square
console.log(square);