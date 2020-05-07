# load-json-file [![Build Status](https://travis-ci.org/sindresorhus/load-json-file.svg?branch=master)](https://travis-ci.org/sindresorhus/load-json-file)

> Read and parse a JSON file

[Strips UTF-8 BOM](https://github.com/sindresorhus/strip-bom), uses [`graceful-fs`](https://github.com/isaacs/node-graceful-fs), and throws more [helpful JSON errors](https://github.com/sindresorhus/parse-json).


## Install

```
$ npm install load-json-file
```


## Usage

```js
const loadJsonFile = require('load-json-file');

loadJsonFile('foo.json').then(json => {
	console.log(json);
	//=> {foo: true}
});
```


## API

### loadJsonFile(filePath, [options])

Returns a promise for the parsed JSON.

### loadJsonFile.sync(filepath, [options])

Returns the parsed JSON.

#### options

Type: `Object`

##### beforeParse

Type: `Function`

Applies a function to the JSON string before parsing.

##### reviver

Type: `Function`

Prescribes how the value originally produced by parsing is transformed, before being returned. See the [`JSON.parse` docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#Using_the_reviver_parameter) for more.


## Related

- [write-json-file](https://github.com/sindresorhus/write-json-file) - Stringify and write JSON to a file atomically


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
