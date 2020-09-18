"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
// export 导出变量 
/* export let a = 3;
export function sayHello(){
	console.log("hello world")
}
export class test {
	say(){
		console.log("test")
	}
} */
// 如果我们导出的模块比较多,上面的方法比较笨
var a = 11;
function fn() {
	console.log("我是export里面的函数");
}
// ....
exports.default = {
	a: a,
	fn: fn
};