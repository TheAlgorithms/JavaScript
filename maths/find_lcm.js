/*
    author: PatOnTheBack
    license: GPL-3.0 or later

    Modified from:
        https://github.com/TheAlgorithms/Python/blob/master/maths/find_lcm.py

    More about LCM:
        https://en.wikipedia.org/wiki/Least_common_multiple
*/

// Find the LCM of two numbers.
function find_lcm(num_1, num_2) {
    "use strict";
    var max_num,
        lcm;
    // Check to see whether num_1 or num_2 is larger.
    if (num_1 > num_2) {
        max_num = num_1;
    } else {
        max_num = num_2;
    }
    lcm = max_num;

    while (true) {
        if ((lcm % num_1 === 0) && (lcm % num_2 === 0)) {
            break;
        }
        lcm += max_num;
    }
    return lcm;
}

// Run `find_lcm` Function
var num_1 = 12,
    num_2 = 76;
console.log(find_lcm(num_1, num_2));
