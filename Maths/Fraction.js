/**
 * @function fraction
 * @description This function returns the fraction of a float type number.
 * @param {number} num - a float type number is expected, but an integer will also work.
 * @param {number} accuracy - the accuracy of the fraction, the default is 6. like if the accuracy is 2 then for 1.333 result will be 10/9, where for 6 it will return 1333/1000.
 * @return {Array} - an array containing the numerator and denominator of the fraction.
 * @see https://en.wikipedia.org/wiki/Repeating_decimal and 
 * @see https://en.wikipedia.org/wiki/Decimal#Decimal_fractions
 * @example fraction(0.5) // [1, 2]
 * @example fraction(0.3333333333333333) // [1, 3]
 * @example fraction(0.25) // [1, 4]
 * @example fraction(5.56) // [139, 25]
 * @example fraction(0.33) // [33, 100]
 * @example fraction(0.33,2) // [10, 3] 
 */
function fraction(number, accuracy = 6) {
    if (typeof number === "number" && !Number.isNaN(number) && Number.isFinite(number)
        && typeof accuracy === "number" && !Number.isNaN(accuracy) && accuracy >= 1 && accuracy <= 16) {
        let neg = 1;
        // if number is a negative then following code will run
        if (number < 0) {
            neg = -1;
            number = Math.abs(number);
        }
        // if number is a 0 then it will return [0, 1]
        if (number === 0) return [0, 1];
        if (Number.isInteger(number)) return [neg * number, 1];
        // if number is a not an integer then following code will run
        number = number.toString();
        let len;
        let reg = number.match(/(\d+?)\1+$/);
        // if number is a repeating decimal then following code will run
        if (reg && reg[0].length > accuracy) {
            let pos = number.split(".");
            number = number.replace(reg[0], reg[1]);
            let rec = pos[0] + pos[1].replace(reg[0], "");
            number = Number(rec + reg[1]) - Number(rec);
            len = Number(
                "9".repeat(reg[1].length) + "0".repeat(rec.length - pos[0].length)
            );
        } else {
            // if number is not a repeating decimal then following code will run
            number = number.replace(".", "");
            len = 10 ** (number.length - 1);
            number = Number(number);
        }
        // it will find out the gcd of the number and the len to reduce the fraction nomitor and denominator like 4/8 will be 1/2
        let div = gcd(number, len);
        number /= div;
        len /= div;
        return [neg * number, len];
    } else {
        if (typeof number !== "number") throw new TypeError("Invalid number, a number type value expected");
        if (typeof accuracy !== "number") throw new TypeError("Invalid accuracy, a number type value expected");
        if (Number.isNaN(number)) throw new TypeError("Invalid number, a number type value expected");
        if (Number.isNaN(accuracy)) throw new TypeError("Invalid accuracy, a number type value expected");
        if (!Number.isFinite(number)) throw new RangeError("Invalid number, a finite number expected");
        if (accuracy < 1 || accuracy > 16) throw new RangeError("Invalid accuracy, a integer type value expected between 1 and 16");
    }
}

function gcd(a, b) {
    if (b == 0) return a;
    return gcd(b, a % b);
}

export { fraction };
