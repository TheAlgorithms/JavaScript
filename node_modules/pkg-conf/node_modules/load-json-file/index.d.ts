import {JsonValue} from 'type-fest';

declare namespace loadJsonFile {
	type Reviver = (this: unknown, key: string, value: any) => unknown;
	type BeforeParse = (data: string) => string;

	interface Options {
		/**
		Applies a function to the JSON string before parsing.
		*/
		readonly beforeParse?: BeforeParse;

		/**
		Prescribes how the value originally produced by parsing is transformed, before being returned.
		See the [`JSON.parse` docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#Using_the_reviver_parameter) for more.
		*/
		readonly reviver?: Reviver;
	}
}

declare const loadJsonFile: {
	/**
	Read and parse a JSON file.

	Strips UTF-8 BOM, uses graceful-fs, and throws more helpful JSON errors.

	@example
	```
	import loadJsonFile = require('load-json-file');

	(async () => {
		const json = await loadJsonFile('foo.json');
		//=> {foo: true}
	})();
	```
	*/
	<T = JsonValue>(filePath: string, options?: loadJsonFile.Options): Promise<T>;

	/**
	Read and parse a JSON file.

	Strips UTF-8 BOM, uses graceful-fs, and throws more helpful JSON errors.

	@example
	```
	import loadJsonFile = require('load-json-file');

	const json = loadJsonFile.sync('foo.json');
	//=> {foo: true}
	```
	*/
	sync<T = JsonValue>(filePath: string, options?: loadJsonFile.Options): T;

	// TODO: Remove this for the next major release
	default: typeof loadJsonFile;
};

export = loadJsonFile;
