"use strict";

// map数据映射
{
	var json = [{ title: "es6", status: 1 }, { title: "vue", status: 0 }, { title: "node", status: 1 }];
	var video = json.map(function (item) {
		// console.log(item)
		/* return {
  	name:item.title,
  	statusTxt:item.status ? "已上线" : "未上线"
  } */
		item.status = item.status ? "已上线" : "未上线";
		return item;
		// Object.assign(target,source)将所有可枚举属性的值从一个或者多个源对象复制给目标对象
		/* let obj={};
  Object.assign(obj,item);
  obj.status = item.status ? "已上线" : "未上线";
  return obj */
	});
	console.log(json);
	console.log(video);
}
// reduce数组方法
// reduce(function(返回值,currentVal,currentIndex,array){},{}/[])
{
	var letterList = "zszaaszszdslzsl";
	var result = letterList.split('').reduce(function (acc, cur) {
		// console.log(acc);
		// console.log(cur);
		acc[cur] ? acc[cur]++ : acc[cur] = 1;
		return acc;
	}, {});
	console.log(result); //{z: 5, s: 5, a: 2, d: 1, l: 2}
}
{
	// 展开数组
	var list = [1, ['2nd', 2, 3, ['3rd', 4, 5]], ['2nd', 6, 7]];
	var deepFlat = function deepFlat(list) {
		// acc返回值,cur当前值
		return list.reduce(function (acc, cur) {
			// console.log(acc);
			// console.log(cur);
			return acc.concat(Array.isArray(cur) ? deepFlat(cur) : cur);
		}, []);
	};
	var flatlist = deepFlat(list);
	console.log(flatlist); //[1, "2nd", 2, 3, "3rd", 4, 5, "2nd", 6, 7]
}