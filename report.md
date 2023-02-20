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

1. What are your results for ten complex functions?
   * Did all methods (tools vs. manual count) get the same result?
   * Are the results clear?
2. Are the functions just complex, or also long?
3. What is the purpose of the functions?
4. Are exceptions taken into account in the given measurements?
5. Is the documentation clear w.r.t. all the possible outcomes?

## Refactoring

Plan for refactoring complex code:

Estimated impact of refactoring (lower CC, but other drawbacks?).

Carried out refactoring (optional, P+):

git diff ...

## Coverage

### Tools

Document your experience in using a "new"/different coverage tool.

How well was the tool documented? Was it possible/easy/difficult to
integrate it with your build environment?

### Your own coverage tool

Show a patch (or link to a branch) that shows the instrumented code to
gather coverage measurements.

The patch is probably too long to be copied here, so please add
the git command that is used to obtain the patch instead:

git diff ...

What kinds of constructs does your tool support, and how accurate is
its output?

### Evaluation

1. How detailed is your coverage measurement?

2. What are the limitations of your own tool?

3. Are the results of your tool consistent with existing coverage tools?

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