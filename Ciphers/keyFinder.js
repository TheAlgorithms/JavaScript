/******************************************************
Find and retrieve the encryption key automatically 
Note: This is a draft version, please help to modify, Thanks!
******************************************************/
function keyFinder(str){ // str is used to get the input of encrypted string
	const wordbank =["is","Is","am","Am","are","Are","have","Have","has","Has","may","May","be","Be"];
	let key = 0; // return zero means the key can not be found
	let inStr = str.toString(); //convert the input to String
	let outStr = ""; // store the output value
	let wordInOutStr = ""; // temporary store the word inside the outStr, it is used for comparison
 	for (let i=0; i<(52); i++){ //try the number of key shifted, the sum of character from a-z and A-Z is 26*2=52
		outStr = caesarCipherEncodeAndDecodeEngine(inStr,i); // use the encrytpion engine to decrypt the input string, shiftNum=i
		for ( let i=0; i<wordbank.length; i++){
			// use a loop to find the next digit of wordbank element and compare with outStr's digit
			for ( let j=0; j < wordbank[i].length; j++){
				wordInOutStr += outStr[i+j];
			}
			// this part need to be optimize with the calculation of the number of occurance of word's probabilities
			// linked list will be used in the next stage of development to calculate the number of occurace of the key
			if (wordbank[i] == wordInOutStr){
        			return key=i; // return the key number if founded
			}
		}
	}
	return 0; // return 0 if found nothing
}

/* this sub-function is used to assist the keyfinder to find the key */
function caesarCipherEncodeAndDecodeEngine(inStr, numShifted)
{
	let shiftNum = numShifted; 
	let charCode = 0;
	let outStr = "";
	let shftedcharCode = 0;
	let result = 0;

	for (let i=0; i<inStr.length; i++){

		charCode = inStr[i].charCodeAt();
		shftedcharCode = charCode + shiftNum;
		result = charCode;

		if ( (charCode>=48 && charCode<=57))
		{
			if ( shftedcharCode < 48 ){

		  		let diff = Math.abs(48-1-shftedcharCode)%10;

				while( diff >= 10){
		  			diff = diff%10;
				}
				document.getElementById("diffID").innerHTML = diff;

				shftedcharCode = 57-diff;
				
				result = shftedcharCode;
			}

		  	else if ( shftedcharCode>=48 && shftedcharCode<=57 ){
				result = shftedcharCode;
			}

			else if ( shftedcharCode > 57 ){

		  		let diff = Math.abs(57+1-shftedcharCode)%10;

				while( diff >= 10){
		  			diff = diff%10;
				}
				document.getElementById("diffID").innerHTML = diff;

				shftedcharCode = 48+diff;

				result = shftedcharCode;
			}


		}

		else if ( (charCode>=65 && charCode<=90) )
		{

		  	if (shftedcharCode <=64 ){

		  		let diff = Math.abs(65-1-shftedcharCode)%26;

				while( (diff%26) >= 26){
		  			diff = diff%26;
				}
				shftedcharCode = 90-diff;
				result = shftedcharCode;
			}

		  	else if ( shftedcharCode>=65 && shftedcharCode<=90 ){
				result = shftedcharCode;
			}

			else if (shftedcharCode>90 ){
				let diff = Math.abs(shftedcharCode-1-90)%26;

				while( (diff%26) >= 26){
		  			diff = diff%26;
				}
				shftedcharCode = 65+diff;
				result = shftedcharCode;
			}
		
		}

		else if ( (charCode>=97 && charCode<=122))
		{
		  	if ( shftedcharCode<=96 ){

		  		let diff = Math.abs(97-1-shftedcharCode)%26;

				while( (diff%26) >= 26){
		  			diff = diff%26;
				}
				shftedcharCode = 122-diff;
				result = shftedcharCode;
			}

		  	else if ( shftedcharCode>=97 && shftedcharCode<=122 ){
				result = shftedcharCode;
			}

			else if (shftedcharCode>122 ){
				let diff = Math.abs(shftedcharCode-1-122)%26;

				while( (diff%26) >= 26){
		  			diff = diff%26;
				}
				shftedcharCode = 97+diff;
				result = shftedcharCode;
			}
		
		}
		outStr = outStr + String.fromCharCode(parseInt(result));
	}
	return outStr;
}
