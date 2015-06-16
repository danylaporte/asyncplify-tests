## asyncplify-tests
Common tests for asyncplify operators

## Installation

```bash
npm install asyncplify-tests
```

Execute tests on a asyncplify source
```js
var tests = require('asyncplify-tests');
	
describe('fromArray' function () {
	asyncplify
	    .fromArray([0, 1])
	    .pipe(tests.itShouldClose())
	    .pipe(tests.itShouldEndSync())
	    .pipe(tests.itShouldEmitValues([0, 1]));
});
```

## Documentation

### itShouldClose
Test if the source support closing during iteration.

```js
asyncplify
	.fromArray([0, 1])
	.pipe(tests.itShouldClose());
```

### itShouldEmitValues
Test if the source emit the specified values.
```js
asyncplify
	.fromArray([0, 1])
	.pipe(tests.itShouldEmitValues([0, 1]));
```

### itShouldEndAsync
Test if the source end asynchronously.
```js
asyncplify
	.fromArray([0, 1])
	.pipe(tests.itShouldEndAsync());
// Not OK! fromArray is synchronous
```

### itShouldEndSync
Test if the source end synchronously.
```js
asyncplify
	.fromArray([0, 1])
	.pipe(tests.itShouldEndSync());
```

## License
The MIT License (MIT)

Copyright (c) 2015 Dany Laporte