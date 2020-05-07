# eslint-plugin-promise

Enforce best practices for JavaScript promises.

[![travis-ci](https://travis-ci.org/xjamundx/eslint-plugin-promise.svg)](https://travis-ci.org/xjamundx/eslint-plugin-promise)
[![npm version](https://badge.fury.io/js/eslint-plugin-promise.svg)](https://www.npmjs.com/package/eslint-plugin-promise)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Installation](#installation)
- [Usage](#usage)
- [Rules](#rules)
- [Maintainers](#maintainers)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm install eslint --save-dev
```

Next, install `eslint-plugin-promise`:

```
$ npm install eslint-plugin-promise --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must
also install `eslint-plugin-promise` globally.

## Usage

Add `promise` to the plugins section of your `.eslintrc.json` configuration
file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["promise"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "promise/always-return": "error",
    "promise/no-return-wrap": "error",
    "promise/param-names": "error",
    "promise/catch-or-return": "error",
    "promise/no-native": "off",
    "promise/no-nesting": "warn",
    "promise/no-promise-in-callback": "warn",
    "promise/no-callback-in-promise": "warn",
    "promise/avoid-new": "warn",
    "promise/no-new-statics": "error",
    "promise/no-return-in-finally": "warn",
    "promise/valid-params": "warn"
  }
}
```

or start with the recommended rule set:

```json
{
  "extends": ["plugin:promise/recommended"]
}
```

## Rules

| rule                                                     | description                                                                      | recommended | fixable  |
| -------------------------------------------------------- | -------------------------------------------------------------------------------- | ----------- | -------- |
| [`catch-or-return`][catch-or-return]                     | Enforces the use of `catch()` on un-returned promises.                           | :bangbang:  |          |
| [`no-return-wrap`][no-return-wrap]                       | Avoid wrapping values in `Promise.resolve` or `Promise.reject` when not needed.  | :bangbang:  |          |
| [`param-names`][param-names]                             | Enforce consistent param names and ordering when creating new promises.          | :bangbang:  |          |
| [`always-return`][always-return]                         | Return inside each `then()` to create readable and reusable Promise chains.      | :bangbang:  |          |
| [`no-native`][no-native]                                 | In an ES5 environment, make sure to create a `Promise` constructor before using. |             |          |
| [`no-nesting`][no-nesting]                               | Avoid nested `then()` or `catch()` statements                                    | :warning:   |          |
| [`no-promise-in-callback`][no-promise-in-callback]       | Avoid using promises inside of callbacks                                         | :warning:   |          |
| [`no-callback-in-promise`][no-callback-in-promise]       | Avoid calling `cb()` inside of a `then()` (use [nodeify][] instead)              | :warning:   |          |
| [`avoid-new`][avoid-new]                                 | Avoid creating `new` promises outside of utility libs (use [pify][] instead)     |             |          |
| [`no-new-statics`][no-new-statics]                       | Avoid calling `new` on a Promise static method                                   | :bangbang:  | :wrench: |
| [`no-return-in-finally`][no-return-in-finally]           | Disallow return statements in `finally()`                                        | :warning:   |          |
| [`valid-params`][valid-params]                           | Ensures the proper number of arguments are passed to Promise functions           | :warning:   |          |
| [`prefer-await-to-then`][prefer-await-to-then]           | Prefer `await` to `then()` for reading Promise values                            | :seven:     |          |
| [`prefer-await-to-callbacks`][prefer-await-to-callbacks] | Prefer async/await to the callback pattern                                       | :seven:     |          |

**Key**

| icon       | description                                     |
| ---------- | ----------------------------------------------- |
| :bangbang: | Reports as error in recommended configuration   |
| :warning:  | Reports as warning in recommended configuration |
| :seven:    | ES2017 Async Await rules                        |
| :wrench:   | Rule is fixable with `eslint --fix`             |

## Maintainers

- Jamund Ferguson - [@xjamundx][]
- Macklin Underdown - [@macklinu][]

## License

- (c) MMXV jden <mailto:jason@denizac.org> - ISC license.
- (c) 2016 Jamund Ferguson <mailto:jamund@gmail.com> - ISC license.

[catch-or-return]: docs/rules/catch-or-return.md
[no-return-wrap]: docs/rules/no-return-wrap.md
[param-names]: docs/rules/param-names.md
[always-return]: docs/rules/always-return.md
[no-native]: docs/rules/no-native.md
[no-nesting]: docs/rules/no-nesting.md
[no-promise-in-callback]: docs/rules/no-promise-in-callback.md
[no-callback-in-promise]: docs/rules/no-callback-in-promise.md
[avoid-new]: docs/rules/avoid-new.md
[no-new-statics]: docs/rules/no-new-statics.md
[no-return-in-finally]: docs/rules/no-return-in-finally.md
[valid-params]: docs/rules/valid-params.md
[prefer-await-to-then]: docs/rules/prefer-await-to-then.md
[prefer-await-to-callbacks]: docs/rules/prefer-await-to-callbacks.md
[nodeify]: https://www.npmjs.com/package/nodeify
[pify]: https://www.npmjs.com/package/pify
[@macklinu]: https://github.com/macklinu
[@xjamundx]: https://github.com/xjamundx
