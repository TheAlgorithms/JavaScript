/**
 * @function fraction
 * @description This function returns the fraction of a float type number.
 * @param {number} num - a float type number is expected, but an integer will also work.
 * @param {number} accuracy - the accuracy of the fraction, the default is 6.
 * @return {Array} - an array containing the numerator and denominator of the fraction.
 * @see https://en.wikipedia.org/wiki/Repeating_decimal and @see https://en.wikipedia.org/wiki/Decimal#Decimal_fractions
 * @example fraction(0.5) // [1, 2]
 * @example fraction(0.3333333333333333) // [1, 3]
 * @example fraction(0.25) // [1, 4]
 * @example fraction(5.56) // [139, 25]
 * @example fraction(0.33) // [33, 100]
 */
function fraction(number, accuracy = 6) {
  let inp = typeof number === "number" ? number : false;
  let acc = typeof accuracy === "number" ? accuracy : false;
  if (inp !== false && acc !== false) {
    if (Number.isInteger(inp)) {
      return [inp, 1];
    } else {
      inp = inp.toString();
      let len;
      let reg = inp.match(/(\d+?)\1+$/);
      if (reg && reg[0].length > acc) {
        let pos = inp.split(".");
        inp = inp.replace(reg[0], reg[1]);
        let rec = pos[0] + pos[1].replace(reg[0], "");
        inp = Number(rec + reg[1]) - Number(rec);
        len = Number(
          "9".repeat(reg[1].length) + "0".repeat(rec.length - pos[0].length)
        );
      } else {
        inp = inp.replace(".", "");
        len = 10 ** (inp.length - 1);
        inp = Number(inp);
      }
      let d = true;
      while (d) {
        if (inp % 5 == 0 && len % 5 == 0) {
          inp /= 5;
          len /= 5;
        } else if (inp % 2 == 0 && len % 2 == 0) {
          inp /= 2;
          len /= 2;
        } else if (inp % 3 == 0 && len % 3 == 0) {
          inp /= 3;
          len /= 3;
        } else if (inp % 7 == 0 && len % 7 == 0) {
          inp /= 7;
          len /= 7;
        } else {
          d = false;
        }
      }
      return [inp, len];
    }
  } else {
    if (inp === false) {
      throw new TypeError("Invalid number");
    } else {
      throw new TypeError("Invalid accuracy");
    }
  }
}

export { fraction };
