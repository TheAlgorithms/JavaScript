# Coverage

Coverage tool used: Lizard

## five functions with highest cyclomatic complexity

| Function name                       | Complexity | Location                                                                           |
| ----------------------------------- | ---------- | ---------------------------------------------------------------------------------- |
| `caesarCipherEncodeAndDecodeEngine` | 26         | [Ciphers/KeyFinder.js ](./Ciphers/KeyFinder.js)                                    |
| `newGeneration`                     | 20         | [Cellular-Automata/ConwaysGameOfLife.js](./Cellular-Automata/ConwaysGameOfLife.js) |
| `hexLookup`                         | 18         | [Conversions/BinaryToHex.js ](./Conversions/BinaryToHex.js)                        |
| `flashSort`                         | 15         | [Sorts/FlashSort.js ](./Sorts/FlashSort.js)                                        |
| `integralEvaluation`                | 15         | [Maths/SimpsonIntegration.js ](./Maths/SimpsonIntegration.js)                      |

## Branch ids

### [caesarCipherEncodeAndDecodeEngine](./Ciphers/KeyFinder.js)

| Branch name                                            | unique number |
| ------------------------------------------------------ | ------------- |
| `if ((charCode >= 48 && charCode <= 57))`              | 1-1           |
| `if (shiftedCharCode < 48)`                            | 1-2           |
| `if (shiftedCharCode >= 48 && shiftedCharCode <= 57)`  | 1-3           |
| `if (shiftedCharCode > 57)`                            | 1-4           |
| `if ((charCode >= 65 && charCode <= 90))`              | 1-5           |
| `if (shiftedCharCode <= 64)`                           | 1-6           |
| `if (shiftedCharCode >= 65 && shiftedCharCode <= 90)`  | 1-7           |
| `if (shiftedCharCode > 90)`                            | 1-8           |
| `if ((charCode >= 97 && charCode <= 122))`             | 1-9           |
| `if (shiftedCharCode <= 96)`                           | 1-10          |
| `if (shiftedCharCode >= 97 && shiftedCharCode <= 122)` | 1-11          |
| `if (shiftedCharCode > 122)`                           | 1-12          |

### [newGeneration](./Cellular-Automata/ConwaysGameOfLife.js)

| Branch name                                                                                      | unique number |
| ------------------------------------------------------------------------------------------------ | ------------- |
| `if (i > 0 && j > 0)`                                                                            | 2-1           |
| `if (i > 0)`                                                                                     | 2-2           |
| `if (i > 0 && j < cells[i].length - 1)`                                                          | 2-3           |
| `if (j > 0)`                                                                                     | 2-4           |
| `if (j < cells[i].length - 1)`                                                                   | 2-5           |
| `if (i < cells.length - 1 && j > 0)`                                                             | 2-6           |
| `if (i < cells.length - 1)`                                                                      | 2-7           |
| `if (i < cells.length - 1 && j < cells[i].length - 1)`                                           | 2-8           |
| `if ((alive && neighbourCount >= 2 && neighbourCount <= 3) or (!alive && neighbourCount === 3))` | 2-9           |
| `else default`                                                                                   | 2-10          |

### [hexLookup](./Conversions/BinaryToHex.js)

| Branch name              | unique number |
| ------------------------ | ------------- |
| `if (binary.length < 4)` | 3-1           |
| `case '0000'`            | 3-2           |
| `case '0001'`            | 3-3           |
| `case '0010'`            | 3-4           |
| `case '0011'`            | 3-5           |
| `case '0100'`            | 3-6           |
| `case '0101'`            | 3-7           |
| `case '0110'`            | 3-8           |
| `case '0111'`            | 3-9           |
| `case '1000'`            | 3-10          |
| `case '1001'`            | 3-11          |
| `case '1010'`            | 3-12          |
| `case '1011'`            | 3-13          |
| `case '1100'`            | 3-14          |
| `case '1101'`            | 3-15          |
| `case '1110'`            | 3-16          |
| `case '1111'`            | 3-17          |

### [flashSort](./Sorts/FlashSort.js)

| Branch name              | unique number |
| ------------------------ | ------------- |
| `if (arr[i] < min)`      | 4-1           |
| `if (arr[i] > arr[max])` | 4-2           |
| `if (min === arr[max])`  | 4-3           |
| `if (k < 0)`             | 4-4           |

### [integralEvaluation](./Maths/SimpsonIntegration.js)

| Branch name                                                       | unique number |
| ----------------------------------------------------------------- | ------------- |
| `if (N % 2 !== 0)`                                                | 5-1           |
| `if (!Number.isInteger(N) or Number.isNaN(a) or Number.isNaN(b))` | 5-2           |
| `if (!isNEven)`                                                   | 5-3           |
| `if (N <= 0)`                                                     | 5-4           |
| `if (a > b)`                                                      | 5-5           |
| `if (a === b)`                                                    | 5-6           |
| `if (i === 0 or i === N)`                                         | 5-7           |
| `if (i % 2 === 0)`                                                | 5-8           |
| `if (Number.isNaN(result))`                                       | 5-9           |
