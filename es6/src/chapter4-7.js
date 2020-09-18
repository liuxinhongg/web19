// Map Set Array Object 区别[增删改查] 类型转换
//1、增删改查
{
	let array=[];
	let obj={};
	let map=new Map();
	let set=new Set();
	// 增
	const goodsList={hobby:'playing'}
	const goodsSet={hobby:'playing'}
	array.push(goodsList);
	obj['hobby'] = "eating";
	map.set("hobby","swimming");
	set.add(goodsSet);
	// console.log(array,obj,set,map);
	// 查
	const resultArray=array.includes(goodsList);
	const resultObj= "hobby" in obj;
	const resultMap=map.has("hobby");
	const resultSet=set.has(goodsSet);
	// console.log(resultArray,resultObj,resultMap,resultSet);//true true true true
	//修改
	//数组在修改之前要先查询，再修改
	array.forEach(function(item){
		item.hobby = item.hobby ? "wan" : "";
	})
	obj['hobby']="chi";
	set.forEach(function(aa){
		aa.hobby = aa.hobby ? "set-youyong" : ""
	})
	map.set("hobby","map-youyong");
	console.log(array,obj,set,map);
	// 删除
	const index = array.findIndex(function(item){
		return item.hobby;
	})
	array.splice(index,1);
	delete obj.hobby;
	map.delete("hobby");
	set.delete(goodsSet);
	console.log(array,obj,set,map);
}
// 2、类型转换 数组 <==> set(); 对象 <==> map()
{
	// 2-1 对象 <==> map()
	// 对象转换Map()
	let obj = {
		name:"zhangsan",
		hobby:"playing"
	}
	// console.log(Object.entries(obj));
	let map = new Map(Object.entries(obj));
	console.log(map)
	// Map转换为对象
	let obj2 = Object.fromEntries(map);
	console.log(obj);
	// 2-2 数组 <==> set()
	// 数组转换为set
	let array = [1,2,3,4,5];
	let set = new Set(array);
	console.log(set);
	// set转换为数组
	let array2 = Array.from(set);
	console.log(array2)
}