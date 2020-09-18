"use strict";

// 函数的拓展
{
	// 函数设置默认参数
	var es5Print = function es5Print(x, y) {
		y = y || "world";
		console.log(x + y);
	};
	// es5Print("hello");
	// es5Print("hello", '');//helloworld


	var es6Print = function es6Print(x) {
		var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "world";

		console.log(x + y);
	};

	es6Print("hello");
	es5Print("hello", ''); //helloworld
}
{
	// rest是es6对函数提出的一个拓展
	var add = function add() {
		// rest是一个类数组对象
		var sum = 0;

		for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
			rest[_key] = arguments[_key];
		}

		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = rest[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var value = _step.value;

				sum += value;
			}
			// Array.prototype.method.apply(arguments);
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}

		console.log(sum);
	};

	add(1, 2, 3, 4, 5); //15
	add(1, 2, 3, 4); //10
	add(1, 2, 3, 4, 5, 6, 67, 778, 3, 2); //871
}
{
	var _console;

	(_console = console).log.apply(_console, [1, 2, 3, 4, 5]);
}
{
	// 作用:提高性能,使用递归的时候用尾调用
	var step1 = function step1(x) {
		return step2(x);
	};

	var step2 = function step2(x) {
		console.log("尾调用", x);
	};

	step1(111);
}