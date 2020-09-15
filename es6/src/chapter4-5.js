// Map WeakMap()
// Map是es6提供给我们的一个构造函数,本质上是键值对的集合,和对象类似
// Map()只接受数组作为对象,并且数组的成员还是一个数组,其中包含两个元素,一个元素是键,一个是值
// set方法 设置键值对,键可以是各种类型,包含undefined,function
{
	// 1、添加元素 set(k:v)
	let map = new Map();
	map.set([1,2,3],"number");
	console.log(map);
	let map2=new Map([
		["name","xiaoming"],
		["sex","nan"]
	])
	// console.log(map2);
	console.log(map2.size);
	// map2.set("name","zhangsan");
	// console.log(map2)
	// 链式回调 event loop
	map2.set("name","hello").set("hobby",["playing","eating"]).set("info","what");
	console.log(map2);
	// 2、map.get() 读取里面属性里面的值 
	const getmap=map2.get("hobby");//age==undefined
	console.log(getmap)
	// 3、map.has()判断属性是否存在  返回Boolean值
	console.log(map2.has("name"));//true
	// delete删除元素
	map2.delete("info");
	console.log(map2);
}
// 遍历器
// keys() values() entries()
{
	const map = new Map([
		["name","xiaozhan"],
		["age","30"],
		["sex","男"],
		["height","185"]
	])
	console.log(map);
	for(const key of map.keys() ){
		// console.log(key);
	}
	for(const key of map.values()){
		// console.log(key);
	}
	for(const key of map.entries() ){
		// console.log(key);
	}
	map.forEach(function(item,index){
		console.log(index,item)
	})
}
// WeakMap() 只接受一个对象作为键名，不接受其他类型数据作为键名
{
	let weakmap=new WeakMap([
		[{"name":"haha"},"zhangsan"]
	]);
	console.log(weakmap)
	let weakmapPool=new WeakMap([
		[{"ljc":"haha"},"zhangsan"]
	])
	const ljc=document.getElementById("pool");
}