'use strict';

var trimEnd = require('../');
trimEnd.shim();

var runTests = require('./tests');

var test = require('tape');
var defineProperties = require('define-properties');
var bind = require('function-bind');
var isEnumerable = Object.prototype.propertyIsEnumerable;
var functionsHaveNames = require('functions-have-names')();

test('shimmed', function (t) {
	t.equal(String.prototype.trimEnd.length, 0, 'String#trimEnd has a length of 0');
	t.test('Function name', { skip: !functionsHaveNames }, function (st) {
		st.equal((/^(?:trimRight|trimEnd)$/).test(String.prototype.trimEnd.name), true, 'String#trimEnd has name "trimRight" or "trimEnd"');
		st.end();
	});

	t.test('enumerability', { skip: !defineProperties.supportsDescriptors }, function (et) {
		et.equal(false, isEnumerable.call(String.prototype, 'trimEnd'), 'String#trimEnd is not enumerable');
		et.end();
	});

	var supportsStrictMode = (function () { return typeof this === 'undefined'; }());

	t.test('bad string/this value', { skip: !supportsStrictMode }, function (st) {
		st['throws'](function () { return trimEnd(undefined, 'a'); }, TypeError, 'undefined is not an object');
		st['throws'](function () { return trimEnd(null, 'a'); }, TypeError, 'null is not an object');
		st.end();
	});

	runTests(bind.call(Function.call, String.prototype.trimEnd), t);

	t.end();
});
