declare namespace pkgConf {
	type Config = {[key: string]: unknown};

	interface Options<ConfigType extends Config> {
		/**
		Directory to start looking up for a `package.json` file.

		@default process.cwd()
		*/
		cwd?: string;

		/**
		Default config.

		@default {}
		*/
		defaults?: ConfigType;

		/**
		Skip `package.json` files that have the namespaced config explicitly set to `false`.

		Continues searching upwards until the next `package.json` file is reached. This can be useful when you need to support the ability for users to have nested `package.json` files, but only read from the root one, like in the case of [`electron-builder`](https://github.com/electron-userland/electron-builder/wiki/Options#AppMetadata) where you have one `package.json` file for the app and one top-level for development.

		@default false

		@example
		```
		{
			"name": "some-package",
			"version": "1.0.0",
			"unicorn": false
		}
		```
		*/
		skipOnFalse?: boolean;
	}
}

declare const pkgConf: {
	/**
	It [walks up](https://github.com/sindresorhus/find-up) parent directories until a `package.json` can be found, reads it, and returns the user specified namespace or an empty object if not found.

	@param namespace - The `package.json` namespace you want.
	@returns A `Promise` for the config.

	@example
	```
	// {
	// 	"name": "some-package",
	// 	"version": "1.0.0",
	// 	"unicorn": {
	// 		"rainbow": true
	// 	}
	// }

	import pkgConf = require('pkg-conf');

	(async () => {
		const config = await pkgConf('unicorn');

		console.log(config.rainbow);
		//=> true
	})();
	```
	*/
	<ConfigType extends pkgConf.Config = pkgConf.Config>(
		namespace: string,
		options?: pkgConf.Options<ConfigType>
	): Promise<ConfigType & pkgConf.Config>;

	/**
	Same as `pkgConf()`, but runs synchronously.

	@param namespace - The `package.json` namespace you want.
	@returns Returns the config.
	*/
	sync<ConfigType extends pkgConf.Config = pkgConf.Config>(
		namespace: string,
		options?: pkgConf.Options<ConfigType>
	): ConfigType & pkgConf.Config;

	/**
	@param config - The `config` returned from any of the above methods.
	@returns The filepath to the `package.json` file or `null` when not found.
	*/
	filepath(config: pkgConf.Config): string | null;

	// TODO: Remove this for the next major release
	default: typeof pkgConf;
};

export = pkgConf;
