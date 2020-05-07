'use strict';
const path = require('path');
const findUp = require('find-up');
const loadJsonFile = require('load-json-file');

const filepaths = new WeakMap();
const filepath = conf => filepaths.get(conf);
const findNextCwd = pkgPath => path.resolve(path.dirname(pkgPath), '..');

const addFilePath = (object, filePath) => {
	filepaths.set(object, filePath);
	return object;
};

const pkgConf = (namespace, options = {}) => {
	if (!namespace) {
		return Promise.reject(new TypeError('Expected a namespace'));
	}

	return findUp('package.json', options.cwd ? {cwd: options.cwd} : {})
		.then(filePath => {
			if (!filePath) {
				return addFilePath(Object.assign({}, options.defaults), filePath);
			}

			return loadJsonFile(filePath).then(package_ => {
				if (options.skipOnFalse && package_[namespace] === false) {
					const newOptions = Object.assign({}, options, {cwd: findNextCwd(filePath)});
					return pkgConf(namespace, newOptions);
				}

				return addFilePath(Object.assign({}, options.defaults, package_[namespace]), filePath);
			});
		});
};

const sync = (namespace, options = {}) => {
	if (!namespace) {
		throw new TypeError('Expected a namespace');
	}

	const filePath = findUp.sync('package.json', options.cwd ? {cwd: options.cwd} : {});

	if (!filePath) {
		return addFilePath(Object.assign({}, options.defaults), filePath);
	}

	const package_ = loadJsonFile.sync(filePath);

	if (options.skipOnFalse && package_[namespace] === false) {
		const newOptions = Object.assign({}, options, {cwd: findNextCwd(filePath)});
		return sync(namespace, newOptions);
	}

	return addFilePath(Object.assign({}, options.defaults, package_[namespace]), filePath);
};

module.exports = pkgConf;
// TODO: Remove this for the next major release
module.exports.default = pkgConf;
module.exports.filepath = filepath;
module.exports.sync = sync;
