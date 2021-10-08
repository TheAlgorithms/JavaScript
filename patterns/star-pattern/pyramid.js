//row count
let row = 8; 
// defining an empty string
let pyramid = "";
// column loop
for (let outer = 1; outer <=row; outer++) {
  // printing spaces
  for (let inner = 1; inner <=row - outer; inner++) 
    pyramid += " ";
  // printing star
  for (let inner = 0; inner < 2 * outer - 1; inner++) 
    pyramid += "*";
  
  pyramid += "\n";
}
// printing pyramid
console.log(pyramid);