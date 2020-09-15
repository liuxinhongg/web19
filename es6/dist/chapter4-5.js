"use strict";

// Map WeakMap()
// Map是es6提供给我们的一个构造函数,本质上是键值对的集合,和对象类似
// Map()只接受数组作为对象,并且数组的成员还是一个数组,其中包含两个元素,一个元素是键,一个是值
// set方法 设置键值对,键可以是各种类型,包含undefined,function
{
	// 1、添加元素 set(k:v)
	var map = new Map();
	map.set([1, 2, 3], "number");
	console.log(map);
	var map2 = new Map([["name", "xiaoming"], ["sex", "nan"]]);
	// console.log(map2);
	console.log(map2.size);
	// map2.set("name","zhangsan");
	// console.log(map2)
	// 链式回调 event loop
	map2.set("name", "hello").set("hobby", ["playing", "eating"]).set("info", "what");
	console.log(map2);
	// 2、map.get() 读取里面属性里面的值 
	var getmap = map2.get("hobby"); //age==undefined
	console.log(getmap);
	// 3、map.has()判断属性是否存在  返回Boolean值
	console.log(map2.has("name")); //true
	// delete删除元素
	map2.delete("info");
	console.log(map2);
}
// 遍历器
// keys() values() entries()
{
	var _map = new Map([["name", "xiaozhan"], ["age", "30"], ["sex", "男"], ["height", "185"]]);
	console.log(_map);
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = _map.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			// console.log(key);

			var key = _step.value;
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

	var _iteratorNormalCompletion2 = true;
	var _didIteratorError2 = false;
	var _iteratorError2 = undefined;

	try {
		for (var _iterator2 = _map.values()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
			// console.log(key);

			var _key = _step2.value;
		}
	} catch (err) {
		_didIteratorError2 = true;
		_iteratorError2 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion2 && _iterator2.return) {
				_iterator2.return();
			}
		} finally {
			if (_didIteratorError2) {
				throw _iteratorError2;
			}
		}
	}

	var _iteratorNormalCompletion3 = true;
	var _didIteratorError3 = false;
	var _iteratorError3 = undefined;

	try {
		for (var _iterator3 = _map.entries()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
			// console.log(key);

			var _key2 = _step3.value;
		}
	} catch (err) {
		_didIteratorError3 = true;
		_iteratorError3 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion3 && _iterator3.return) {
				_iterator3.return();
			}
		} finally {
			if (_didIteratorError3) {
				throw _iteratorError3;
			}
		}
	}

	_map.forEach(function (item, index) {
		console.log(index, item);
	});
}
// WeakMap() 只接受一个对象作为键名，不接受其他类型数据作为键名
{
	var weakmap = new WeakMap([[{ "name": "haha" }, "zhangsan"]]);
	console.log(weakmap);
	var weakmapPool = new WeakMap([[{ "ljc": "haha" }, "zhangsan"]]);
	var ljc = document.getElementById("pool");
}