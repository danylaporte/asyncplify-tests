var assert = require('assert');
var should = require ('should');

module.exports.itShouldClose = function (options) {
	return function (source) {
		it(options && options.title || 'should close', function () {
			source.subscribe().close();
		});

		return source;
	};
};

module.exports.itShouldEmitValues = function (options) {
	return function (source) {
		var expectedValues = Array.isArray(options)
			? options
			: options && options.values;

		it(options && options.title || 'should emit values', function (done) {
			var array = [];

			source.subscribe({
				emit: function (value) {
					array.push(value);
				},
				end: function () {

					if (expectedValues)
						array.should.eql(expectedValues);

					else if (options && options.expectedCount)
						array.length.should.equal(options.expectedCount);

					done();
				}
			});

			return source;
		});
	};
};

module.exports.itShouldEndAsync = function (options) {
	return function (source) {
		it('should end asynchronously', function (done) {
			var called = false;

			source.subscribe({
				end: function (err) {
					if (options && options.error) {
						if (typeof options.error === 'string')
							options.error.should.equal(err);
						else
							assert(err !== null);
					} else {
						assert(err === null);
					}

					called = true;
					setTimeout(done, 0);
				}
			});

			called.should.equal(false);
		});

		return source;
	};
};

module.exports.itShouldEndSync = function (options) {
	return function (source) {
		it('should end synchronously', function (done) {
			var called = false;

			source.subscribe({
				end: function (err) {
					if (options && options.error) {
						if (typeof options.error === 'string')
							options.error.should.equal(err);
						else
							assert(err !== null);
					} else {
						assert(err === null);
					}

					called = true;
				}
			});

			called.should.equal(true);
			done();
		});
		
		return source;
	};
};