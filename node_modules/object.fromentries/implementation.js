'use strict';

var AddEntriesFromIterable = require('es-abstract/2019/AddEntriesFromIterable');
var CreateDataPropertyOrThrow = require('es-abstract/2019/CreateDataPropertyOrThrow');
var Get = require('es-abstract/2019/Get');
var IsArray = require('es-abstract/2019/IsArray');
var RequireObjectCoercible = require('es-abstract/2019/RequireObjectCoercible');
var ToPropertyKey = require('es-abstract/2019/ToPropertyKey');
var Type = require('es-abstract/2019/Type');

var adder = function addDataProperty(key, value) {
	var O = this; // eslint-disable-line no-invalid-this
	var propertyKey = ToPropertyKey(key);
	CreateDataPropertyOrThrow(O, propertyKey, value);
};

var legacyAssign = function assign(obj, entries) {
	for (var i = 0; i < entries.length; ++i) {
		var entry = entries[i];
		if (Type(entry) !== 'Object') {
			throw new TypeError('iterator returned a non-object; entry expected');
		}

		var key = Get(entry, '0');
		var value = Get(entry, '1');
		var propertyKey = ToPropertyKey(key);
		CreateDataPropertyOrThrow(obj, propertyKey, value);
	}
};

var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';

module.exports = function fromEntries(iterable) {
	RequireObjectCoercible(iterable);

	var obj = {};

	// this part isn't in the spec, it's for a reasonable fallback for pre-ES6 environments
	if (!hasSymbols) {
		if (!IsArray(iterable)) {
			throw new TypeError('this environment lacks native Symbols, and can not support non-Array iterables');
		}
		legacyAssign(obj, iterable);
		return obj;
	}

	return AddEntriesFromIterable(obj, iterable, adder);
};
