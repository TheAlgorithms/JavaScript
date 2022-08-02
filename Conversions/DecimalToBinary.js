function decimalToBinary(num) {
    const bin = []
    while (num > 0) {
        bin.unshift(num % 2)
        num >>= 1 // basically /= 2 without remainder if any
    }
    return bin.join('')
}

// using .toString() method

function decimalToBinary_2(dec) {
    return dec.toString(2)
}

// using Remainder Quotient method

function decimalToBinary_3(dec) {
    let bin = 0;
    let rem, i = 1,
        step = 1;
    while (dec != 0) {
        rem = dec % 2;
        dec = parseInt(dec / 2);
        bin = bin + rem * i;
        i = i * 10;
    }
    return bin
}


export { decimalToBinary, decimalToBinary_2, decimalToBinary_3 }

// > decimalToBinary(2)
// '10'

// > decimalToBinary(7)
// '111'

// > decimalToBinary(35)
// '100011'