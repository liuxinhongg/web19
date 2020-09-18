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
let a=11;
function fn(){
	console.log("我是export里面的函数");
}
// ....
export default {
	a,
	fn,
}