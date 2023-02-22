# Report for assignment 3

This is a template for your report. You are free to modify it as needed.
It is not required to use markdown for your report either, but the report
has to be delivered in a standard, cross-platform format.

## 1 Project

Name: [TheAlgorithms/JavaScript](https://github.com/TheAlgorithms/JavaScript)

URL: <https://github.com/DD2480-Group-23-2/JavaScript>

The project is a library of algorithms and data structures implemented in JavaScript.

## 2 Onboarding experience

### 2.1 [Swati4star/Images-to-PDF](https://github.com/Swati4star/Images-to-PDF)

For this project we had to install Android Studio in order to build the project. Android Studio is thoroughly documented and the project could be built without errors. The program could then be run smoothly on a simulated mobile device. In the end we decided not to continue with this project because the testing would require a lot of extra steps. Since it was a mobile application, work-arounds would be required to test on-click functions to name one example.

### 2.2 [TheAlgorithms/JavaScript](https://github.com/TheAlgorithms/JavaScript)

We decided to continue with this project. The project is a library of functions and data structures, so no building was required. However in order to run the JavaScript code, an interpreter such as Node.js was needed. Furthermore, the entire test suite for the project completed in 24 seconds without error.

## 3 Complexity measurement

_**Run a complexity measurement tool such as lizard on the code base.**_

_**Count the [cyclomatic complexity](https://en.wikipedia.org/wiki/Cyclomatic_complexity) of large functions of the code.**_

### 3.1 What are your results for ten complex functions?

_Cyclomatic complexity (CC) as measured by `lizard`, lines without comments (NLOC) measured by lizard. MCC is the complexity when counted by hand._

The ten most complex functions can be seen in the table bellow. When counting manually we drew up the flow graph for the function and count the nodes and edges to plug into the formula `CCN = E - N + 2`.

| Functions                                                      | NLOC | CC  | MCC |
| -------------------------------------------------------------- | ---- | --- | --- |
| [`caesarCipherEncodeAndDecodeEngine`](../Ciphers/KeyFinder.js) | 71   | 26  |     |
| [`newGeneration`](../Cellular-Automata/ConwaysGameOfLife.js)   | 25   | 20  |     |
| [`hexLookup`](#315-hexlookup)                                  | 24   | 18  | 18  |
| [`integralEvaluation`](#313-integralevaluation)                | 26   | 15  | 15  |
| [`flashSort`](../Sorts/FlashSort.js)                           | 58   | 15  |     |
| [`isScramble`](#312-isScramble)                                | 30   | 13  | 13  |
| [`convexHull`](../Geometry/ConvexHullGraham.js)                | 37   | 13  |     |
| [`remove`](#314-remove)                                        | 23   | 12  | 12  |
| [`_shiftDown`](../Graphs/PrimMST.js)                           | 39   | 12  |     |
| [`maxProductOfThree`](#311-maxproductofthree)                  | 30   | 11  | 11  |

Below follows a more detailed analysis of the complexity recorded by `lizard` the manual count for five of the ten functions.

#### 3.1.1 [`maxProductOfThree`](../Dynamic-Programming/MaxProductOfThree.js)

_Given an array of numbers, return the maximum product of 3 numbers from the array._

- Counting with lizard: AvgCCN = 11
- Counting manually: CCN = 11

This function has an initial if-statement that catches an error(n=1, e=2). We start with a for-loop(n=2, e =4), then we have an single if-statement followed by two if-else statements with one OR each(n=7, e=12). Then we have a final if-statement followed by an if-else-statement with an OR (n=10, e= 19). If we count the cyclomatic complexity using the formula CCN = E - N + 2 we get an CCN of 19 - 10 + 2 = 11.

#### 3.1.2 [`isScramble`](../String/ScrambleStrings.js)

_Given two strings s1 and s2 of the same length, return true if s2 is a scrambled string of s1, otherwise, return false._

- Counting with lizard: AvgCCN = 13
- Counting manually: CCN = 13

This function starts with two inital if-statements followed by a for-loop(n=3,e=6). The for-loop has two if-statements(n=6, e=13). Then follows another for-loop with a single if-statement(n=8,e=19). Lastly we have another for-loop with a (OR) else (OR) statement (n=14, e=25). We use the same formula as in the function above and we get 25 - 14 + 2 = 13.

#### 3.1.3 [`integralEvaluation`](../Maths/SimpsonIntegration.js)

_Calculate definite integrals using composite Simpson's numerical method._

- Counting with lizard: AvgCCN = 15
- Counting manually: CCN = 15

The function has 6 initial if-statements that have a direct path to an end node(n=6, e=12). Then comes a for-loop with 2 if-statements (n=9,e=18). Lastly we have a for-loop with no additional complexity followed by a final if-statement(n=11, e=24). The formula gives us CCN of 24 - 11 + 2 = 15.

#### 3.1.4 [`remove`](../Data-Structures/Tree/Trie.js)

_Removes a key-value pair from the trie._

- Counting with lizard: AvgCCN = 12
- Counting manually: CCN = 12

The function has 5 intial if-statements(n=5,e=10). One of the if-statements lead to an for-loop with a single if-statement(n=7, e=16). Lastly we have an if-statement that leads to two declarations and an if-statement that leads to a single declaration(n=9, e=19). The formula gives us a CCN of 19 - 9 + 2 = 12.

#### 3.1.5 [`hexLookup`](../Conversions/BinaryToHex.js)

_Lookup for converting a binary number to hexadecimal._

- Counting with lizard: AvgCCN = 18
- Counting manually CCN = 18

The function starts with an if statement(n=1, e=2) then a switch case with 16 cases(n=2, e=18). The forumla gives us a CCN of 18 - 2 + 2 = 18.

### 3.2 Are the functions just complex, or also long?

Sometimes they are related but not always, like function _newGeneration_ in _ConwaysGameOfLife.js_ has around 30 lines of code but with CC of 20, mainly because of a bunch of conditional statements within the function.

### 3.3 What is the purpose of the functions?

Those functions all implement some kind of algorithm to solve different kinds of problems and they are classified by different folders.

### 3.4 Are exceptions taken into account in the given measurements?

There is no exception to catch in functions we measured, so we didn't take exceptions into account.

### 3.5 Is the documentation clear about all the possible outcomes?

The documentation describes some of the possible outcomes, but still may miss some scenarios. The document can be improved by further detailed tests.

## 4 Refactoring

### 4.1 Plan for refactoring complex code

There would not be huge differences to make with refactoring the code since a lot of it is broken down to as much as it could be.

However, in _caesarCipherEncodeAndDecodeEngine_ there are three larger cases that can occur depending on the paramaters, these could be broken down into three smaller functions.

You could probably also create a helper function for the last part of the _intefralEvaluation_. The other top 5 functions are fairly optimized and there are not any good ways to refactor without sacraficing in other areas.

### 4.2 Estimated impact of refactoring (lower CC, but other drawbacks?)

It would require more tests since a proper coverage would test each individual function. While lowering complexity it could also introduce new errors possibly. Also if you separate and refactor it too much it can become harder to read since you have to jump around to follow the code.

## 5 Coverage

### 5.1 Tools

In order to test coverage we used [`Jest`](https://jestjs.io/) since it was allready used for running all of the tests.

### 5.2 Your own coverage tool

The tool can be found on the `d/coverage_measurement` branch.

git command to obtain the patch:

The tool runs alongside the Jest tests which means that `npm test` runs the tool.

#### 5.2.1 Usage

To use the tool one has to call the `logDataToTestFile` function which in turn logs the id and a value as a key-value pair to a `.json` file.

```js
// Usage in code
if (i > 0) {
  logDataToTestFile('newGeneration-2', true)
  neighbourCount += cells[i - 1][j]
}
```

At the end of the program the contents of the `.json` file is printed to standard out. A `test.json` file is also produced. Note that the `test.json` contains duplicates since everytime a branch is taken it is also logged.

```sh
# Sample terminal output
{
  'flashSort-1': true,
  'flashSort-2': true,
  'newGeneration-5': true,
  'newGeneration-7': true,
  'newGeneration-8': true,
}
```

### 5.3 Evaluation

#### 5.3.1 How detailed is your coverage measurement?

Our coverage tool is not too detailed, It achompishes showing what was run however it does not track the outputs or what has come before. It simply verifies that the code reached that point.

#### 5.3.2 What are the limitations of your own tool?

The tool is in no way automatic, any changes to the code would require changes to the tool and manually adding each new branch as well as fixing numbers of branches that come after it.

#### 5.3.3 Are the results of your tool consistent with existing coverage tools?

The coverage tool is consistent with `Jest` and covers the same lines.

## 6 Coverage improvement

Show the comments that describe the requirements for the coverage.

Report of old coverage: [link]

Report of new coverage: [link]

Test cases added:

git diff ...

Number of test cases added: two per team member (P) or at least four (P+).

## 7 Self-assessment: Way of working

We are currently in the "foundation established" state according to our evaluation. We have established the tools for work and communications (e.g., Git and Discord) and they are integrated into our workflow in order to perform our work. In order to fully reach the next state, "in use", we would need to regularly inspect our tools and practices. In addition, we would need to put procedures into place to handle feedback.

## 8 Overall experience

In this project we learned how to empirically measure software complexity, and how to refactor code into smaller functions in order to reduce said complexity. Some main takeaways are keeping complexity in mind while writing software, as well as writing tests in a more systematic way in order to achieve better coverage. Furthermore, we learned how about how to productively contribute to open-source projects which is an important skill.
