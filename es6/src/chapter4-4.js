{
	// 1、复制对象
	const obj = { name:"zs",video:"es6" };
	let videoObj={...obj};
	console.log(videoObj)
}
{
	// 2、给对象设置默认值
	const obj = { name:"zs",video:"es6" };
	let objmr={...obj,name:"ls"};
	console.log(objmr)
}
{
	// 3、合并对象 
	const obj={ name:"zs",video:"es6" };
	const initObj={ color:"red" };
	let hbObj={...obj,...initObj};
	console.log(hbObj)
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
	console.log(NaN===NaN);//false
	// let result=Object.is(NaN,NaN);//false
	let result=Object.is(1,"1");//false
	console.log(result);//true
}
// 2、Object.assign(目标对象，来源对象) 值赋值
{
	const person={ name:"xm",age:18,info:{ height:185 } };
	let personOther={};
	Object.assign(personOther,person);
	// console.log(personOther)
	person.info.height=170;
	console.log(personOther)
}
// Array.from() //将一个类数组转换成一个真正的数组
// 类数组对象有length属性,可以遍历
{
	const str = "hello";
	const strList = Array.from(str);
	console.log(strList)
}
/* Object.keys() 遍历对象里面的所有的属性名(key值)
Object.values() 遍历对象里面的所有的属性名键值(value)
Object.entries()遍历对象里面的键值对 */
{
	const json = {name:'hello', video:'es6', data:2020};
	let obj = {};
	console.log(Object.keys(json));
	for(let item of Object.entries(json)){
		console.log(item)
	}
}
