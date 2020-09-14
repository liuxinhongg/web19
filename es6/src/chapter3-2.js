/* Symbol()是函数但是不是对象,不能用new关键字
Symbol()是唯一的,js的第7种数据类型 */
/* {
	let a1=Symbol();
	let a2=Symbol();
	console.log(a1);//Symbol()
	console.log(a2);//Symbol()
	console.log(a1===a2);//false
}
{
	let a1=Symbol("kk");
	let a2=Symbol("kk");
	console.log(a1);//Symbol(kk)
	console.log(a2);//Symbol(kk)
	console.log(a1===a2);//false
} */
// for
/* {
	let a1=Symbol.for("kk");
	let a2=Symbol.for("kk");
	console.log(a1);
	console.log(a2);
	console.log(a1===a2);//true {a1:"kk"}和{a2:"kk"}
} */
// 应用场景
// 1、声明对象的属性
// 通过构造池
/* {
	let a1=Symbol("kk");
	let obj={
		[a1]:111,
		kk:222,
		a1:333
	}
	console.log(obj);//{kk: 222, a1: 333, Symbol(kk): 111}
} */
// 2、声明变量
/* {
	let a1=Symbol("kk");
	let obj={};
	obj[a1]=3;
	console.log(obj);//{ Symbol("kk"):3 }
} */
//Object.defineProperty()
{
	let a1=Symbol("kk");
	let obj={};
	// {value:123}描述器
	// defineProperty(obj,a1,{value:123})
	Object.defineProperty(obj,a1,{value:123});
	console.log(obj);//{Symbol(kk): 123}
}