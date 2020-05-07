# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased][unreleased]

## [14.3.3] - 2020-03-15

- Skip running on versions of Node.js older than 8.10.0. [#1496](https://github.com/standard/standard/pull/1496)

## [14.3.2] - 2020-03-14

- Update `eslint` to `~6.8.0`

## [14.3.1] - 2019-09-17

- Skip running on versions of Node.js older than 8.6.0. [#1418](https://github.com/standard/standard/pull/1418)

## [14.3.0] - 2019-09-14

- Update `eslint` to `~6.4.0`

## [14.2.0] - 2019-09-11

- Update `eslint` to `~6.3.0`
- Update `eslint-plugin-node` to `~10.0.0`

## [14.1.0] - 2019-08-28

- Support ES 2020, the latest version of the ECMAScript specification, which includes support for Dynamic Imports and `BigInt`. [#1378](https://github.com/standard/standard/issues/1378)
- Security: Upgrade `eslint` to `6.2.2` to fix security issue ([blog post](https://eslint.org/blog/2019/08/eslint-v6.2.1-released)) ([security advisory](https://github.com/mysticatea/eslint-utils/security/advisories/GHSA-3gx7-xhv7-5mx3))
- Remove [`funding`](https://github.com/feross/funding). See [Recap of the `funding` experiment](https://feross.org/funding-experiment-recap) for thoughts and learnings.

NOTE: If you use `standard` with the `--parser babel-eslint` option, please ensure that you update `babel-eslint` to `10.0.3` or later for compatibility with this version of `standard`.

## [14.0.2] - 2019-08-22

- Relax rule: Don't check indentation on template literal children (work around for ESLint bug) ([indent](https://eslint.org/docs/rules/indent)) [#1385](https://github.com/standard/standard/issues/1385)

## [14.0.1] - 2019-08-22

- Relax rule (temporarily, to workaround a bug): Disallow missing parentheses around multiline JSX ([react/jsx-wrap-multilines](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md)) [#1382](https://github.com/standard/standard/issues/1382)

## [14.0.0] - 2019-08-19

We're super excited to announce `standard` 14!

As with every new major release, there are lots of new rules in 14.0.0 designed
to help catch bugs and make programmer intent more explicit. This release brings
support for ES 2019, the latest version of the ECMAScript specification, as well
as many quality-of-life improvements for users who use tagged template strings,
JSX, and `.mjs` files for ES modules.

When you upgrade, consider running `standard --fix` to automatically format your
code to match the newly added rules.

`standard` keeps growing! The latest stats show that `standard` and
`eslint-standard-*` shareable configs are depended upon by **318,512 GitHub
repositories** and **33,349 public npm packages**. Thanks for spreading the
word!

We now have a [Discord server](https://discord.gg/ZegqCBr). Come chat with the
maintainers, ask questions, and get help from the community!

❤️ If you enjoy StandardJS and want to support future releases, check out
Feross's [GitHub Sponsors page](https://github.com/users/feross/sponsorship).
GitHub is matching donations, so your dollars go twice as far! 🚀

### New features

- Support ES 2019, the latest version of the ECMAScript specification. [eslint-config-standard/e04e06](https://github.com/standard/eslint-config-standard/commit/e04e0615fdea44567bfb2fd1f868e3ab6751bda3)
- Lint `*.mjs` and `*.cjs` files automatically by default [#1009](https://github.com/standard/standard/issues/1009)
- Ignore patterns from `.git/info/exclude` in addition to `.gitignore`. [#1277](https://github.com/standard/standard/issues/1277)
- Added [`funding`](https://github.com/feross/funding), an open source funding experiment.

### Changed features

- Remove `bundle.js` from the default list of ignored files [#743](https://github.com/standard/standard/issues/743)

### New rules

_(Estimated % of affected standard users, based on test suite in parens)_

- Require Dot Notation Whenever Possible ([dot-notation](https://eslint.org/docs/rules/dot-notation)) [#1344](https://github.com/standard/standard/issues/1344) [6%]
- Require consistent line breaks inside braces ([object-curly-newline](https://eslint.org/docs/rules/object-curly-newline)) [#782](https://github.com/standard/standard/issues/782) [1%]
- Disallow template literals when placeholders or tagged template features are not used. ([quotes](https://eslint.org/docs/rules/quotes)) [#838](https://github.com/standard/standard/issues/838) [eslint-config-standard/#151](https://github.com/standard/eslint-config-standard/pull/151) [1%]
- Disallow lexical declarations in case/default clauses ([no-case-declarations](https://eslint.org/docs/rules/no-case-declarations)) [#1211](https://github.com/standard/standard/issues/1211) [eslint-config-standard/#137](https://github.com/standard/eslint-config-standard/pull/137) [1%]
- Require the first JSX property to be placed on a new line if the JSX tag takes up multiple lines and there are multiple properties ([react/jsx-first-prop-new-line](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md)) [#696](https://github.com/standard/standard/issues/696) [1%]
- Require linebreaks in curly braces in JSX attributes and expressions to be consistent ([react/jsx-curly-newline](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-newline.md)) [#1372](https://github.com/standard/standard/issues/1372) [1%]
- Require JSX attributes and logical expressions to be indented correctly ([react/jsx-indent](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md)) [#1370](https://github.com/standard/standard/issues/1370) [1%]
- Require JSX event handler names to follow conventions ([react/jsx-handler-names](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md)) [#1371](https://github.com/standard/standard/issues/1371) [1%]
- Disallow spaces inside of curly braces in JSX expressions in children ([react/jsx-curly-spacing](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md)) [#1373](https://github.com/standard/standard/issues/1373) [1%]
- Require JSX closing bracket to be aligned with the opening tag ([react/jsx-closing-bracket-location](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md)) [#1361](https://github.com/standard/standard/issues/1361) [1%]
- Disallow unnecessary curly braces in JSX props and children ([react/jsx-curly-brace-presence](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md)) [#1366](https://github.com/standard/standard/issues/1366) [1%]
- Disallow missing `key` prop in JSX elements that likely require a `key` prop ([react/jsx-key](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md)) [#1369](https://github.com/standard/standard/issues/1369) [1%]
- Disallow import of modules using absolute paths ([import/no-absolute-path](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md)) [#861](https://github.com/standard/standard/issues/861) [#1343](https://github.com/standard/standard/issues/1343) [0%]
- Require no spaces before JSX closing brackets ([react/jsx-tag-spacing](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md)) [#1348](https://github.com/standard/standard/issues/1348) [eslint-config-standard-jsx/38](https://github.com/standard/eslint-config-standard-jsx/pull/38) [0%]
- Disallow multiple spaces between inline JSX props ([react/jsx-props-no-multi-spaces](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-multi-spaces.md)) [#1363](https://github.com/standard/standard/issues/1363) [0%]
- Disallow accidental comments in JSX from being inserted as text nodes ([react/jsx-no-comment-textnodes](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md)) [#1368](https://github.com/standard/standard/issues/1368) [0%]
- Prevent usage of unsafe `target='_blank'` in JSX links ([react/jsx-no-target-blank](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md)) [#1367](https://github.com/standard/standard/issues/1367) [0%]
- Require shorthand form for JSX fragments ([react/jsx-fragments](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md)) [#1364](https://github.com/standard/standard/issues/1364) [0%]
- Require PascalCase for user-defined JSX components ([react/jsx-pascal-case](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md)) [#1365](https://github.com/standard/standard/issues/1365) [0%]
- Require JSX closing tag to be aligned with the opening tag ([react/jsx-closing-tag-location](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md)) [#1358](https://github.com/standard/standard/issues/1358) [0%]
- Disallow missing parentheses around multiline JSX ([react/jsx-wrap-multilines](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md)) [#710](https://github.com/standard/standard/issues/710) [0%]
- Require pipeline operators to appear at the start of a line ([operator-linebreak](https://eslint.org/docs/rules/operator-linebreak)) [eslint-config-standard/#121](https://github.com/standard/eslint-config-standard/pull/121) [0%]
- Disallow use of the void operator ([no-void](https://eslint.org/docs/rules/no-void)) [eslint-config-standard/#135](https://github.com/standard/eslint-config-standard/pull/135) [0%]

### Changed rules

- Relax rule: Don't require newlines between _single-line_ member functions or class field declarations ([lines-between-class-members](https://eslint.org/docs/rules/lines-between-class-members)) [#1347](https://github.com/standard/standard/issues/1347)
- Relax rule: Don't check indentation on template literal children (work around for ESLint bug) ([indent](https://eslint.org/docs/rules/indent)) [#1176](https://github.com/standard/standard/issues/1176)
- Relax rule: Disallow labels that are variables names (because all labels are already disallowed) ([no-label-var](https://eslint.org/docs/rules/no-label-var)) [eslint-config-standard/#132](https://github.com/standard/eslint-config-standard/pull/132)

## [13.1.0] - 2019-07-20

- Update `eslint` from `~6.0.1` to `~6.1.0`

## [13.0.2] - 2019-07-12

- Fix global installations of `standard` not finding dependencies due to ESLint v6 plugin resolution change [#1327](https://github.com/standard/standard/issues/1327) [#1328](https://github.com/standard/standard/issues/1328) [#1329](https://github.com/standard/standard/issues/1329)

## [13.0.1] - 2019-07-11

### Changed rules

- Relax rule: Only enforce `const` in destructuring when all variables are constant [#1325](https://github.com/standard/standard/issues/1325)

## [13.0.0] - 2019-07-10

Welcome to the latest version of `standard`!

As with every new major release, there are lots of new rules in 13.0.0 designed
to help catch bugs and make programmer intent more explicit.

`standard` is more popular than ever – **640,000 downloads per month!** It's
even more popular – **3,000,000 downloads per month** – if you include the
[ESLint configuration](https://www.npmjs.com/package/eslint-config-standard)
that we also publish (for advanced users).

When you upgrade, consider running `standard --fix` to automatically format your code to match the newly added rules.

❤️ If you enjoy StandardJS and want to support future releases, check out Feross's [GitHub Sponsors page](https://github.com/users/feross/sponsorship). GitHub is matching donations, so your dollars go twice as far! 🚀

### New features

- Update `eslint` from `~5.16.0` to `~6.0.1`

  - BREAKING: Node.js 6 is no longer supported
    - Node.js 6 is EOL and will no longer be receiving security updates. As a result, the eslint team has decided to drop support for it.
    - To prevent breaking CI for projects which still support Node 6, `standard` silently passes when run by an unsupported version of Node.

  - **For `eslint-config-standard` users only:** Plugins are no longer affected by `eslint`'s location
    - Previously, ESLint loaded plugins relative to the location of the ESLint package itself. As a result, we suggested that users with global ESLint installations should also install plugins globally, and users with local ESLint installations should install plugins locally.
    - With ESLint v6, plugins should always be installed locally, even if ESLint was installed globally. More precisely, ESLint v6 resolves plugins relative to the end user’s project by default, and always resolves shareable configs and parsers relative to the location of the config file that imports them.
    - See [migrating to ESLint 6.0.0 for more information](https://eslint.org/docs/user-guide/migrating-to-6.0.0#-plugins-and-shareable-configs-are-no-longer-affected-by-eslints-location).

- The documentation is now available in Japanese 🇯🇵!
  - Thanks to [@Munieru](https://github.com/munierujp) for the excellent work!
  - Other community contributed translations exist in Spanish, French, Italian, Korean, Portuguese, Simplified Chinese, and Taiwanese Mandarin.
  - More translations are always welcome!

- Update `eslint-plugin-promise` from `~4.0.0` to `~4.2.1`

- Update `eslint-plugin-node` from `~7.0.1` to `~9.1.0`

### New rules

_(Estimated % of affected standard users, based on test suite in parens)_

- Disallow spaces inside of array brackets ([array-bracket-spacing](https://eslint.org/docs/rules/array-bracket-spacing)) [#1203](https://github.com/standard/standard/issues/1203) [eslint-config-standard/#131](https://github.com/standard/eslint-config-standard/pull/131) [14%]
- Require `const` instead of `let` if variable is never reassigned ([prefer-const](https://eslint.org/docs/rules/prefer-const)) [#523](https://github.com/standard/standard/issues/523) [eslint-config-standard/#133](https://github.com/standard/eslint-config-standard/pull/133) [14%]
- Disallow quotes around object literal property names that are not strictly required ([quote-props](https://eslint.org/docs/rules/quote-props)) [#791](https://github.com/standard/standard/issues/791) [4%]
- Disallow use of Object.prototypes builtins directly ([no-prototype-builtins](https://eslint.org/docs/rules/no-prototype-builtins)) [#1310](https://github.com/standard/standard/issues/1310) [3%]
- Require an empty line between class members ([lines-between-class-members](https://eslint.org/docs/rules/lines-between-class-members)) [#438](https://github.com/standard/standard/issues/438) [1%]
- Disallow using an async function as a Promise executor ([no-async-promise-executor](https://eslint.org/docs/rules/no-async-promise-executor)) [#1309](https://github.com/standard/standard/issues/1309) [1%]
- Disallow spaces inside of computed properties ([computed-property-spacing](https://eslint.org/docs/rules/computed-property-spacing)) [#1315](https://github.com/standard/standard/issues/1315) [eslint-config-standard/#131](https://github.com/standard/eslint-config-standard/pull/131) [1%]
- Disallow unnecessary catch clauses ([no-useless-catch](https://eslint.org/docs/rules/no-useless-catch)) [#1312](https://github.com/standard/standard/issues/1312) [0%]
- Disallow characters which are made with multiple code points in character class syntax ([no-misleading-character-class](https://eslint.org/docs/rules/no-misleading-character-class)) [#1311](https://github.com/standard/standard/issues/1311) [0%]

## [12.0.1] - 2018-08-29

- Since ESLint 5 no longer supports Node 4, `standard` silently passes when run in Node 4, which matches the current behavior for Node 0.10, 0.12, and all other unsupported versions of Node.

## [12.0.0] - 2018-08-28

New version of ESLint, new version of Standard!

When you upgrade, consider running `standard --fix` to automatically format your code to match the newly added rules.

### New features

- Update `eslint` from `~4.19.0` to `~5.4.0`.
  - Support JSXFragment nodes (e.g. `<></>`)
  - Lots of minor changes to rules to catch more edge cases!
- The README is now available in French! (Thanks [@charliegerard](https://github.com/charliegerard)!)
  - Other community contributed translations exist in Spanish, Italian, Korean, Portuguese, Simplified Chinese, and Taiwanese Mandarin.
  - More translations are welcome!

### New rules

_(Estimated % of affected standard users, based on test suite in parens)_

- Require spacing inside of braces ([object-curly-spacing](https://eslint.org/docs/rules/object-curly-spacing)) [#609](https://github.com/standard/standard/issues/609) [eslint-config-standard/#35](https://github.com/standard/eslint-config-standard/issues/35) [29%]
- Disallow APIs that were deprecated in Node 10 ([no-deprecated-api](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-deprecated-api.md)) [#1164](https://github.com/standard/standard/pull/1164) [15%]
  - e.g. `assert.equal()`, `assert.deepEqual()` and `assert.notEqual()` were deprecated in Node 10.
- Disallow self assignment of properties ([no-self-assign](https://eslint.org/docs/rules/no-self-assign)) [#1186](https://github.com/standard/standard/issues/1186) [0%]
- Disallow use of an exported name as the locally imported name of a default export ([import/no-named-as-default](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md)) [eslint-config-standard/#98](https://github.com/standard/eslint-config-standard/pull/98)

### Changed rules

None.

## [11.0.0] - 2018-02-18

This release has no new rules, but it does update to the latest version of `eslint`,
version 4, which has some significant changes to existing rules. Most updates make
the indentation rules more strict.

Thankfully, most users will just need to run `standard --fix` to update code to be
compliant.

### New features

- Update `eslint` from ~3.19.0 to ~4.18.0.
  - The `indent` rule is more strict.
  - The `padded-blocks` rule is more strict.
  - The `space-before-function-paren` rule is more strict.
  - The `no-multi-spaces` rule is more strict.
  - Minor improvements to:
    - `no-extra-parens`,
    - `no-unexpected-multiline`,
    - `no-regex-spaces`, and
    - `space-unary-ops`

- Update `eslint-plugin-import` from `~2.2.0` to `~2.8.0`
  - Updated for eslint 4.0 compatibility.
  - Various small bug fixes included related to `import/*` rules.

- Update `eslint-plugin-node` from `~4.2.2` to `~6.0.0`
  - The `no-deprecated-api` rule is updated with Node.js 8 support and improved
    Node 6 support.

- Upodate `eslint-plugin-promise` from `~3.5.0` to `~3.6.0`.

- Update `eslint-plugin-react` from `~6.10.0` to `~7.6.1`
  - Fix `jsx-indent` crash
  - Fix `jsx-indent` indentation calculation with nested JSX.
  - Fix `jsx-no-undef` will not check the global scope by default.
  - Fix `jsx-curly-spacing` newline with object literals bug.
  - Fix `jsx-curly-spacing` schema incompatibility with ESLint 4.2.0.
  - Fix alignment bug in `jsx-indent`.

### Changed rules

- Relax rule: Don't mark Rails Asset Pipeline comments (comments that start with `//=`)
  as errors. ([spaced-comment](https://eslint.org/docs/rules/spaced-comment)) [#918](https://github.com/standard/standard/issues/918)

👏 Huge thanks to [@Flet](https://github.com/Flet) for putting together most of this
release!

## [10.0.3] - 2017-08-06

- Internal changes (incremented dependency versions)

## [10.0.2] - 2017-04-14

### Changed rules

- Relax rule: Disallow import of modules using absolute paths ([import/no-absolute-path](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md)) [#861](https://github.com/standard/standard/issues/861)
  - This rule was responsible for up to 25% of the running time of `standard`, so we are disabling it until its performance improves.

## [10.0.1] - 2017-04-06

- Internal changes (incremented dependency versions)

## [10.0.0] - 2017-04-04

**`standard` just turned 10.0.0!** 🎉

As with every new major release, there are lots of new rules in 10.0.0 designed to
help catch bugs and make programmer intent more explicit.

`standard` is more popular than ever – **330,000 downloads per month!** It's even
more popular – **670,000 downloads per month** – if you include the
[shareable ESLint config](https://www.npmjs.com/package/eslint-config-standard)
that we also publish.

The most important change in 10.0.0 is that **using deprecated Node.js APIs is now
considered an error**. It's finally time to update those dusty old APIs!

Deprecated APIs are problematic because they may print warning messages in the
console in recent versions of Node.js. This often confuses users and leads to
unnecessary support tickets for project maintainers.

Some deprecated APIs are even insecure (or at least prone to incorrect usage) which
can have serious security implications. For that reason, `standard` now considers
usage of `Buffer(num)` to be an error, since this function returns uninitialized
program memory which could contain confidential information like passwords or keys.

Instead of `Buffer(num)`, consider using `Buffer.alloc(num)` or `Buffer.from(obj)`
which make the programmer's intent clearer. These functions exist in all currently
supported versions of Node.js, including Node.js 4.x. For more background,
[see this Node.js issue](https://github.com/nodejs/node/issues/4660).

We also improved some rules to support common patterns in code bases that use
React, JSX, and Flow.

When you upgrade, consider running `standard --fix` to automatically fix some of
the issues caught by this new version.

### New features

- Update ESLint from 3.15.x to 3.19.x.
- Node.js API: Add `standard.lintTextSync` method

### New rules

_(Estimated % of affected standard users, based on test suite in parens)_

- Disallow using deprecated Node.js APIs ([node/no-deprecated-api](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-deprecated-api.md)) [#693](https://github.com/standard/standard/issues/693) [13%]
  - Ensures that code always runs without warnings on the latest versions of Node.js
  - Ensures that safe Buffer methods (`Buffer.from()`, `Buffer.alloc()`) are used instead of `Buffer()`
- Enforce callbacks always called with Node.js-style error first ([standard/no-callback-literal](https://github.com/xjamundx/eslint-plugin-standard#rules-explanations)) [#623](https://github.com/standard/standard/issues/623) [3%]
  - Functions named `callback` or `cb` must be invoked with `null`, `undefined`, or an `Error` as the first argument
  - Disallows using a string instead of an `Error` object
  - Disallows confusing callbacks that do not follow the standard Node.js pattern
- Disallow any imports that come after non-import statements ([import/first](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md)) [#806](https://github.com/standard/standard/issues/806) [1%]
- Disallow unnecessary return await ([no-return-await](https://eslint.org/docs/rules/no-return-await)) [#695](https://github.com/standard/standard/issues/695) [0%]
- Disallow comma-dangle in functions ([comma-dangle](https://eslint.org/docs/rules/comma-dangle)) [#787](https://github.com/standard/standard/issues/787) [0%]
- Disallow repeated exports of names or defaults ([import/export](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md)) [#806](https://github.com/standard/standard/issues/806) [0%]
- Disallow import of modules using absolute paths ([import/no-absolute-path](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md)) [#806](https://github.com/standard/standard/issues/806) [0%]
- Disallow Webpack loader syntax in imports ([import/no-webpack-loader-syntax](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md)) [#806](https://github.com/standard/standard/issues/806) [0%]
- Disallow comparing against -0 ([no-compare-neg-zero](https://eslint.org/docs/rules/no-compare-neg-zero)) [#812](https://github.com/standard/standard/issues/812) [0%]

### Changed rules

- Relax rule: allow using `...rest` to omit properties from an object ([no-unused-vars](https://eslint.org/docs/rules/no-unused-vars)) [#800](https://github.com/standard/standard/issues/800)
  - This is a common and useful pattern in React/JSX apps!
- Relax rule: allow Flow `import type` statements ([import/no-duplicates](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md)) [#599](https://github.com/standard/standard/issues/599)
  - These are no longer considered to be "duplicate imports"
- Relax rule: Treat `process.exit()` the same as `throw` in code path analysis ([node/process-exit-as-throw](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/process-exit-as-throw.md)) [#699](https://github.com/standard/standard/issues/699)
  - Makes certain other rules work better and give fewer false positives
- Relax rule: allow Unnecessary Labels ([no-extra-label](https://eslint.org/docs/rules/no-extra-label))
  - Redundant, since "no-labels" is already enabled, which is more restrictive

## [9.0.2] - 2017-03-17

### Changed rules

- Relax rule: Allow tagged template string expressions ([no-unused-expressions](https://eslint.org/docs/rules/no-unused-expressions)) [#822](https://github.com/standard/standard/issues/822)

## [9.0.1] - 2017-03-07

### Changed rules

- Relax rule: Allow mixing basic operators without parens ([no-mixed-operators](https://eslint.org/docs/rules/no-mixed-operators)) [#816](https://github.com/standard/standard/issues/816)
  - Specifically, these operators: `+`, `-`, `*`, `/`, `%`, and `**`

## [9.0.0] - 2017-02-28

It's time for a new major version of `standard`! As usual, this release contains a
bunch of awesomeness to help you keep your code in tip-top shape!

We've added several new rules designed to **catch potential programmer errors**
(i.e. bugs), as well as rules to make programmer intent **more explicit** in
certain circumstances.

This release continues our trend of tightening up rules so that, wherever possible,
there's one "right" way to do things. This design goal is intended to reduce the
time that teams and maintainers spend giving code review feedback in pull requests.

When you upgrade, consider running `standard --fix` to automatically fix some of the
errors caught by the new rules in this version.

_Note: If you use the Chai test framework, you will need to make some changes to
your tests to improve their robustness. [Read about the changes you need to make](https://github.com/standard/standard/issues/690#issuecomment-278533482)._

### New features

- Update ESLint from 3.10.x to 3.15.x
- 3 additional rules are now fixable with `standard --fix`

### New rules

_(Estimated % of affected standard users, based on test suite in parens)_

- Disallow mixing different operators without parens ([no-mixed-operators](https://eslint.org/docs/rules/no-mixed-operators)) [#566](https://github.com/standard/standard/issues/566) [5%]
- Enforce 1 newline at end of file (previously 1 or 2 were ok) ([no-multiple-empty-lines](https://eslint.org/docs/rules/no-multiple-empty-lines)) [#733](https://github.com/standard/standard/issues/733) [3%]
- Disallow Unused Expressions ([no-unused-expressions](https://eslint.org/docs/rules/no-unused-expressions)) [#690](https://github.com/standard/standard/issues/690) [3%]
  - Note: this affects users of the Chai test framework. [Read about the changes you need to make](https://github.com/standard/standard/issues/690#issuecomment-278533482).
- Disallow redundant return statements ([no-useless-return](https://eslint.org/docs/rules/no-useless-return)) [#694](https://github.com/standard/standard/issues/694) [1%]
- Disallow Incorrect Early Use ([no-use-before-define](https://eslint.org/docs/rules/no-use-before-define)) [#636](https://github.com/standard/standard/issues/636) [0%]
- Enforce that Promise rejections are passed an Error object as a reason ([prefer-promise-reject-errors](https://eslint.org/docs/rules/prefer-promise-reject-errors)) [#777](https://github.com/standard/standard/issues/777) [0%]
- Enforce comparing `typeof` expressions against string literals ([valid-typeof](https://eslint.org/docs/rules/valid-typeof)) [#629](https://github.com/standard/standard/issues/629) [0%]
- Enforce spacing around \* in generator functions ([generator-star-spacing](https://eslint.org/docs/rules/generator-star-spacing)) [#724](https://github.com/standard/standard/issues/724) [0%]
- Disallow Unnecessary Labels ([no-extra-label](https://eslint.org/docs/rules/no-extra-label)) [#736](https://github.com/standard/standard/issues/736) [0%]
- Disallow spacing between template tags and their literals ([template-tag-spacing](https://eslint.org/docs/rules/template-tag-spacing)) [#755](https://github.com/standard/standard/issues/775) [0%]
- Disallow padding within switch statements and classes ([padded-blocks](https://eslint.org/docs/rules/padded-blocks)) [#610](https://github.com/standard/standard/issues/610) [0%]
- Enforce that Symbols are passed a description ([symbol-description](https://eslint.org/docs/rules/symbol-description)) [#630](https://github.com/standard/standard/issues/630) [0%]

### Changed rules

- Relax rule: allow TypeScript Triple-Slash Directives ([spaced-comment](https://eslint.org/docs/rules/spaced-comment)) [#660](https://github.com/standard/standard/issues/660)
- Relax rule: allow Flow Comments ([spaced-comment](https://eslint.org/docs/rules/spaced-comment)) [#661](https://github.com/standard/standard/issues/661)

## [8.6.0] - 2016-11-22

- Update ESLint from 3.8.x to 3.10.x
- 3 additional rules are now fixable with `standard --fix`

## [8.5.0] - 2016-10-25

- Update ESLint from 3.7.x to 3.8.x
- 2 additional rules are now fixable with `standard --fix`

## [8.4.0] - 2016-10-10

- Update ESLint from 3.6.x to 3.7.x
- 5 additional rules are now fixable with `standard --fix`
- Use more conservative semver ranges [#654](https://github.com/standard/standard/issues/654)

## [8.3.0] - 2016-09-29

The last release (`8.2.0`) added ES7 support. This release (`8.3.0`) adds ES8
support ...just 3 days later!

This release should eliminate the need to specify `babel-eslint` as a custom
parser, since `standard` can now parse ES8 (i.e. ES2017) syntax out of the box.
That means `async` and `await` will just work.

- Support ES8 (i.e. ES2017) syntax.

## [8.2.0] - 2016-09-26

For many users, this release should eliminate the need to specify `babel-eslint` as
a custom parser, since `standard` can now parse ES7 (i.e. ES2016) syntax out of the
box.

- Support ES7 (i.e. ES2016) syntax.
- Update ESLint from 3.5.x to 3.6.x
- 4 additional rules are now fixable with `standard --fix`

## [8.1.0] - 2016-09-17

- Update ESLint from 3.3.x to 3.5.x
- Around 10 additional rules are now fixable with `standard --fix`

## [8.0.0] - 2016-08-23

This release contains a bunch of goodies, including new rules that catch potential
programmer errors (i.e. bugs) and enforce additional code consistency.

However, the best feature is surely the new `--fix` command line flag to
automatically fix problems. If you ever used
[`standard-format`](https://www.npmjs.com/package/standard-format)
and ran into issues with the lack of ES2015+ support, you'll be happy about
`--fix`.

`standard --fix` is built into `standard` v8.0.0 for maximum convenience, it
supports ES2015, and it's lightweight (no additional dependencies since it's part
of ESLint which powers `standard`). Lots of problems are already fixable, and more
are getting added with each ESLint release.

`standard` also outputs a message ("Run `standard --fix` to automatically fix
some problems.") when it detects problems that can be fixed automatically so you
can save time!

With `standard` v8.0.0, we are also dropping support for Node.js versions prior to
v4. Node.js 0.10 and 0.12 are in maintenance mode and will be unsupported at the
end of 2016. Node.js 4 is the current LTS version. If you are using an older
version of Node.js, we recommend upgrading to at least Node.js 4 as soon as
possible. If you are unable to upgrade to Node.js 4 or higher, then we recommend
continuing to use `standard` v7.x until you are ready to upgrade Node.js.

**Important:** We will not be updating the `standard` v7.x versions going forward.
All bug fixes and enhancements will land in `standard` v8.x.

Full changelog below. Cheers!

### New features

- Upgrade to ESLint v3 (<https://eslint.org/docs/user-guide/migrating-to-3.0.0>) [#565](https://github.com/standard/standard/pull/565)
  - **BREAKING:** Drop support for node &lt; 4 (this was a decision made by the ESLint team)
- Expose ESLint's `--fix` command line flag [#540](https://github.com/standard/standard/issues/540) [standard-engine/#107](https://github.com/Flet/standard-engine/issues/107)
  - Lightweight, no additional dependencies, fixes dozens of rules automatically

### New rules

_(Estimated % of affected standard users, based on test suite in parens)_

- Enforce placing object properties on separate lines ([object-property-newline](https://eslint.org/docs/rules/object-property-newline)) [#524](https://github.com/standard/standard/issues/524) [2%]
- Require block comments to be balanced ([spaced-comment "balanced"](https://eslint.org/docs/rules/spaced-comment)) [#572](https://github.com/standard/standard/issues/572) [2%]
- Disallow constant expressions in conditions ([no-constant-condition](https://eslint.org/docs/rules/no-constant-condition)) [#563](https://github.com/standard/standard/issues/563) [1%]
- Disallow renaming import, export, and destructured assignments to the same name ([no-useless-rename](https://eslint.org/docs/rules/no-useless-rename)) [#537](https://github.com/standard/standard/issues/537) [0%]
- Disallow spacing between rest and spread operators and their expressions ([rest-spread-spacing](https://eslint.org/docs/rules/rest-spread-spacing)) [#567](https://github.com/standard/standard/issues/567) [0%]
- Disallow the Unicode Byte Order Mark (BOM) ([unicode-bom](https://eslint.org/docs/rules/unicode-bom)) [#538](https://github.com/standard/standard/issues/538) [0%]
- Disallow assignment to native objects/global variables ([no-global-assign](https://eslint.org/docs/rules/no-global-assign)) [#596](https://github.com/standard/standard/issues/596) [0%]
- Disallow negating the left operand of relational operators ([no-unsafe-negation](https://eslint.org/docs/rules/no-unsafe-negation)) [#595](https://github.com/standard/standard/issues/595) [0%]
- Disallow template literal placeholder syntax in regular strings ([no-template-curly-in-string](https://eslint.org/docs/rules/no-template-curly-in-string)) [#594](https://github.com/standard/standard/issues/594) [0%]
- Disallow tabs in file ([no-tabs](https://eslint.org/docs/rules/no-tabs)) [#593](https://github.com/standard/standard/issues/593) [0%]

### Changed rules

- Relax rule: Allow template literal strings (backtick strings) to avoid escaping  [#421](https://github.com/standard/standard/issues/421)
- Relax rule: Do not enforce spacing around \* in generator functions ([#564 (comment)](https://github.com/standard/standard/issues/564#issuecomment-234699126))
  - This is a temporary workaround for `babel` users who use async generator functions.

## [7.1.2] - 2016-06-03

- Fix install errors for some users by updating eslint peer dependency

## [7.1.1] - 2016-05-26

- Add back full node 0.10, 0.12 support

## [7.1.0] - 2016-05-16

- Upgrade eslint to version 2.10.2.

## [7.0.1] - 2016-05-04

- Relax "no-duplicate-imports" rule to not include `export` so the following is allowed:

```js
import { foo } from 'bar'
export * from 'bar'
```

## [7.0.0] - 2016-05-02

### Changes

- Upgrade eslint to version ~2.9.0
- Remove "rules" configuration option [#367](https://github.com/standard/standard/issues/367) from `package.json` (Reasoning is [here](https://github.com/standard/standard/issues/399#issuecomment-180961891))

### New rules

_Estimated % of affected standard users, based on test suite_

- Require camelCase ([camelcase](https://eslint.org/docs/rules/camelcase)) [4%]
- Disallow unnecessary escape usage ([no-useless-escape](https://eslint.org/docs/rules/no-useless-escape)) [4% -- but, including many bugs]
- Disallow duplicate imports ([no-duplicate-imports](https://eslint.org/docs/rules/no-duplicate-imports)) [0%]
- Disallow unmodified conditions of loops ([no-unmodified-loop-condition](https://eslint.org/docs/2.0.0/rules/no-unmodified-loop-condition)) [0%]
- Disallow whitespace before properties ([no-whitespace-before-property](https://eslint.org/docs/2.0.0/rules/no-whitespace-before-property)) [0%]
- Disallow control flow statements in `finally` blocks ([no-unsafe-finally](https://eslint.org/docs/rules/no-unsafe-finally)) [0%]
- Disallow unnecessary computed property keys on objects ([no-useless-computed-key](https://eslint.org/docs/rules/no-useless-computed-key)) [0%]
- Validate spacing before closing bracket in JSX ([react/jsx-space-before-closing](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-space-before-closing.md)) [0%]

### Removed rules

- Require parens in arrow function arguments ([arrow-parens](https://eslint.org/docs/rules/arrow-parens))

## [6.0.8] - 2016-03-07

- Pin eslint to version ~2.2.0
- Update eslint-plugin-react to version 4.0.0

## [6.0.7] - 2016-02-18

- Revert: Use install location of standard as eslint `cwd` (fixes [#429](https://github.com/standard/standard/issues/429))

## [6.0.6] - 2016-02-18

- Use eslint 2.1.0
- Fix: Use install location of standard as eslint `cwd` (fixes [snazzy/#8](https://github.com/standard/snazzy/issues/8))

## [6.0.5] - 2016-02-12

- Use eslint 2.0.0 stable

## [6.0.4] - 2016-02-07

- Relax rule: Validate closing bracket location in JSX ([jsx-closing-bracket-location](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md))

## [6.0.3] - 2016-02-06

- Fix "Error: Cannot find module 'eslint-config-standard-jsx'" with npm 2 (node 0.10, 0.12, 4)

## [6.0.2] - 2016-02-06

- Internal change: Remove .eslintrc file, and use inline config

## [6.0.1] - 2016-02-05

- Internal change: Move .eslintrc file to root folder

## [6.0.0] - 2016-02-05

The goal of this release is to make `standard` faster to install, and simpler to use.

### Remove `standard-format` ([#340](https://github.com/standard/standard/issues/340)) ([#397](https://github.com/standard/standard/issues/397))

- Eliminates 250 packages, and cuts install time in half!
- For npm 2, install time goes from 20 secs —> 10 secs.
- For npm 3, install time goes from 24 secs —> 12 secs.
- To continue using `standard-format`, just install it separately: `npm install -g standard-format`

### React-specific linting rules are removed ([#351](https://github.com/standard/standard/issues/351)) ([#367](https://github.com/standard/standard/issues/367)) ([eslint-config-standard-react/#13](https://github.com/standard/eslint-config-standard-react/pull/13))

- JSX is still supported, and it continues to be checked for style.
- There were only a few React-specific rules, but they made it extremely difficult for users of alternatives like `virtual-dom` or `deku`, and unecessarily tied `standard` to a single library.
- JSX rules come from `eslint-config-standard-jsx`. The `eslint-config-standard-react` dependency was removed.

### New Rules

_The percentage (%) of users that rule changes will effect, based on real-world testing of the top ~400 npm packages is denoted in brackets._

- Disallow `__dirname`/`__filename` string concatenation ([#403](https://github.com/standard/standard/issues/403)) ([no-path-concat](https://eslint.org/docs/2.0.0/rules/no-path-concat)) [5%]
- Require parens in arrow function arguments  ([#309](https://github.com/standard/standard/issues/309)) ([arrow-parens](https://eslint.org/docs/2.0.0/rules/arrow-parens.html)) [5%]
- Ensure that `new Promise()` is instantiated with the parameter names
  `resolve`, `reject` ([#282](https://github.com/standard/standard/issues/282)) ([promise/param-names](https://github.com/xjamundx/eslint-plugin-promise#param-names)) [1%]
- Enforce Usage of Spacing in Template Strings ([template-curly-spacing](https://eslint.org/docs/2.0.0/rules/template-curly-spacing)) [1%]
- Template strings are only allowed when necessary, i.e. template string features are being used (eslint got stricter: [eslint/eslint#5147](https://github.com/eslint/eslint/issues/5147)) [1%]
- Better dead code detection after conditional statements (eslint got stricter) [1%]
- Enforce spaces around `*` in `yield * something` ([#335](https://github.com/standard/standard/issues/335)) ([yield-star-spacing](https://eslint.org/docs/2.0.0/rules/yield-star-spacing)) [0%]
- Disallow labels on loops/switch statements too (made rule stricter) ([no-labels](https://eslint.org/docs/2.0.0/rules/no-labels.html)) [0%]
- Disallow unnecessary constructor ([no-useless-constructor](https://eslint.org/docs/2.0.0/rules/no-useless-constructor)) [0%]
- Disallow empty destructuring patterns ([no-empty-pattern](https://eslint.org/docs/2.0.0/rules/no-empty-pattern)) [0%]
- Disallow Symbol Constructor ([no-new-symbol](https://eslint.org/docs/2.0.0/rules/no-new-symbol)) [0%]
- Disallow Self Assignment ([no-self-assign](https://eslint.org/docs/2.0.0/rules/no-self-assign)) [0%]

### Removed Rules

- `parseInt()` radix rule because ES5 fixes this issue ([#384](https://github.com/standard/standard/issues/384))  ([radix](https://eslint.org/docs/2.0.0/rules/radix.html)) [0%]

### Expose eslint configuration via command line options and `package.json`

For power users, it might be easier to use one of these new hooks instead of forking
`standard`, though that's still encouraged, too!

- Set eslint "plugins" ([#386](https://github.com/standard/standard/issues/386))
- Set eslint "rules" ([#367](https://github.com/standard/standard/issues/367))
- Set eslint "env" ([#371](https://github.com/standard/standard/issues/371))

To set custom ESLint plugins, rules, or envs, use the command line `--plugin`, `--rules`, and `--env` flags.

In `package.json`, use the "standard" property:

```json
{
  "standard": {
    "plugins": [ "my-plugin" ]
  }
}
```

### Upgrade to ESLint v2

- There may be slight behavior changes to existing rules. When possible, we've noted these in the "New Rules" and "Removed Rules" section.

### Improve test suite

- Rule changes can be tested against every package on npm. For sanity, this is limited to packages with at least 4 dependents. Around 400 packages.

### Known Issues

- Using prerelease eslint version (2.0.0-rc.0). There may be breaking changes before the stable release.
- `no-return-assign` behavior changed with arrow functions ([eslint/eslint#5150](https://github.com/eslint/eslint/issues/5150))

### Relevant diffs

- standard ([v5.4.1...v6.0.0](https://github.com/standard/standard/compare/v5.4.1...v6.0.0))
- eslint-config-standard ([v4.4.0...v5.0.0](https://github.com/standard/eslint-config-standard/compare/v4.4.0...v5.0.0))
- eslint-config-standard-jsx ([v1.0.0](https://github.com/standard/eslint-config-standard-jsx/commit/47d5e248e2e078eb87619493999e3e74d4b7e70e))
- standard-engine ([v2.2.4...v3.2.1](https://github.com/Flet/standard-engine/compare/v2.2.4...v3.2.1))

## [5.4.1] - 2015-11-16

[view diff](https://github.com/standard/standard/compare/v5.4.0...v5.4.1)

### Fixed

- Fix for `standard-engine` change. Fix error tagline.

## [5.4.0] - 2015-11-16

[view diff](https://github.com/standard/standard/compare/v5.3.1...v5.4.0)

### Added

- eslint-config-standard-react@1.2.0
  - Disallow duplicate JSX properties

## [5.3.1] - 2015-09-18

[view diff](https://github.com/standard/standard/compare/v5.3.0...v5.3.1)

### Changed

- eslint-plugin-react@3.4.2

## [5.3.0] - 2015-09-16

[view diff](https://github.com/standard/standard/compare/v5.2.2...v5.3.0)

### Changed

- eslint-config-standard@4.4.0 ([history][eslint-config-standard])
  - **New rule:** must have space after semicolon in for-loop ([commit](https://github.com/standard/eslint-config-standard/commit/6e5025eef8900f686e19b4a31836743d98323119))
  - **New rule:** No default assignment with ternary operator ([commit](https://github.com/standard/eslint-config-standard/commit/0903c19ca6a8bc0c8625c41ca844ee69968bf948))
  - **New rule:** Require spaces before keywords ([commit](https://github.com/standard/eslint-config-standard/commit/656ba93cda9cd4ab38e032649aafb795993d5176))
- eslint-config-standard-react@1.1.0 ([history][eslint-config-standard-react])
- eslint-plugin-react@3.4.0 ([history][eslint-plugin-react])
- eslint-plugin-standard@1.3.1 ([history][eslint-plugin-standard])

## [5.2.2] - 2015-09-08

[view diff](https://github.com/standard/standard/compare/v5.2.1...v5.2.2)

### Fixed

- We have a changelog now, and you're reading it!
- Minor README update
- Removed direct dependency on `eslint` (its now moved to [standard-engine](https://github.com/flet/standard-engine))

## [5.2.1] - 2015-09-03

[view diff](https://github.com/standard/standard/compare/v5.2.0...v5.2.1)

### Changed

- eslint-config-standard@4.3.1 ([history][eslint-config-standard])
  - **Revert rule**: Disallow unncessary concatenation of strings

### Fixed

- eslint-config-standard@4.3.1 ([history][eslint-config-standard])
  - fix regression with ternary operator handling

## [5.2.0] - 2015-09-03

[view diff](https://github.com/standard/standard/compare/v5.1.1...v5.2.0)

### Added

- eslint-config-standard@4.3.0 ([history][eslint-config-standard])
  - **New rule:** Disallow unncessary concatenation of strings
  - **New rule:** Disallow duplicate name in class members
  - **New rule:** enforce spaces inside of single line blocks
  - **Re-add rule:** padded-blocks ([Closes #170](https://github.com/standard/standard/issues/170))

### Changed

- Bump `eslint` from 1.1.0 to 1.3.1 ([CHANGELOG][eslint])
- eslint-plugin-standard@1.3.0 ([history][eslint-plugin-standard])
  - A small change to make the plugin compatible with browserify which does not affect behavior.

### Fixed

- eslint-plugin-react@3.3.1 ([CHANGELOG][eslint-plugin-react])
  - Fix object rest/spread handling.
- Added white background to badge.svg to make it work with dark backgrounds ([Closes #234](https://github.com/standard/standard/issues/234))
- Minor updates to README.md

## [5.1.1] - 2015-08-28

[view diff](https://github.com/standard/standard/compare/v5.1.0...v5.1.1)

### Fixed

- Update to RULES.md to remove a missing hyperlink
- Add atom linter information to README.md
- Fixed duplicated word in the tagline message on the CLI
- Removed failing repository from tests (yoshuawuyts/initialize)

## [5.1.0] - 2015-08-14

[view diff](https://github.com/standard/standard/compare/v5.0.2...v5.1.0)

### Fixed

- eslint-config-standard@4.1.0 ([history][eslint-config-standard])
  - Added rest/spread feature to `eslintrc.json` to fix [#226](https://github.com/standard/standard/issues/226) and [eslint-plugin-standard#3](https://github.com/xjamundx/eslint-plugin-standard/issues/3)
- eslint-plugin-react@3.2.2 ([CHANGELOG][eslint-plugin-react])
  - Fix crash when propTypes don't have any parent
  - Fix jsx-no-literals reporting errors outside JSX

### Changed

- Bump eslint from 1.0.0 to 1.2.0 ([CHANGELOG][eslint])
- Added more test repositories and disabled some that were failing
- Update bikeshedding link on README.md

## [5.0.2] - 2015-08-06

[view diff](https://github.com/standard/standard/compare/v5.0.1...v5.0.2)

### Changed

- eslint-config-standard-react@1.0.4 ([history][eslint-config-standard-react])
  - **Disable Rule:** react/wrap-multilines
- Minor README updates

## [5.0.1] - 2015-08-05

[view diff](https://github.com/standard/standard/compare/v5.0.0...v5.0.1)

## [5.0.0] - 2015-08-03

[view diff](https://github.com/standard/standard/compare/v4.5.4...v5.0.0)

## [4.5.4] - 2015-07-13

[view diff](https://github.com/standard/standard/compare/v4.5.3...v4.5.4)

## [4.5.3] - 2015-07-10

[view diff](https://github.com/standard/standard/compare/v4.5.2...v4.5.3)

## [4.5.2] - 2015-07-02

[view diff](https://github.com/standard/standard/compare/v4.5.1...v4.5.2)

## [4.5.1] - 2015-06-30

[view diff](https://github.com/standard/standard/compare/v4.5.0...v4.5.1)

## [4.5.0] - 2015-06-30

[view diff](https://github.com/standard/standard/compare/v4.4.1...v4.5.0)

## [4.4.1] - 2015-06-29

[view diff](https://github.com/standard/standard/compare/v4.4.0...v4.4.1)

## [4.4.0] - 2015-06-27

[view diff](https://github.com/standard/standard/compare/v4.3.3...v4.4.0)

## [4.3.3] - 2015-06-26

[view diff](https://github.com/standard/standard/compare/v4.3.2...v4.3.3)

## [4.3.2] - 2015-06-23

[view diff](https://github.com/standard/standard/compare/v4.3.1...v4.3.2)

## [4.3.1] - 2015-06-18

[view diff](https://github.com/standard/standard/compare/v4.3.0...v4.3.1)

## [4.3.0] - 2015-06-16

[view diff](https://github.com/standard/standard/compare/v4.2.1...v4.3.0)

## [4.2.1] - 2015-06-12

[view diff](https://github.com/standard/standard/compare/v4.2.0...v4.2.1)

## [4.2.0] - 2015-06-11

[view diff](https://github.com/standard/standard/compare/v4.1.1...v4.2.0)

## [4.1.1] - 2015-06-11

[view diff](https://github.com/standard/standard/compare/v4.1.0...v4.1.1)

## [4.1.0] - 2015-06-10

[view diff](https://github.com/standard/standard/compare/v4.0.1...v4.1.0)

## [4.0.1] - 2015-06-01

[view diff](https://github.com/standard/standard/compare/v4.0.0...v4.0.1)

## 4.0.0 - 2015-05-30

[view diff](https://github.com/standard/standard/compare/v3.9.0...v4.0.0)

[unreleased]: https://github.com/standard/standard/compare/v14.3.3...HEAD

[14.3.3]: https://github.com/standard/standard/compare/v14.3.2...v14.3.3

[14.3.2]: https://github.com/standard/standard/compare/v14.3.1...v14.3.2

[14.3.1]: https://github.com/standard/standard/compare/v14.3.0...v14.3.1

[14.3.0]: https://github.com/standard/standard/compare/v14.2.0...v14.3.0

[14.2.0]: https://github.com/standard/standard/compare/v14.1.0...v14.2.0

[14.1.0]: https://github.com/standard/standard/compare/v14.0.2...v14.1.0

[14.0.2]: https://github.com/standard/standard/compare/v14.0.1...v14.0.2

[14.0.1]: https://github.com/standard/standard/compare/v14.0.0...v14.0.1

[14.0.0]: https://github.com/standard/standard/compare/v13.1.0...v14.0.0

[13.1.0]: https://github.com/standard/standard/compare/v13.0.2...v13.1.0

[13.0.2]: https://github.com/standard/standard/compare/v13.0.1...v13.0.2

[13.0.1]: https://github.com/standard/standard/compare/v13.0.0...v13.0.1

[13.0.0]: https://github.com/standard/standard/compare/v12.0.1...v13.0.0

[12.0.1]: https://github.com/standard/standard/compare/v12.0.0...v12.0.1

[12.0.0]: https://github.com/standard/standard/compare/v11.0.0...v12.0.0

[11.0.0]: https://github.com/standard/standard/compare/v10.0.3...v11.0.0

[10.0.3]: https://github.com/standard/standard/compare/v10.0.2...v10.0.3

[10.0.2]: https://github.com/standard/standard/compare/v10.0.1...v10.0.2

[10.0.1]: https://github.com/standard/standard/compare/v10.0.0...v10.0.1

[10.0.0]: https://github.com/standard/standard/compare/v9.0.2...v10.0.0

[9.0.2]: https://github.com/standard/standard/compare/v9.0.1...v9.0.2

[9.0.1]: https://github.com/standard/standard/compare/v9.0.0...v9.0.1

[9.0.0]: https://github.com/standard/standard/compare/v8.6.0...v9.0.0

[8.6.0]: https://github.com/standard/standard/compare/v8.5.0...v8.6.0

[8.5.0]: https://github.com/standard/standard/compare/v8.4.0...v8.5.0

[8.4.0]: https://github.com/standard/standard/compare/v8.3.0...v8.4.0

[8.3.0]: https://github.com/standard/standard/compare/v8.2.0...v8.3.0

[8.2.0]: https://github.com/standard/standard/compare/v8.1.0...v8.2.0

[8.1.0]: https://github.com/standard/standard/compare/v8.0.0...v8.1.0

[8.0.0]: https://github.com/standard/standard/compare/v7.1.2...v8.0.0

[7.1.2]: https://github.com/standard/standard/compare/v7.1.1...v7.1.2

[7.1.1]: https://github.com/standard/standard/compare/v7.1.0...v7.1.1

[7.1.0]: https://github.com/standard/standard/compare/v7.0.1...v7.1.0

[7.0.1]: https://github.com/standard/standard/compare/v7.0.0...v7.0.1

[7.0.0]: https://github.com/standard/standard/compare/v6.0.8...v7.0.0

[6.0.8]: https://github.com/standard/standard/compare/v6.0.7...v6.0.8

[6.0.7]: https://github.com/standard/standard/compare/v6.0.6...v6.0.7

[6.0.6]: https://github.com/standard/standard/compare/v6.0.5...v6.0.6

[6.0.5]: https://github.com/standard/standard/compare/v6.0.4...v6.0.5

[6.0.4]: https://github.com/standard/standard/compare/v6.0.3...v6.0.4

[6.0.3]: https://github.com/standard/standard/compare/v6.0.2...v6.0.3

[6.0.2]: https://github.com/standard/standard/compare/v6.0.1...v6.0.2

[6.0.1]: https://github.com/standard/standard/compare/v6.0.0...v6.0.1

[6.0.0]: https://github.com/standard/standard/compare/v5.4.1...v6.0.0

[5.4.1]: https://github.com/standard/standard/compare/v5.4.0...v5.4.1

[5.4.0]: https://github.com/standard/standard/compare/v5.3.1...v5.4.0

[5.3.1]: https://github.com/standard/standard/compare/v5.3.0...v5.3.1

[5.3.0]: https://github.com/standard/standard/compare/v5.2.2...v5.3.0

[5.2.2]: https://github.com/standard/standard/compare/v5.2.1...v5.2.2

[5.2.1]: https://github.com/standard/standard/compare/v5.2.0...v5.2.1

[5.2.0]: https://github.com/standard/standard/compare/v5.1.1...v5.2.0

[5.1.1]: https://github.com/standard/standard/compare/v5.1.0...v5.1.1

[5.1.0]: https://github.com/standard/standard/compare/v5.0.2...v5.1.0

[5.0.2]: https://github.com/standard/standard/compare/v5.0.1...v5.0.2

[5.0.1]: https://github.com/standard/standard/compare/v5.0.0...v5.0.1

[5.0.0]: https://github.com/standard/standard/compare/v4.5.4...v5.0.0

[4.5.4]: https://github.com/standard/standard/compare/v4.5.3...v4.5.4

[4.5.3]: https://github.com/standard/standard/compare/v4.5.2...v4.5.3

[4.5.2]: https://github.com/standard/standard/compare/v4.5.1...v4.5.2

[4.5.1]: https://github.com/standard/standard/compare/v4.5.0...v4.5.1

[4.5.0]: https://github.com/standard/standard/compare/v4.4.1...v4.5.0

[4.4.1]: https://github.com/standard/standard/compare/v4.4.0...v4.4.1

[4.4.0]: https://github.com/standard/standard/compare/v4.3.3...v4.4.0

[4.3.3]: https://github.com/standard/standard/compare/v4.3.2...v4.3.3

[4.3.2]: https://github.com/standard/standard/compare/v4.3.1...v4.3.2

[4.3.1]: https://github.com/standard/standard/compare/v4.3.0...v4.3.1

[4.3.0]: https://github.com/standard/standard/compare/v4.2.1...v4.3.0

[4.2.1]: https://github.com/standard/standard/compare/v4.2.0...v4.2.1

[4.2.0]: https://github.com/standard/standard/compare/v4.1.1...v4.2.0

[4.1.1]: https://github.com/standard/standard/compare/v4.1.0...v4.1.1

[4.1.0]: https://github.com/standard/standard/compare/v4.0.1...v4.1.0

[4.0.1]: https://github.com/standard/standard/compare/v4.0.0...v4.0.1

[eslint]: https://github.com/eslint/eslint/blob/master/CHANGELOG.md

[eslint-config-standard]: https://github.com/standard/eslint-config-standard/commits/master

[eslint-config-standard-react]: https://github.com/standard/eslint-config-standard-react/commits/master

[eslint-plugin-react]: https://github.com/yannickcr/eslint-plugin-react/blob/master/CHANGELOG.md

[eslint-plugin-standard]: https://github.com/xjamundx/eslint-plugin-standard/commits/master
