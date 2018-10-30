/******************************************************
Find and retrieve the encryption key automatically 
Note: This is a draft version, please help to modify, Thanks!
******************************************************/
function keyFinder(str){ // str is used to get the input of encrypted string
	var key = 0; // return zero means the key can not be found
	var wordbank =["is","Is","am","Am","are","Are","have","Have","has","Has","may","May","be","Be"];
 	//var shiftNum = 0; //count the number of key shifted
	var inStr = str.toString(); //convert the input to String
	var outStr = ""; // store the output value
	var wordInOutStr = ""; // temporary store the word inside the outStr, it is used for comparison
 	//document.getElementById("debug").innerHTML = shiftNum; // debug: display the shifted number(s) 
 	for (var i=0; i<(52); i++){ //try the number of key shifted, the sum of character from a-z and A-Z is 26*2=52
		outStr = caesarCipherEncodeAndDecodeEngine(inStr,i); // use the encrytpion engine to decrypt the input string, shiftNum=i
		for ( var i=0; i<wordbank.length; i++){
			// use a loop to find the next digit of wordbank element and compare with outStr's digit
			for ( var j=0; j < wordbank[i].length; j++){
				wordInOutStr += outStr[i+j];
			}
			// this part need to be optimize with the calculation of the number of occurance of word's probabilities
			if (wordbank[i] == wordInOutStr){
        			key=i;
			}
		}
	}
	return key;
}
