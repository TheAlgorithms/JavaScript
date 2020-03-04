function generate_key_table(key) { 
/**
 * Generates the 5x5 key square
 * @param {String} key - the key used to start the key square
 * @return {Object} key_square - the 5x5 key square
 */

    // Create an empty key_square table
    let key_square = [
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', '']
    ];

    
    let x = 0, y = 0;   // These are used to index the key_square table
    // Adding the key to the first elements of the key_square
    for (let i = 0; i < key.length; i++) {    
        key_square[y][x] = key[i];
        x = x+ 1;
        if (x > 4) {
            x = 0;
            y +=1;
        }
    }

    let remaining_chars = get_remaining_chars(key);
    
    // Add the remaining chars into the key_square
    for (let i = 0; i < remaining_chars.length; i++) {
        key_square[y][x] = remaining_chars[i];
        x = x + 1;
        if (x > 4) {
            x = 0;
            y += 1;
        }
    }
    return key_square;
}


function get_remaining_chars(key) {
/**
 * Gets the remaining alphabets not used in key
 * @param {String} key - the key used to start the key square
 * @return {String} alphabets - All the letters of the alphabet minus those used in key
 **/    
    
    let alphabets = "abcdefghiklmnopqrstuvwxyz"; // j is removed from the alphabet list
    // The reason for removing j is because the 5x5 square can only hold 25 characters
    // whereas the total number of alphabets is 26

    // Gonna remove monarchy from the alphabet
    for (const letter of key) {
        alphabets = alphabets.replace(letter, '');
    }
    return alphabets;
}


function sameColumn(locations) {
    // Checks to see if the two locations are in the same column
    return locations[0][1] === locations[1][1];
}

function sameRow(locations) {
    // Checks to see if the two locations are in the same row
    return locations[0][0] === locations[1][0];
}

function encrypt(key, plainText) {
    // Function to encrypt the plainText
    let key_square = generate_key_table(key);
    let diagraphs = generateDiagraphs(plainText);
    let encryptedText = '';

    for (const diagraph of diagraphs) {
        let locations = search(key_square, diagraph);
        if (sameColumn(locations)) {
            // what if they're in the same column?
            encryptedText += (key_square[(locations[0][0] + 1) % 5][locations[0][1]]);
            encryptedText +=(key_square[(locations[1][0] + 1) % 5][locations[1][1]]);
        }

        else if (sameRow(locations)) {
            // what if they're in the same column?
            encryptedText += (key_square[locations[0][0]][(locations[0][1] + 1) % 5]);
            encryptedText +=(key_square[locations[1][0]][(locations[1][1] + 1) % 5]);
            
        }
        else {
            // what if they're neither in the same row nor the same column?
            let a = [locations[0][0], locations[0][1]]
            let b = [locations[1][0], locations[1][1]];
            /*
            If neither of the above rules is true: 
                Form a rectangle with the two letters and take 
                the letters on the horizontal opposite corner of the rectangle. 
            */
            encryptedText += key_square[a[0]][b[1]]; 
            encryptedText += key_square[b[0]][a[1]];
        }
    }
    return encryptedText;
}


function decrypt(key, cipherText) {
    // Function to decrypt the ciphertext
    let key_square = generate_key_table(key);
    let diagraphs = generateDiagraphs(cipherText);
    let decryptedText = '';

    for (const diagraph of diagraphs) {
    let locations = search(key_square, diagraph);
        
        
        if (sameColumn(locations)) {
            decryptedText += (key_square[(locations[0][0] - 1 + 5) % 5] [locations[0][1]]);
            decryptedText += (key_square[(locations[1][0] - 1 + 5) % 5] [locations[1][1]]);  
        }
        else if (sameRow(locations)) {
            decryptedText += (key_square[locations[0][0]][(locations[0][1] - 1 + 5) % 5]);
            decryptedText += (key_square[locations[1][0]][(locations[1][1] - 1 + 5) % 5]);    
        }
        else {
            // what if they're neither in the same row nor the same column?
            let a = [locations[0][0], locations[0][1]]
            let b = [locations[1][0], locations[1][1]];
            /*
            If neither of the above rules is true: 
                Form a rectangle with the two letters and take 
                the letters on the horizontal opposite corner of the rectangle. 
            */
            decryptedText += key_square[a[0]]  [b[1]]; 
            decryptedText += key_square[b[0]]  [a[1]];
        }
    }
    return decryptedText;
}
function search(key_square, diagraph) {
    /*
        Returns the locations of the diagraphs inside the key_square
        @returns {Array} - [
            [col1, row1], 
            [col2, row2]
        ]
    */
    let a = diagraph[0], b = diagraph[1];
    if (a === 'j')
        a = 'i';
    else if (b === 'j')
        b = 'i';
    
    let locations = [];

    // j = rows i = cols
    for (let j = 0; j < 5; j++) {
        for (let i = 0; i < 5; i++) {
            if (key_square[j][i] === a)
                locations.push([j, i]);
        }
    }

    for (let j = 0; j < 5; j++) {
        for (let i = 0; i < 5; i++) {
            if (key_square[j][i] === b)
                locations.push([j, i]);
        }
    }

    return locations;
    
}

function generateDiagraphs(plainText) {
/** 
 * Splits the plainText into groups of 2 
 * For example: "back" is broken into "ba" and "ck"
 * Adds 'z' to the last diagraph if the length of the message is odd
 * @param {String} plainText - The message to be encrypted
 * @returns {Array} diagraphs - The message in chunks of 2
 * 
**/
    // Splits the plaintext into diagraphs
    let diagraphs =  plainText.match(/.{1,2}/g);

    // Adds z to the last diagraph if plainText has odd number of letters
    if (diagraphs[diagraphs.length - 1].length == 1) {
        diagraphs[diagraphs.length - 1] = diagraphs[diagraphs.length - 1] + 'z';
    }
    return diagraphs;
}

let plainText = "instruments";
let key = "monarchy";
let key_square = generate_key_table(key);
let diagraphs = generateDiagraphs(plainText);
let cipherText = encrypt(key, plainText);
let decryptedText = decrypt(key, cipherText);

console.log(`Plaintext: ${plainText}`);
console.log(`Key: ${key}`);
console.log(`Ciphertext: ${cipherText}`);
console.log(`Decrypted text: ${decryptedText}`);
