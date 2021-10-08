//row count
let row = 8; 
// defining an empty string
let triangle = "";
// row loop
for (let outer = 1; outer <= row; outer++) {
  // printing spaces
  for (let inner = 0; inner < row - outer; inner++) 
    triangle += " ";
  
  // printing star
  for (let inner = 0; inner < outer; inner++) 
    triangle += "*";
  
  // newline after each row
  triangle += "\n";
}
// printing the triangle
console.log(triangle);