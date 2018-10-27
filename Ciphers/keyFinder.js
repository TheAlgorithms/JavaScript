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
 	//document.getElementById("debug").innerHTML = shiftNum; // debug: display the shifted number(s) 
 	for (var i=0; i<(52); i++){ //try the number of key shifted, the sum of character from a-z and A-Z is 26*2=52
		outStr = caesarCipherEncodeAndDecodeEngine(inStr,i); // use the encrytpion engine to decrypt the input string, shiftNum=i
		for ( var i=0; i<wordbank.length; i++){
			if (wordbank[i] == outStr[i]+outStr[i+1]{
        			key=i;
			}
		}
	}
	return key;
}
