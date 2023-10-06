/**
 * @function strip
 * @description Removes specified characters from the beginning and end of a string.
 * @param {string} str - The input string
 * @param {string} chars - The characters to strip from the string
 * @return {string} String with specified characters stripped
 * @example strip("   hello   ", " ") => "hello"
 * @example strip("...world...", ".") => "world"
 */
const strip = (str, chars) => {
    if (typeof str !== 'string' || typeof chars !== 'string') {
        throw new TypeError('Both arguments should be strings');
    }


    const pattern = `^[${chars}]+|[${chars}]+$`;


    const exp = new RegExp(pattern, 'g');


    return str.replace(exp, '');
};

export default strip;
