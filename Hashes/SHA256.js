//================================================================
// SHA256.js
//
// Module that replicates the SHA-256 Cryptographic Hash 
// function in Javascript.
//================================================================

//main variables
const CHAR_SIZE = 8;

const K = [
   0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
   0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
   0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
   0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
   0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
   0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
   0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
   0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
];

/**
 * Adds padding to binary/hex string represention
 *
 * @param {string} str - string represention (binary/hex)
 * @param {int} bits - total number of bits wanted
 * @return {string} - string represention padding with empty (0) bits
 *
 * @example
 *      pad("10011", 8); // "00010011"
 */
function pad(str, bits) {
    let res = str;
    while (res.length % bits !== 0) {
        res = "0" + res;
    }
    return res;
}

/**
 * Separates string into chunks of the same size
 *
 * @param {string} str - string to separate into chunks
 * @param {int} size - number of characters wanted in each chunk
 * @return {array} - array of original string split into chunks
 *
 * @example
 *      chunkify("this is a test", 2); // ["th", "is", " i", "s ", "a ", "te", "st"]
 */
function chunkify(str, size) {
    let chunks = [];
    for (let i = 0; i < str.length; i += size) {
        chunks.push(str.slice(i, i + size));
    }
    return chunks;
}

/**
 * Rotates string represention of bits to th left
 *
 * @param {string} bits - string representation of bits
 * @param {int} turns - number of rotations to make
 * @return {string} - string representation of bits after rotation
 *
 * @example
 *      rotateLeft("1011", 3); // "1101"
 */
function rotateRight(bits, turns) {
	return bits.substr(bits.length - turns) + bits.substr(0, bits.length - turns);
}

/**
 * Pre-processes message to feed the algorithm loop
 *
 * @param {string} message - message to pre-process
 * @return {string} - processed message
 */
function preProcess(message) {
	//covert message to binary representation padded to
    //8 bits, and add 1
    let m = message.split("")
        .map(e => e.charCodeAt(0))
        .map(e => e.toString(2))
        .map(e => pad(e, 8))
        .join("") + "1";

    //extend message by adding empty bits (0)
    while (m.length % 512 !== 448) {
        m += "0";
    }

    //length of message in binary, padded, and extended
    //to a 64 bit representation
    let ml = (message.length * CHAR_SIZE).toString(2);
    ml = pad(ml, 8);
    ml = "0".repeat(64 - ml.length) + ml;

    return m + ml;
}

/**
 * Hashes message using SHA-256 Cryptographic Hash Function
 *
 * @param {string} message - message to hash
 * @return {string} - message digest (hash value)
 */
function SHA256(message) {
    //initial hash variables
    let H0 = 0x6a09e667;
    let H1 = 0xbb67ae85;
    let H2 = 0x3c6ef372;
    let H3 = 0xa54ff53a;
    let H4 = 0x510e527f;
    let H5 = 0x9b05688c;
    let H6 = 0x1f83d9ab;
    let H7 = 0x5be0cd19;

    //pre-process message and split into 512 bit chunks
    let bits = preProcess(message);
    let chunks = chunkify(bits, 512);
    
    chunks.forEach(function(chunk, i) {
        //break each chunk into 16 32-bit words
        let words = chunkify(chunk, 32);

        //extend 16 32-bit words to 80 32-bit words
        for (let i = 16; i < 64; i++) {
        	const W1 = words[i - 15];
        	const W2 = words[i - 2];
            const R1 = rotateRight(W1, 7);
            const R2 = rotateRight(W1, 18);
            const R3 = rotateRight(W2, 17);
            const R4 = rotateRight(W2, 19);
            const S0 = parseInt(R1, 2) ^ parseInt(R2, 2) ^ (parseInt(W1, 2) >>> 3); 
	    	const S1 = parseInt(R3, 2) ^ parseInt(R4, 2) ^ (parseInt(W2, 2) >>> 10); 
           	const val = parseInt(words[i - 16], 2) + S0 + parseInt(words[i - 7], 2) + S1;
           	words[i] = pad((val >>> 0).toString(2), 32);
        }

        //initialize variables for this chunk
        let [a, b, c, d, e, f, g, h] = [H0, H1, H2, H3, H4, H5, H6, H7];

        for (let i = 0; i < 64; i++) {
        	const S1 = [6, 11, 25]
	        	.map(turns => rotateRight(pad(e.toString(2), 32), turns))
	        	.map(bitstring => parseInt(bitstring, 2))
        		.reduce((acc, curr) => acc ^ curr, 0) >>> 0;
        	const CH = ((e & f) ^ (~e & g)) >>> 0; 
        	const temp1 = (h + S1 + CH + K[i] + parseInt(words[i], 2)) >>> 0;
        	const S0 = [2, 13, 22]
	        	.map(turns => rotateRight(pad(a.toString(2), 32), turns))
	        	.map(bitstring => parseInt(bitstring, 2))
        		.reduce((acc, curr) => acc ^ curr, 0) >>> 0;
        	const maj = ((a & b) ^ (a & c) ^ (b & c)) >>> 0;
        	const temp2 = (S0 + maj) >>> 0;

        	h = g;
        	g = f;
        	f = e;
        	e = (d + temp1) >>> 0;
        	d = c;
        	c = b;
        	b = a;
        	a = (temp1 + temp2) >>> 0;
        }

        //add values for this chunk to main hash variables (unsigned)
        H0 = (H0 + a) >>> 0;
        H1 = (H1 + b) >>> 0;
        H2 = (H2 + c) >>> 0;
        H3 = (H3 + d) >>> 0;
        H4 = (H4 + e) >>> 0;
        H5 = (H5 + f) >>> 0;
        H6 = (H6 + g) >>> 0;
        H7 = (H7 + h) >>> 0;
    });

    //combine hash values of main hash variables and return
    let HH = [H0, H1, H2, H3, H4, H5, H6, H7]
        .map(e => e.toString(16))
        .map(e => pad(e, 8))
        .join("");

    return HH;
}

//export SHA256 function
module.exports = SHA256;
