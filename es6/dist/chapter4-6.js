"use strict";

{
	// set()类似数组,但是里面的值不能重复
	// [1]
	var set = new Set();
	set.add(1);
	console.log(set);
	// Object.is()去重,同值相等
	var setIs = new Set(['1', 2, 3, 4, 4, 5]);
	setIs.add(1);
	console.log(setIs);
	console.log(setIs.size);
}
{
	// 判断属性has() 删除属性delete() 清空clear()
	// let obj={
	// 	hobby:"playing"
	// }
	var arr = [{ "aa": 1 }, "nhao", "hello", 3, 4];
	var _set = new Set(arr);
	/* set.add(obj);
 set.add('info');
 set.add('say'); */
	console.log(_set);
	console.log(_set.has({ aa: 1 })); //false
	/*
  let set = new Set([1,2,3,4]);
 console.log(set.has(6));
 set.delete(3)
 set.clear()
 console.log(set); */
}
/* {
	let arr=[1,2,3,43,4,4,5,3,7];
	let set=new Set(arr);
	console.log(typeof set)
	console.log(Array.from(set))
} */
{
	var _set2 = new Set([1, 2, 3, 43, 4, 5, 7]);
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = _set2.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			// console.log(key)

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
}
// weakset()
{
	/* let obj={};
 let windows={hobby: "playing"};
 let weakset = new WeakSet();
 weakset.add(windows);
 console.log(weakset.has(windows))
 console.log(weakset) */
	var ws = new WeakSet();
	var obj = {};
	var foo = {};

	ws.add(window);
	ws.add(obj);

	// console.log(ws.has(window)) ; // true
	/* ws.has(foo);    // false
 
 ws.delete(window);
 ws.has(window); */
}