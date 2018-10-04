class binarySystem {
	convertToBinary(text = '') {
		let final = '';
		for (let i = 0; i < text.length; i++) {
			let binary = '', result = '', number = text.charCodeAt(i);
			
			while (number != 0) {
				binary += number % 2;
				number /= 2;
				number = parseInt(number);
			}

			let length = binary.length;
			if (length < 8)
				for (let i = 0; i < 8 - length; i++)
					binary += '0';

			for (let i = binary.length - 1; i >= 0; i--)
				result += binary[i];

			final += result + ' ';
		}

		return final.trim();
	}

	convertToText(binary = '') {
		let text = [], binaryCode = binary.split(' ');
		for (let i = 0; i < binaryCode.length; i++) {
			let qtd = 0, atual = 0;
			for (let j = binaryCode[i].length - 1; j >= 0; j--) {
				if (binaryCode[i][j] == '1')
					qtd += 2 ** atual;
				atual++;
			}

			text.push(qtd);
		}

		return String.fromCharCode(...text);
	}
}

let system = new binarySystem();

(function main() {
	system.convertToBinary('Algorithm');
	system.convertToText('01000001 01101100 01100111 01101111 01110010 01101001 01110100 01101000 01101101');
})();