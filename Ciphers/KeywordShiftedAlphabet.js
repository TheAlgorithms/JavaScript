/**
 * Keyword shifted alphabet is a simple cipher using a translation table created with a help of a keyword.
 * Keyword must be a word where each character can occur only once.
 * To create the translation table, we write all the alphabet characters to the first.
 * Second row start with the keyword, then we continue with the rest of the characters that are missing in alphabetical order.
 *
 * |A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z|
 * |K|E|Y|W|O|R|D|A|B|C|F|G|H|I|J|L|M|N|P|Q|S|T|U|V|W|Z|
 *
 * Encryption is then just a matter of writing the matching (same index) letter from the second row instead of the first row:
 * 'Hello world' -> 'Aoggj ujngw'
 *
 * Decryption is then just the reverse process of writing the matching (same index) letter from the first row instead of the second row
 * 'Aogg ujngw' -> 'Hello world'
 *
 * Non alphabetical characters (space, exclamation mark, ...) are kept as they are
 */

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function checkKeywordValidity(keyword) {
	keyword.split('').forEach((char, index) => {
		const rest = keyword.slice(0, index) + keyword.slice(index + 1);
		if (rest.indexOf(char) !== -1) {
			return false;
		}
	})
	return true;
}

function getEncryptedAlphabet(keyword) {
	const encryptedAlphabet = keyword.split('');
	alphabet.forEach((char) => {
		if (encryptedAlphabet.indexOf(char) === -1) {
			encryptedAlphabet.push(char);
		}
	});
	return encryptedAlphabet;
}

function translate(sourceAlphabet, targetAlphabet, message) {
	return message.split('').reduce((encryptedMessage, char) => {
		const isUpperCase = char === char.toUpperCase();
		const encryptedCharIndex = sourceAlphabet.indexOf(char.toLowerCase());
		const encryptedChar = encryptedCharIndex !== -1 ? targetAlphabet[encryptedCharIndex] : char
		return encryptedMessage += isUpperCase ? encryptedChar.toUpperCase() : encryptedChar;
	}, '');
}

function checkInputs(keyword, message) {
	if (!keyword || !message) {
		throw new Error('Both keyword and message must be specified');
	}

	if (!checkKeywordValidity(keyword)) {
		throw new Error('Invalid keyword!')
	}
}

function encrypt(keyword, message) {
	checkInputs(keyword, message);
	return translate(alphabet, getEncryptedAlphabet(keyword.toLowerCase()), message);
}

function decrypt(keyword, message) {
	checkInputs(keyword, message);
	return translate(getEncryptedAlphabet(keyword.toLowerCase()), alphabet, message);
}

console.log(encrypt('keyword', 'Hello world!')); // Prints 'Aoggj ujngw!'
console.log(decrypt('keyword', 'Aoggj ujngw!')); // Prints 'Hello world!