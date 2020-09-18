"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

{
	// Iterator
	var arr = [1, 2, 3, 4, 5];
	// Symbol.iterator遍历器对象,本身就是一个函数,next()
	var fn = arr[Symbol.iterator]();
	/* console.log(fn.next());
 console.log(fn.next());
 console.log(fn.next());
 console.log(fn.next());
 console.log(fn.next());
 console.log(fn.next());
 console.log(fn.next());
 console.log(fn.next());
 console.log(fn.next()); */
}
// 内部解构
{
	var useIte = function useIte(array) {
		var index = 0;
		return {
			next: function next() {
				return index < array.length ? { value: array[index++], done: false } : { value: undefined, done: true };
			}
		};
	};

	var it = useIte(["a", "b", "c"]);
	/* console.log(it.next())
 console.log(it.next())
 console.log(it.next())
 console.log(it.next()) */
}
// Symbol.iterator应用场景
// 原生实现的数据集合有哪些? Array Object String Map Set 函数的arguments对象
// Array.from() 
{
	var aa = _defineProperty({
		color: "red",
		price: 20,
		size: "small"
	}, Symbol.iterator, function () {
		var index = 0;
		var values = Object.values(this);
		return {
			next: function next() {
				if (index < values.length) {
					return {
						value: values[index++],
						done: false
					};
				} else {
					return {
						done: true
					};
				}
			}
		};
	});
	var kk = aa[Symbol.iterator]();
	console.log(kk.next());
	console.log(kk.next());
	console.log(kk.next());
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = aa[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var value = _step.value;

			console.log(value);
		}
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
}