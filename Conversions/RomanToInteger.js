/*
    Author: rajatdiptabiswas
    License: GPL-3.0 or later

    Modified from: https://github.com/TheAlgorithms/Python/blob/master/conversions/roman_to_integer.py
    
    This script converts a Roman numeral string to an integer
*/

"use strict";

function romanToInteger(romanString) {
    var values = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };
    var total = 0;
    var place = 0;

    while (place < romanString.length) {
        if ((place + 1 < romanString.length) && (values[romanString[place]] < values[romanString[place + 1]])) {
            total += values[romanString[place + 1]] - values[romanString[place]];
            place += 2;
        } else {
            total += values[romanString[place]];
            place += 1;
        }
    }

    return total;
}

// Testing
var tests = {
    "III": 3,
    "CLIV": 154,
    "MIX": 1009,
    "MMD": 2500,
    "MMMCMXCIX": 3999
};

var correct = true;

for (let key in tests) {
    if (romanToInteger(key) != tests[key]) {
        correct = false;
    }
}

if (correct == true) {
    console.log("All tests passed!");
}

// Printing sample test cases
for (let key in tests) {
    console.log("The value of the Roman numeral " + key + " is " + romanToInteger(key));
}