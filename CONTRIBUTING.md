# Contributing guidelines

## Before contributing

Welcome to [TheAlgorithms/Javascript](https://github.com/TheAlgorithms/Javascript)! Before sending your pull requests, make sure that you **read the whole guidelines**. If you have any doubt on the contributing guide, please feel free to [state it clearly in an issue](https://github.com/TheAlgorithms/Javascript/issues/new)

## Contributing

### Contributor

We are very happy that you consider implementing algorithms and data structure for others! This repository is referenced and used by learners from around the globe. Being one of our contributors, you agree and confirm that:

- You did your work - plagiarism is not allowed.
  - Any plagiarized work will not be merged.
- Your work will be distributed under [GNU License](License) once your pull request is merged
- You submitted work fulfils or mostly fulfils our styles and standards

**New implementation** is welcome! For example, new solutions to a problem, different representations of a graph data structure or algorithm designs with different complexity.

**Improving comments** and **writing proper tests** are also highly welcome.

### Contribution

We appreciate any contribution, from fixing grammar mistakes to implementing complex algorithms. Please read this section if you are contributing your work.


If you submit a pull request that resolves an open issue, please help us to keep our issue list small by adding `fixes: #{$ISSUE_NO}` to your commit message. GitHub will use this tag to auto close the issue if your PR is merged.

#### What is an Algorithm?

An Algorithm is one or more functions (or classes) that:
* take one or more inputs,
* perform some internal calculations or data manipulations,
* return one or more outputs,
* have minimal side effects.

Algorithms should be packaged in a way that would make it easy for readers to put them into larger programs.

Algorithms should:
* have intuitive class and function names that make their purpose clear to readers
* use Javascript naming conventions and intuitive variable names to ease comprehension
* be flexible to take different input values
* have Javascript type hints for their input parameters and return values
* raise Javascript exceptions (ValueError, etc.) on erroneous input values

Algorithms in this repo should not be how-to examples for existing Javascript packages.  Instead, they should perform internal calculations or manipulations to convert input values into different output values.  Those calculations or manipulations can use data types, classes, or functions of existing Javascript packages but each algorithm in this repo should add unique value.

#### Coding Style

We want your work to be readable by others; therefore, we encourage you to note the following:
- Must follow [JavaScript Standard Style](https://standardjs.com/)
  - Command to  install JavaScript Standard Style
    ```
	  $ npm install standard --save-dev
	```
  - Usage
    ```
	$ standard
	```

- Use camelCase for identifier names (variables and functions)
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
- use 'let' over 'var'
- Better to use ECMAScript 6
- Avoid importing external libraries for basic algorithms. Only use those libraries for complicated algorithms.



- Most importantly,
  - **Be consistent in the use of these guidelines when submitting.**
  - Happy coding!

Writer [@itsvinayak](https://github.com/itsvinayak), May 2020.
