# Report for assignment 3

This is a template for your report. You are free to modify it as needed.
It is not required to use markdown for your report either, but the report
has to be delivered in a standard, cross-platform format.

## Project

Name: TheAlgorithms/JavaScript

URL: https://github.com/DD2480-Group-23-2/JavaScript

The project is a library of algorithms and data structures implemented in JavaScript.

## Onboarding experience

### Images-to-PDF
For this project we had to install Android Studio in order to build the project. Android Studio is thoroughly documented and the project could be built without errors. The program could then be run smoothly on a simulated mobile device. In the end we decided not to continue with this project because the testing would require a lot of extra steps. Since it was a mobile application, work-arounds would be required to test on-click functions to name one example.

### TheAlgorithms/JavaScript
We decided to continue with this project. The project is a library of functions and data structures, so no building was required. However in order to run the JavaScript code, an interpreter such as Node.js was needed. Furthermore, the entire test suite for the project completed in 24 seconds without error.

## Complexity

#### 1. What are your results for ten complex functions?

When counting manually we draw up the flow graph for the function and count the nodes and edges to plug into the formula CCN= E - N + 2.
Below follows a comparison between the complexity recorded by the lizard tool and a manual count for five of the ten most complex functions:

### Dynamic-Programming/MaxProductOfThree
	-Counting with lizard: AvgCCN = 11
	-Counting manually: CCN = 11
	
This function has an initial if-statement that catches an error(n=1, e=2). We start with a for-loop(n=2, e =4), then we have an single if-statement followed by two if-else statements with one OR each(n=7, e=12). Then we have a final if-statement followed by an if-else-statement with an OR (n=10, e= 19). If we count the cyclomatic complexity using the formula CCN = E - N + 2 we get an CCN of 19 - 10 + 2 = 11.

### Strings/ScrambleStrings
	-Counting with lizard: AvgCCN = 13
	-Counting manually: CCN = 13
	
This function starts with two inital if-statements followed by a for-loop(n=3,e=6). The for-loop has two if-statements(n=6, e=13). Then follows another for-loop with a single if-statement(n=8,e=19). Lastly we have another for-loop with a (OR) else (OR) statement (n=14, e=25). We use the same formula as in the function above and we get 25 - 14 + 2 = 13.

### Maths/SimpsonIntegration
	-Counting with lizard: AvgCCN = 15
	-Counting manually: CCN = 15
	
The function has 6 initial if-statements that have a direct path to an end node(n=6, e=12). Then comes a for-loop with 2 if-statements (n=9,e=18). Lastly we have a for-loop with no additional complexity followed by a final if-statement(n=11, e=24). The formula gives us CCN of  24 - 11 + 2 = 15.

### Data-Structures/Tree/Trie
	-Counting with lizard: AvgCCN = 12
	-Counting manually: CCN = 12
	
The function has 5 intial if-statements(n=5,e=10). One of the if-statements lead to an for-loop with a single if-statement(n=7, e=16). Lastly we have an if-statement that leads to two declarations and an if-statement that leads to a single declaration(n=9, e=19). The formula gives us a CCN of 19 - 9 + 2 = 12.


### Conversions/BinaryToHex
	-Counting with lizard: AvgCCN = 18
	-Counting manually CCN = 18
The function starts with an if statement(n=1, e=2) then a switch case with 16 cases(n=2, e=18). The forumla gives us a CCN of 18 - 2 + 2 = 18.

#### 2. Are the functions just complex, or also long?

   Sometimes they are related but not always, like function *newGeneration* in *ConwaysGameOfLife.js* has around 30 lines of code but with CC of 20, mainly because of a bunch of conditional statements within the function.
#### 2. What is the purpose of the functions?

   Those functions all implement some kind of algorithm to solve different kinds of problems and they are classified by different folders.

#### 3. Are exceptions taken into account in the given measurements?

   There is no exception to catch in functions we measured, so we didn't take exceptions into account.

#### 4. Is the documentation clear w.r.t. all the possible outcomes?

   The documentation describes some of the possible outcomes, but still may miss some scenarios. The document can be improved by further detailed tests.

## Refactoring
**Plan for refactoring complex code:**
there would not be huge differences to make with refactoring the code since a lot of it is broken down to as much as it could be.
However, in *caesarCipherEncodeAndDecodeEngine* there are three larger cases that can occur depending on the paramaters, these could be broken down into three smaller functions.
You could probably also create a helper function for the last part of the *intefralEvaluation*.
The other top 5 functions are fairly optimized and there are not any good ways to refactor without sacraficing in other areas.

**Estimated impact of refactoring (lower CC, but other drawbacks?)**
it would require more tests since a proper coverage would test each individual function. While lowering complexity it could also introduce new errors possibly. Also if you separate and refactor it too much it can become harder to read since you have to jump around to follow the code.

## Coverage

### Tools

We used Lizard as a coverage tool to measure complexity.
it was fairly simple and straitforward to use. Documentation was easily available and was clear in the steps that were needed in order to get the wanted view.
barely any integration was needed as everything ran rightaway from the command line.

if anything googling information about it was a little inconvinient since the name brings up a lot of other results as well.

### Your own coverage tool

link to branch: here
git command to obtain the patch:

We trach all the branches in the five most complex functions through a map that sees which branches were reached and then puts that information into the terminal.
The way we track each branch is through the unique number we assigned them which is listen in [this document](Assignment3.md)

Tool is quite accurate and will portray the branches taken well and will have a readable output file. 

it supports all constucts used in the JS code. 

### Evaluation

1. **How detailed is your coverage measurement?**
   it is not too detailed, It achompishes showing what was run however it does not track the outputs or what has come before. It simply verifies that the code reached that point.

2. **What are the limitations of your own tool?**
   The tool is in no way automatic, any changes to the code would require changes to the tool and manually adding each new branch as well as fixing numbers of branches that come after it.

3. **Are the results of your tool consistent with existing coverage tools?**
   the coverage tool seems fairly consistent however it does not check all the same things that Lizard checked

## Coverage improvement

Show the comments that describe the requirements for the coverage.

Report of old coverage: [link]

Report of new coverage: [link]

Test cases added:

git diff ...

Number of test cases added: two per team member (P) or at least four (P+).

## Self-assessment: Way of working
We are currently in the "foundation established" state according to our evaluation. We have established the tools for work and communications (e.g., Git and Discord) and they are integrated into our workflow in order to perform our work. In order to fully reach the next state, "in use", we would need to regularly inspect our tools and practices. In addition, we would need to put procedures into place to handle feedback.

## Overall experience
In this project we learned how to empirically measure software complexity, and how to refactor code into smaller functions in order to reduce said complexity. Some main takeaways are keeping complexity in mind while writing software, as well as writing tests in a more systematic way in order to achieve better coverage. Furthermore, we learned how about how to productively contribute to open-source projects which is an important skill.
