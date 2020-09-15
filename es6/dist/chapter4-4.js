"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

{
	// 1、复制对象
	var obj = { name: "zs", video: "es6" };
	var videoObj = _extends({}, obj);
	console.log(videoObj);
}
{
	// 2、给对象设置默认值
	var _obj = { name: "zs", video: "es6" };
	var objmr = _extends({}, _obj, { name: "ls" });
	console.log(objmr);
}
{
	// 3、合并对象 
	var _obj2 = { name: "zs", video: "es6" };
	var initObj = { color: "red" };
	var hbObj = _extends({}, _obj2, initObj);
	console.log(hbObj);
}
// 简单的类型可以使用拓展运算符,如果拓展运算符展开对象后还是一个对象,我们复制的只是一个指针
/* {
	let name="zhangsan";
	let age=18;
	// es5
	let es5Obj={
		name:name,
		age:age,
		sayhello:function(){
			console.log("this is es5Obj");
		}
	}
	let es6Obj={
		name,
		age,
		sayhello(){
			console.log("this is es6Obj");
		}
	}
	// console.log(es5Obj);
	console.log(es6Obj);
	// es5Obj.sayhello()
	es6Obj.sayhello()
}
// 2.es6好用的地方
// 我们定义对象的时候可以直接使用变量进行定义
{
	let key="name";//{name:"xiaoming"}
	//es5
	let es5Obj={};
	es5Obj[key]="小明";
	console.log(es5Obj)
	// es6
	let es6Obj={
		[key]:"小明"
	}
	console.log(es6Obj);
} */
// 对象新增方法
// 1、is()判断两个值是否相等 (NaN是true)和===严格等于很类似(NaN是false)
{
	console.log(NaN === NaN); //false
	// let result=Object.is(NaN,NaN);//false
	var result = Object.is(1, "1"); //false
	console.log(result); //true
}
// 2、Object.assign(目标对象，来源对象) 值赋值
{
	var person = { name: "xm", age: 18, info: { height: 185 } };
	var personOther = {};
	Object.assign(personOther, person);
	// console.log(personOther)
	person.info.height = 170;
	console.log(personOther);
}
// Array.from() //将一个类数组转换成一个真正的数组
// 类数组对象有length属性,可以遍历
{
	var str = "hello";
	var strList = Array.from(str);
	console.log(strList);
}
/* Object.keys() 遍历对象里面的所有的属性名(key值)
Object.values() 遍历对象里面的所有的属性名键值(value)
Object.entries()遍历对象里面的键值对 */
{
	var json = { name: 'hello', video: 'es6', data: 2020 };
	var _obj3 = {};
	console.log(Object.keys(json));
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = Object.entries(json)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var item = _step.value;

			console.log(item);
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