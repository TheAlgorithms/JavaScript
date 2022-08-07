/**
 * @function removeRepeatedStringFromArray
 * @description Will remove repeated string from array
 * @param {Array} arrays - The input array
 * @returns {Array} uniqueStr - array without repeated string
 * @example removeRepeatedStringFromArray('A', 'D', 'B', 'A', 'C', 'B') => [ 'A', 'D', 'B', 'C' ]
 * @example removeRepeatedStringFromArray('apple', 'banana', 'apple', 'orange', 'coconut', 'coconut') => [ 'apple', 'banana', 'orange', 'coconut' ]
 */

 const removeRepeatedStringFromArray = (...arrays) => {
    let uniqueStr = [...new Set(arrays)]
    return uniqueStr
}

export {removeRepeatedStringFromArray}
