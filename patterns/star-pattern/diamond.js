// The diamond star pattern is a combination of the pyramid and the reverse pyramid star pattern
let row = 5;
// defining an empty string
let diamond = "";

// Upside pyramid
for (let outer = 1; outer <=row; outer++) {
    // printing spaces
    for (let inner = 1; inner <= row - outer; inner++)
        diamond += " ";
    // printing star
    for (let inner = 0; inner < 2 * outer - 1; inner++)
        diamond += "*";

    diamond += "\n";
}

// reverse pyramid
for (let outer = 1; outer < row; outer++) {
    // printing spaces
    for (let inner = 1; inner <=outer; inner++)
        diamond += " ";
    // printing star
    for (let inner = 0; inner < 2 * (row - outer) - 1; inner++)
        diamond += "*";

    diamond += "\n";
}
console.log(diamond);