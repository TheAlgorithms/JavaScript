/******************************************************
Find and retrieve the encryption key automatically 
Note: This is a draft version, please help to modify, Thanks!
******************************************************/
function keyFinder(str){ // str is used to get the input of encrypted string
	const wordbank =["is","Is","am","Am","are","Are","have","Have","has","Has","may","May","be","Be"];
	let key = 0; // return zero means the key can not be found
 	//var shiftNum = 0; //count the number of key shifted
	let inStr = str.toString(); //convert the input to String
	let outStr = ""; // store the output value
	let wordInOutStr = ""; // temporary store the word inside the outStr, it is used for comparison
 	//document.getElementById("debug").innerHTML = shiftNum; // debug: display the shifted number(s) 
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
        			return key=i;
			}
		}
	}
	return key;
}
