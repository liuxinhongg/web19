"use strict";

var i = 2;
for (i; i < 10; i++) {}
console.log(i); //10 内存泄漏
// IIFE 即使调用函数表达式
/* !(function(){
	console.log(b);//undifined
	var b=10;
	//
	var b;
	console.log(b);
	b=10
})() */
// let const 变量或者常量, 就是一个块级作用域
// {}来声明块级作用域
if (true) {
	var a = 4;
}
// console.log(a);//报错
!function () {
	// console.log(b); 暂时性死区
	var b = 10;
}();
/* var a=10;
a=20;
console.log(a);//20 */
{
	var _a = 10;
	// let a=20;
	console.log(_a);
}
{
	var _a2 = 123;
	console.log(_a2);
}