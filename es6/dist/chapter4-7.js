'use strict';

// Map Set Array Object 区别[增删改查] 类型转换
//1、增删改查
{
	var array = [];
	var obj = {};
	var map = new Map();
	var set = new Set();
	// 增
	var goodsList = { hobby: 'playing' };
	var goodsSet = { hobby: 'playing' };
	array.push(goodsList);
	obj['hobby'] = "eating";
	map.set("hobby", "swimming");
	set.add(goodsSet);
	// console.log(array,obj,set,map);
	// 查
	var resultArray = array.includes(goodsList);
	var resultObj = "hobby" in obj;
	var resultMap = map.has("hobby");
	var resultSet = set.has(goodsSet);
	// console.log(resultArray,resultObj,resultMap,resultSet);//true true true true
	//修改
	//数组在修改之前要先查询，再修改
	array.forEach(function (item) {
		item.hobby = item.hobby ? "wan" : "";
	});
	obj['hobby'] = "chi";
	set.forEach(function (aa) {
		aa.hobby = aa.hobby ? "set-youyong" : "";
	});
	map.set("hobby", "map-youyong");
	console.log(array, obj, set, map);
	// 删除
	var index = array.findIndex(function (item) {
		return item.hobby;
	});
	array.splice(index, 1);
	delete obj.hobby;
	map.delete("hobby");
	set.delete(goodsSet);
	console.log(array, obj, set, map);
}
// 2、类型转换 数组 <==> set(); 对象 <==> map()
{
	// 2-1 对象 <==> map()
	// 对象转换Map()
	var _obj = {
		name: "zhangsan",
		hobby: "playing"
		// console.log(Object.entries(obj));
	};var _map = new Map(Object.entries(_obj));
	console.log(_map);
	// Map转换为对象
	var obj2 = Object.fromEntries(_map);
	console.log(_obj);
	// 2-2 数组 <==> set()
	// 数组转换为set
	var _array = [1, 2, 3, 4, 5];
	var _set = new Set(_array);
	console.log(_set);
	// set转换为数组
	var array2 = Array.from(_set);
	console.log(array2);
}