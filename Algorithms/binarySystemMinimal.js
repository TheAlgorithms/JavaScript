class binarySystemMinimal {
	convertToBinary(text) {	console.log(text.split('').map(letter => letter.charCodeAt(0).toString(2)).join(' ')); }
	convertToText(binary) {	console.log(binary.split(' ').map(binaryCode => String.fromCharCode(parseInt(binaryCode, 2))).join('')); }
}

let systemMinimal = new binarySystemMinimal();

(function main() {
	systemMinimal.convertToBinary('Lucas');
	systemMinimal.convertToText('1001100 1110101 1100011 1100001 1110011');
})();