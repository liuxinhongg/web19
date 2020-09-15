'use strict';

// 扩展运算符（spread）是三个点（...）
// 1、复制数组
// 赋值
{
	var list = [1, 2, 3, 4, 5];
	var list2 = [].concat(list);
	console.log(list2);
	list.push(6);
	console.log(list);
}
// 分割数组
{
	var totalList = [1, 'a', 'b', 'c'];
	var strlist = totalList.slice(1);

	console.log(strlist); //['a','b','c']
}
// 将数组转化成参数传递给函数
{
	var fun = function fun(x, y) {
		return x + y;
	};

	var addList = [2, 5];
	console.log(fun.apply(undefined, addList));
}
// 新增API
//1、 fill 用来填充数组，替换数组的方法【全部替换】
{
	var _list = [1, 2, 3, 4, 5];
	var _list2 = [].concat(_list).fill(6);
	console.log(_list2);
	// 部分替换 fill(替换的内容,起始下标,替换的到那块的长度)
	var list3 = [].concat(_list).fill(8, 1, 4);
	console.log(list3); //[1,8,8,8,5]
}
// 2、find()数组中第一个被找到的 ﬁndIndex返回的是查找的下标
{
	var listf = [{ 'title': 'es6' }, { "title": "webpack", id: 2 }, { "title": 'vue' }, { "title": "webpack", id: 3 }];
	var result = listf.find(function (item) {
		return item.title === 'webpack';
	});
	// console.log(result)
	var resultIndex = listf.findIndex(function (item) {
		return item.title === "webpack";
	});
	console.log(resultIndex); //1
}
// 3、includes返回的是Boolean，只能判断一些简单的数据类型
{
	var _list3 = [1, 2, 3, 4, 5];
	var _result = _list3.includes(9);
	// console.log(result);//true
	console.log(_result); //false
}
// 4、flat 展开数组的操作
{
	var _ref;

	var _list4 = [1, 2, ["2nd", 3, 4]];
	// es5展开
	var _result2 = (_ref = []).concat.apply(_ref, _list4);
	// console.log(result);//[1, 2, "2nd", 3, 4]
	// es6
	var flatList = _list4.flat();
	console.log(flatList); //[1, 2, "2nd", 3, 4]
	//以上默认展开一层，怎样展开多层？
	var listF = [1, 2, ["2nd", 3, 4, ["3th", 5, 6]]];
	var resultflat = listF.flat(2);
	console.log(resultflat); //[1, 2, "2nd", 3, 4, "3th", 5, 6]
}