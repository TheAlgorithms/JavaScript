'use strict';
const {stdin} = process;

module.exports = () => {
	let result = '';

	return new Promise(resolve => {
		if (stdin.isTTY) {
			resolve(result);
			return;
		}

		stdin.setEncoding('utf8');

		stdin.on('readable', () => {
			let chunk;

			while ((chunk = stdin.read())) {
				result += chunk;
			}
		});

		stdin.on('end', () => {
			resolve(result);
		});
	});
};

module.exports.buffer = () => {
	const result = [];
	let length = 0;

	return new Promise(resolve => {
		if (stdin.isTTY) {
			resolve(Buffer.concat([]));
			return;
		}

		stdin.on('readable', () => {
			let chunk;

			while ((chunk = stdin.read())) {
				result.push(chunk);
				length += chunk.length;
			}
		});

		stdin.on('end', () => {
			resolve(Buffer.concat(result, length));
		});
	});
};
