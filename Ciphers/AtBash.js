function enAtbash(mensage) {    

    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var tebahpla = "ZYXWVUTSRQPONMLKJIHGFEDCBA";
    var alphabet1 = "abcdefghijklmnopqrstuvwxyz";
    var tebahpla1 = "zyxwvutsrqponmlkjihgfedcba";
    var decoded_string = "";

    for (var i = 0; i < mensage.length; i++) {
        var coded_letra = mensage.charAt(i);
        
	if (/[^a-zA-Z]/.test(mensage[i])) {
		decoded_string = decoded_string+mensage[i];	
	}
	else if (mensage[i] === mensage[i].toUpperCase()) {
	    	var letraPosMayus = alphabet.indexOf(coded_letra);
	    	var tebLetraPosMayus = tebahpla.charAt(letraPosMayus);
	    	decoded_string = decoded_string+tebLetraPosMayus;
        } else {
	    	var letraPosMinus1 = alphabet1.indexOf(coded_letra);
	    	var tebLetraPosMinus1 = tebahpla1.charAt(letraPosMinus1);
	    	decoded_string = decoded_string + tebLetraPosMinus1;
        }

    }
    return decoded_string;
}

document.write(enAtbash("Hello World!"));
