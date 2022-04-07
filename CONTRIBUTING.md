# Contributing guidelines

## Before contributing

Welcome to [TheAlgorithms/Javascript](https://github.com/TheAlgorithms/Javascript)! Before sending your pull requests,
make sure that you **read the whole guidelines**. If you have any doubt on the contributing guide, please feel free to
[state it clearly in an issue](https://github.com/TheAlgorithms/Javascript/issues/new).

## Contributing

### Contributor

We are very happy that you consider implementing algorithms and data structures for others! This repository is
referenced and used by learners from around the globe. Being one of our contributors, you agree and confirm that:

- You did your work - plagiarism is not allowed.
  - Any plagiarized work will not be merged.
- Your work will be distributed under [GNU License](LICENSE) once your pull request is merged.
- Your submitted work must fulfill our styles and standards.

**New implementation** is welcome! For example, new solutions to a problem, different representations of a graph data
structure or algorithm designs with different complexity.

**Improving comments** and **writing proper tests** are also highly welcome.

### Contribution

We appreciate any contribution, from fixing grammar mistakes to implementing complex algorithms. Please read this
section if you are contributing to your work.

If you submit a pull request that resolves an open issue, please help us to keep our issue list small by adding
`fixes: #{$ISSUE_NO}` to your commit message. GitHub will use this tag to auto-close the issue if your PR is merged.

#### What is an Algorithm?

An Algorithm is one or more functions (or classes) that:

- take one or more inputs.
- perform some internal calculations or data manipulations.
- return one or more outputs.
- have minimal side effects.

Algorithms should be packaged in a way that would make it easy for readers to put them into larger programs.

Algorithms should:

- have intuitive class and function names that make their purpose clear to readers.
- use JavaScript naming conventions and intuitive variable names to ease comprehension.
- be flexible to take different input values.
- raise JavaScript exceptions (RangeError, etc.) on erroneous input values.

Algorithms in this repo should not be how-to examples for existing JavaScript packages. Instead, they should perform
internal calculations or manipulations to convert input values into different output values. Those calculations or
manipulations can use data types, classes, or functions of existing JavaScript packages but each algorithm in this repo
should add unique value.

#### File Naming Convention

- filenames should use the UpperCamelCase (PascalCase) style.
- There should be no spaces in filenames.
- **Example:** `UserProfile.js` is allowed but `userprofile.js`,`Userprofile.js`,`user-Profile.js`,`userProfile.js` are
  not.

#### Module System

We use the [ES Module](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/) system, which bring an official, standardized module system to JavaScript.

It roughly means you will need to use `export` and `import` statements instead of `module.exports` and `require()`.

#### Testing

Be confident that your code works. When was the last time you committed a code change, your build failed, and half of
your app stopped working? Mine was last week. Writing tests for our Algorithms will help us ensure the implementations
are air tight even after multiple fixes and code changes.

We use [Jest](https://jestjs.io/) to run unit tests on our algorithms. It provides a very readable and expressive way to
structure your test code.

It is advised that the algorithm file (module) does not contain any "live" code but rather just exports the function(s)
needed to execute the algorithm. Your test code can import those function(s), call them with the appropriate parameters
and inspect the outcome. Example: [RatInAMaze.test.js](Backtracking/tests/RatInAMaze.test.js).

Please refrain from using `console` in your implementation AND test code.

You can (and should!) run all tests locally before committing your changes:

```shell
npm test
```

If you want save some time and just run a specific test:

```shell
# this will run any test file where the filename matches "koch"
npm test -- koch
```

You can also start Jest in "watch" mode:

```shell
npm test -- --watchAll
```

This will run all tests and watch source and test files for changes. When a change is made, the tests will run again.

#### Coding Style

To maximize the readability and correctness of our code, we require that new submissions follow the
[JavaScript Standard Style](https://standardjs.com/).

Before committing, please run

```shell
npm run style
```

In order to apply the coding style (where it can be done automatically). If an error is shown, please figure out what's
wrong, fix it and run standard again.

A few (but not all) of the things to keep in mind:

- Use camelCase with the leading character as lowercase for identifier names (variables and functions).
- Names start with a letter.
- Follow code indentation: Always use 2 spaces for indentation of code blocks.

```js
function sumOfArray(arrayOfNumbers) {
  let sum = 0

  for (let i = 0; i < arrayOfNumbers.length; i++) {
    sum += arrayOfNumbers[i]
  }

  return sum
}
```

- Avoid using global variables and avoid `==`.
- Please use `let` over `var`.
- Please refrain from using `console.log` or any other console methods.
- **Absolutely** don't use `alert`.
- We strongly recommend the use of ECMAScript 6.
- Avoid importing external libraries for basic algorithms. Only use those libraries for complicated algorithms.
- Most importantly:
  - **Be consistent in the use of these guidelines when submitting.**
  - Happy coding!

Writer [@itsvinayak](https://github.com/itsvinayak), May 2020.
