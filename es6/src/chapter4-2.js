// 扩展运算符（spread）是三个点（...）
// 1、复制数组
 // 赋值
{
	const list = [1,2,3,4,5];
	let list2 = [...list];
	console.log(list2)
	list.push(6);
	console.log(list)
}
// 分割数组
{
	const totalList=[1,'a','b','c'];
	let [,...strlist]=totalList;
	console.log(strlist);//['a','b','c']
}
// 将数组转化成参数传递给函数
{
	function fun(x,y){
		return x+y;
	}
	let addList=[2,5];
	console.log(fun(...addList)); 
}
// 新增API
//1、 fill 用来填充数组，替换数组的方法【全部替换】
{
	const list = [1,2,3,4,5];
	let list2 = [...list].fill(6);
	console.log(list2)
	// 部分替换 fill(替换的内容,起始下标,替换的到那块的长度)
	let list3=[...list].fill(8,1,4);
	console.log(list3);//[1,8,8,8,5]
}
// 2、find()数组中第一个被找到的 ﬁndIndex返回的是查找的下标
{
	const listf=[{'title':'es6'},{"title":"webpack",id:2},{"title":'vue'},{"title":"webpack",id:3}];
	let result=listf.find(function(item){
		return item.title==='webpack';
	})
	// console.log(result)
	let resultIndex=listf.findIndex(function(item){
		return item.title==="webpack";
	})
	console.log(resultIndex);//1
}
// 3、includes返回的是Boolean，只能判断一些简单的数据类型
{
	const list = [1,2,3,4,5];
	let result = list.includes(9);
	// console.log(result);//true
	console.log(result);//false
}
// 4、flat 展开数组的操作
{
	let list = [1,2,["2nd",3,4]];
	// es5展开
	let result = [].concat(...list);
	// console.log(result);//[1, 2, "2nd", 3, 4]
	// es6
	let flatList=list.flat();
	console.log(flatList);//[1, 2, "2nd", 3, 4]
	//以上默认展开一层，怎样展开多层？
	let listF = [1,2,["2nd",3,4,["3th",5,6]]];
	let resultflat = listF.flat(2);
	console.log(resultflat);//[1, 2, "2nd", 3, 4, "3th", 5, 6]
}
// filter
// 数组去重
{
	let arr=[1,2,3,4,1,2,4,6,8,6,4,9,5,2];
	let result=arr.filter(function(i,index,item){
		
		/* i 数组每一项的值
		index 每一项的下标
		item 当前的数组 */
		return item.indexOf(i)===index;
	})
	console.log(result);
}
{
	let arr=[1,2,3,4,5,6];
	let result=arr.filter(function(item){
		return item=item>4
	})
	console.log(result);
}
{
	let arr=[
		{name:"zs",age:18},
		{name:"ls",age:20},
		{name:"zs",age:19},
	];
	let result = arr.filter(function(item){
		return item=item.name=='zs';
	})
	console.log(result);
}