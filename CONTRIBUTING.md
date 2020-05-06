# Contributing guidelines

## Before contributing

Welcome to [TheAlgorithms/Javascript](https://github.com/TheAlgorithms/Javascript)! Before sending your pull requests, make sure that you **read the whole guidelines**. If you have any doubt on the contributing guide, please feel free to [state it clearly in an issue](https://github.com/TheAlgorithms/Javascript/issues/new)

## Contributing

### Contributor

We are very happy that you consider implementing algorithms and data structures for others! This repository is referenced and used by learners from around the globe. Being one of our contributors, you agree and confirm that:

- You did your work - plagiarism is not allowed.
  - Any plagiarized work will not be merged.
- Your work will be distributed under [GNU License](LICENSE) once your pull request is merged
- Your submitted work must fulfill our styles and standards

**New implementation** is welcome! For example, new solutions to a problem, different representations of a graph data structure or algorithm designs with different complexity.

**Improving comments** and **writing proper tests** are also highly welcome.

### Contribution

We appreciate any contribution, from fixing grammar mistakes to implementing complex algorithms. Please read this section if you are contributing to your work.


If you submit a pull request that resolves an open issue, please help us to keep our issue list small by adding `fixes: #{$ISSUE_NO}` to your commit message. GitHub will use this tag to auto-close the issue if your PR is merged.

#### What is an Algorithm?

An Algorithm is one or more functions (or classes) that:
* take one or more inputs,
* perform some internal calculations or data manipulations,
* return one or more outputs,
* have minimal side effects.

Algorithms should be packaged in a way that would make it easy for readers to put them into larger programs.

Algorithms should:
* have intuitive class and function names that make their purpose clear to readers
* use JavaScript naming conventions and intuitive variable names to ease comprehension
* be flexible to take different input values
* raise JavaScript exceptions (RangeError, etc.) on erroneous input values

Algorithms in this repo should not be how-to examples for existing JavaScript packages.  Instead, they should perform internal calculations or manipulations to convert input values into different output values.  Those calculations or manipulations can use data types, classes, or functions of existing JavaScript packages but each algorithm in this repo should add unique value.

#### File Naming Convention
  - filenames should use the UpperCamelCase (PascalCase) style.
  - There should be no spaces in filenames.  
 **Example:**`UserProfile.js` is allowed but `userprofile.js`,`Userprofile.js`,`user-Profile.js`,`userProfile.js` are not

#### Coding Style

To maximize the readability and correctness of our code, we require that new submissions follow [JavaScript Standard Style](https://standardjs.com/)
  - Command to  install JavaScript Standard Style
    ```
    $ npm install standard --save-dev
    ```
  - Usage
    ```
    $ standard MyFile.js  // if that fails, try: npx standard MyFile.js
    ```

- Use camelCase for with leading character lowercase for identifier names (variables and functions)
- Names start with a letter
- follow code indentation
  - Always use 2 spaces for indentation of code blocks
    ```
    function sumOfArray (arrayOfNumbers) {
        let sum = 0
        for (let i = 0; i < arrayOfNumbers.length; i++) {
          sum += arrayOfNumbers[i]
        }
        return (sum)
      }

    ```
- Avoid using global variables and avoid '=='
- Please use 'let' over 'var'
- Please use 'console.log()'  
- We strongly recommend the use of ECMAScript 6
- Avoid importing external libraries for basic algorithms. Only use those libraries for complicated algorithms.



- Most importantly,
  - **Be consistent in the use of these guidelines when submitting.**
  - Happy coding!

Writer [@itsvinayak](https://github.com/itsvinayak), May 2020.
