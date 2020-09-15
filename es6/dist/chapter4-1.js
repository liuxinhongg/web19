'use strict';

{
	var str1 = 'a';
	var str2 = '\u20BB7';
	var str3 = 'a';
	// console.log(str3)//a
	// console.log(str2);//₻7
}
{
	// {}
	var _str = '\uD842\uDFB7';
	// console.log(str1.length);//𠮷 2
}
{
	// for of新增的遍历的方法
	/* const str1="\u{20bb7}";
 console.log(str1)
 for(var i=0;i<str1.length;i++){
 	console.log("str1",str1[i])
 } */
	var _str2 = "hello";
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = _str2[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			// console.log(item);

			var item = _step.value;
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
{
	var str = "wc24";
	console.log("includes", str.includes("wcc"));
	console.log("startsWith", str.startsWith("wc", 4));
	console.log("endsWith", str.endsWith("24", 4));
	var _str3 = "wc";
	console.log(_str3.repeat(3));
}
// 头部补全
{
	var _str4 = "swb";
	_str4 = _str4.padStart(10, "wc");
	console.log(_str4);
}
// 尾部补全
{
	var _str5 = "swb";
	_str5 = _str5.padEnd(1, "zyy");
	console.log(_str5); //swbzyyzyyz
}
// 模板字符串  ` ${变量} `
{
	var name = "zhangsan";
	var age = 19;
	document.write('我叫' + name + ',我今年' + age + '岁了');
	document.write('\u6211\u53EB' + name + ',\u6211\u4ECA\u5E74' + age + '\u5C81\u4E86');
}