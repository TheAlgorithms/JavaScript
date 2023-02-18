## coverage tool used: Lizard

## five functions with highest cyclomatic complexity

|function Name| Complexity| Location|
|-------------|-----------|---------|
|caesarCipherEncodeAndDecodeEngine| 26| ./Ciphers/KeyFinder.js|
|newGeneration| 20|./Cellular-Automata/ConwaysGameOfLife.js|
|hexLookup| 18|./Conversions/BinaryToHex.js|
|flashSort|15|./Sorts/FlashSort.js|
|integralEvaluation|15|./Maths/SimpsonIntegration.js


## branches UID

## caesarCipherEncodeAndDecodeEngine
|Branch Name| unique number|
|-----------|--------------|
|if ((charCode >= 48 && charCode <= 57))|1|
|if (shiftedCharCode < 48)|2|
|if (shiftedCharCode >= 48 && shiftedCharCode <= 57)|3|
|if (shiftedCharCode > 57)|4|
|if ((charCode >= 65 && charCode <= 90))|5|
|if (shiftedCharCode <= 64) |6|
|if (shiftedCharCode >= 65 && shiftedCharCode <= 90)|7|
|if (shiftedCharCode > 90)|8|
|if ((charCode >= 97 && charCode <= 122))|9|
|if (shiftedCharCode <= 96)|10|
|if (shiftedCharCode >= 97 && shiftedCharCode <= 122)|11|
|if (shiftedCharCode > 122)|12|

## newGeneration
|Branch Name| unique number|
|-----------|--------------|
|if (i > 0 && j > 0)|1| 
|if (i > 0)|2|
|if (i > 0 && j < cells[i].length - 1)|3|
|if (j > 0) |4|
|if (j < cells[i].length - 1)|5|
|if (i < cells.length - 1 && j > 0)|6|
|if (i < cells.length - 1)|7|
|if (i < cells.length - 1 && j < cells[i].length - 1)|8|
|if ((alive && neighbourCount >= 2 && neighbourCount <= 3) or (!alive && neighbourCount === 3))|9|
| else default|10|

## hexLookup
|Branch Name| unique number|
|-----------|--------------|
|if (binary.length < 4)|1|
|case '0000'|2|
|case '0001'|3|
|case '0010'|4|
|case '0011'|5|
|case '0100'|6|
|case '0101'|7|
|case '0110'|8|
|case '0111'|9|
|case '1000'|10|
|case '1001'|11|
|case '1010'|12|
|case '1011'|13|
|case '1100'|14|
|case '1101'|15|
|case '1110'|16|
|case '1111'|17|


## flashSort
|Branch Name| unique number|
|-----------|--------------|
|if (arr[i] < min)|1|
|if (arr[i] > arr[max])|2|
|if (min === arr[max])|3|
|if (k < 0)|4|

## integralEvaluation
|Branch Name| unique number|
|-----------|--------------|
|if (N % 2 !== 0)|1|
|if (!Number.isInteger(N) or Number.isNaN(a) or Number.isNaN(b))|2|
|if (!isNEven)|3|
|if (N <= 0)|4|
|if (a > b)|5|
|if (a === b)|6|
|if (i === 0 or i === N)|7|
|if (i % 2 === 0)|8|
|if (Number.isNaN(result))|9|