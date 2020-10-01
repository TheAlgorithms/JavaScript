// upper converts lowercase sting to upper case
// input is 1 string i.e. str
const upper = (str) => {
  // check that inputs are string
  if (typeof str !== "string") {
    return "Not string(s)";
  }

  var convertedString = "";

  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
      convertedString =
        convertedString + String.fromCharCode(65 + str.charCodeAt(i) - 97);
      continue;
    }
    convertedString = convertedString + str.charAt(i);
  }

  return convertedString;
};

console.log(upper("abcd")); // should print ABCD
console.log(upper("abcd1")); // should print ABCD1
console.log(upper("*abcd")); // *ABCD
console.log(upper("aBs")); // should print ABS
