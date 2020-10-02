/*
    @param {string} a
    @param {string} b
    @return {number}
    
    The Hamming distance is one of several string metrics for measuring the edit distance between two sequences.
*/
const hammingDistance = (a, b) => {
    if (a.length !== b.length) {
      throw new Error('Strings must be of the same length');
    }
  
    let distance = 0;
  
    for (let i = 0; i < a.length; i += 1) {
      if (a[i] !== b[i]) {
        distance += 1;
      }
    }
  
    return distance;
}

//testing
console.log(hammingDistance('1011101', '1001001'))
console.log(hammingDistance('priyanshu', 'priyanshi'))
  