## 4.2.1

- Added more use cases to `no-return-wrap`

## 4.0.1

- Remove `promise/param-names` fixer
  ([#146](https://github.com/xjamundx/eslint-plugin-promise/pull/146))

## 4.0.0

- Added fixer for `promise/no-new-statics` rule
  ([#133](https://github.com/xjamundx/eslint-plugin-promise/pull/133))
- Support ESLint v5
  ([#144](https://github.com/xjamundx/eslint-plugin-promise/pull/144))

This is a breaking change that drops support for Node v4. In order to use ESLint
v5 and eslint-plugin-promise v4, you must use Node >=6.

## 3.8.0

- Removed `promise/avoid-new` from recommended configuration
  ([#119](https://github.com/xjamundx/eslint-plugin-promise/pull/119))
- Ignored event listener callbacks in `promise/prefer-await-to-callbacks`
  ([#117](https://github.com/xjamundx/eslint-plugin-promise/pull/117))
- Ignored top-level awaits in `promise/prefer-await-to-then`
  ([#126](https://github.com/xjamundx/eslint-plugin-promise/pull/126))
- Added docs for `promise/no-nesting` and `promise/prefer-await-to-then`
  ([#120](https://github.com/xjamundx/eslint-plugin-promise/pull/120))
  ([#121](https://github.com/xjamundx/eslint-plugin-promise/pull/121))

## 3.7.0

- Added `promise/valid-params` rule
  ([#85](https://github.com/xjamundx/eslint-plugin-promise/pull/85))
- Added `promise/no-new-statics` rule
  ([#82](https://github.com/xjamundx/eslint-plugin-promise/pull/82))
- Added fixer for `promise/param-names` rule
  ([#99](https://github.com/xjamundx/eslint-plugin-promise/pull/99))
- Added rule documentation to each rule
  ([#91](https://github.com/xjamundx/eslint-plugin-promise/pull/91))

## 3.6.0

- Added `['catch']` support in `catch-or-return`
- Added `no-return-in-finally` rule
- Fixed some formatting in the docs
- Added `allowReject` option to `no-return-wrap`
- Added exceptions for `no-callback-in-promise`

## 3.5.0

- Added support for recommended settings using
  `extends: plugin:promise/recommended`

## 3.4.2

- Fixed always return false positive with ternary (#31)

## 3.4.1

- fixed #49

## 3.4.0

- new rule: avoid-new
- new rule: no-promise-in-callback
- new rule: no-callback-in-promise
- new rule: no-nesting

## 3.3.2

- Removed eslint from peerDeps

## 3.3.1

- Updated engines with proper stuff
- Fixed bug for unreachable code

## 3.3.0

- Rule: `prefer-async-to-callbacks` added
- Rule: `prefer-async-to-then` added

## 3.2.1

- Fix: `no-return-wrap` rule missing from index.js

## 3.2.0

- Added `no-return-wrap` rule

## 3.1.0

- Added multiple terminationMethods

## 3.0.1

- Removed deprecated `always-catch` rule
- FIX: always-return error with "fn && fn()"

## 3.0.0

- Updated column and line numbers
- Added flow analysis for better handling of if statements

## 2.0.1

- Fixed type in docs

## 2.0.0

- ESLint 3.0 Support

## 1.3.2

- Updated tests to run on eslint 2.0
- Fixed some issues with `no-native` rule

## 1.3.1

- Actually added `no-native` rule

## 1.3.0

- Added `no-native` rule

## 1.2.0

- Allow `throw` in `always-return` rule
- Added `terminationMethod` option to `catch-or-return` rule

## 1.1.0

- Added `catch-or-return` rule

## 1.0.8

- Fixed crash issues

## 1.0.0 - 1.0.7

- Lots of basic feature updates and doc changes
