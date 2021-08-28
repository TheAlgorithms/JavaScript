const TitleCaseConversion = (inputString) => {
    // Extact all space seprated string.
    const stringCollections = inputString.split(' ').map(word => {
        let firstChar = '';
        // Get a character code by the use charCodeAt method.
        const firstCharCode = word[0].charCodeAt();
        // If the character code lies between 97 to 122 it means they are in the lower case so convert it.
        if(firstCharCode >= 97 && firstCharCode <= 122){
            // Convert the case by use of the above explanation.
            firstChar += String.fromCharCode(firstCharCode - 32);
        }else{
            // Else store the characters without any modification.
            firstChar += word[0];
        }
        const newWordChar = word.slice(1).split('').map(char => {
            // Get a character code by the use charCodeAt method.
            const presentCharCode = char.charCodeAt()
            // If the character code lies between 65 to 90 it means they are in the upper case so convert it.
            if (presentCharCode >= 65 && presentCharCode <= 90) {
                // Convert the case by use of the above explanation.
                return String.fromCharCode(presentCharCode + 32)
            }
            // Else return the characters without any modification.
            return char
        });
        // return the first converted character and remaining character string.
        return firstChar + newWordChar.join('');
    });
    // convert all words in a string and return it.
    return stringCollections.join(' ');
}

console.log(TitleCaseConversion("thIs is A mY best n string."));