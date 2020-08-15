Number.toGrayCode = function(num) {
    if (num < 0) {
        throw new RangeError("number must be positive !!!");
    }
    return num ^ (num >>> 1);
};

Number.fromGrayCode = function(grayCodeNum) {
    if (grayCodeNum < 0) {
        throw new RangeError("gray code number must be positive !!!");
    }
    let grayCode = grayCodeNum.toString(2).split("");
    let binary = [];
    binary[0] = grayCode[0];
    for (let i = 1; i < grayCode.length; i++) {
        binary[i] = grayCode[i] ^ binary[i - 1];
    }

    return parseInt(binary.join(""), 2);
};
