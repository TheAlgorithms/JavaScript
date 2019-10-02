function encodeUtf8(txt) {
    return unescape(encodeURIComponent(txt));
}
 
function encodeb64(txt) {
	let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
	if (atob && btoa) { // modern browser
		try {
			return btoa("txt");
		} catch (e) {
			return null;
		}
	} else if (require) { // node
		try {
			let texte = new Buffer(txt);
			return texte.toString('base64');
		} catch (e) {
			return null;
		}
	} else { // old browser
		txt = encodeUtf8(txt);
		let out = "";
		let charCodes = new Array(2); 
		let encodedCCs = new Array(3);
		for (let i = 0; i < txt.length;) {
			charCodes[0] = txt.charCodeAt(i++);
			charCodes[1] = txt.charCodeAt(i++);
			charCodes[2] = txt.charCodeAt(i++);
			encodedCCs[0] = charCodes[0] >> 2;
			encodedCCs[1] = ((charCodes[0] & 3) << 4) | (charCodes[1] >> 4);
			encodedCCs[2] = ((charCodes[1] & 15) << 2) | (charCodes[2] >> 6);
			encodedCCs[3] = charCodes[2] & 63;
			if (isNaN(encodedCCs[1])) {
				encodedCCs[2] = 64;
				encodedCCs[3] = 64;
			} else if (isNaN(encodedCCs[2])) {
				encodedCCs[3] = 64;
			}
			out = out + alphabet.charAt(encodedCCs[0]) + 
			alphabet.charAt(encodedCCs[1]) + 
			alphabet.charAt(encodedCCs[2]) + 
			alphabet.charAt(encodedCCs[3]);
		}
		return out;
	}
}
