/**
 * @function limit
 * @description This function calculates the limit of a mathematical function as it approaches a specified value.
 * @param {number} value - The value at which the limit is calculated.
 * @param {function} func - The callback number type function, means a function which returns a number for a input, to calculate the limit.
 * @param {number} [accuracy=4] - The accuracy of the limit. The default value is 4.
 * @return {number} - The limit of the function as it approaches the specified value.
 * @see https://en.wikipedia.org/wiki/Limit_of_a_function
 * @example limit(Infinity, (x) => (2 * x - 1) / x); returns 2
 * @example limit(2, (x) => x ** 2) returns 4
 * @example limit(1, Math.sin) returns approximately 0.84147
 */
function limit(tendsTo, func, accuracy = 4) {
  let result;
  let tt =
    typeof tendsTo == "number" && !Number.isNaN(tendsTo) ? tendsTo : false;
  let fc = typeof func == "function" ? func : false;
  let ac =
    typeof accuracy == "number" &&
    Number.isInteger(accuracy) &&
    !Number.isNaN(accuracy) &&
    accuracy > 0 &&
    accuracy < 11
      ? accuracy
      : false;
  if (tt !== false && fc !== false && ac !== false) {
    try {
      let result = fc(0.2);
      if (typeof result == "undefined")
        throw new SyntaxError("returned value is undefined");
      else if (typeof result !== "number")
        throw new SyntaxError("returned value is not a number");
    } catch (e) {
      throw new SyntaxError(e.message + " in the function you provided");
    }
    if (tt == Infinity) {
      let de = Number.MAX_VALUE / Number.MAX_SAFE_INTEGER ** (2 * (10 - 1) + 1);
      result = func(de);
    } else if (tt == -Infinity) {
      let de = Number.MAX_VALUE / Number.MAX_SAFE_INTEGER ** (2 * (10 - 1) + 1);
      result = func(-de);
    } else {
      result = (fc(tt - 10 ** -(ac * 2)) + fc(tt + 10 ** -(ac * 2))) / 2;
    }
    return Number(result.toFixed(ac));
  } else {
    if (tt === false)
      throw new TypeError("please provide a valid number in tendsTo parameter");
    else if (fc === false)
      throw new TypeError(
        "please provide a valid callback function in func parameter"
      );
    else if (ac === false)
      throw new TypeError(
        "please provide a valid number in accuracy parameter"
      );
    else console.error("Somthing went wrong in limit function");
  }
}
export {limit}
