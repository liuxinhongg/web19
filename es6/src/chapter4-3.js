// map数据映射
{
	const json=[
		{title:"es6",status:1},
		{title:"vue",status:0},
		{title:"node",status:1}
	];
	let video=json.map(function(item){
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
	})
	console.log(json)
	console.log(video)
}
// reduce数组方法
// reduce(function(返回值,currentVal,currentIndex,array){},{}/[])
{
	const letterList="zszaaszszdslzsl";
	let result=letterList.split('').reduce(function(acc,cur){
		// console.log(acc);
		// console.log(cur);
		acc[cur] ? acc[cur]++ : acc[cur]=1
		return acc;
	},{});
	console.log(result);//{z: 5, s: 5, a: 2, d: 1, l: 2}
}
{
	let names = ['tom', 'jim', 'jack', 'tom', 'jack'];
	const countNames = names.reduce((allNames, name) => {
	 if (name in allNames) {
	  allNames[name] ++;
	 }
	 else {
	  allNames[name] = 1;
	 }
	 return allNames;
	}, {});
	 
	console.log(countNames) // { tom: 2, jim: 1, jack: 2 }
}
{
	// 展开数组
	const list=[1,['2nd',2,3,['3rd',4,5]],['2nd',6,7]];
	const deepFlat=function(list){
		// acc返回值,cur当前值
		return list.reduce(function(acc,cur){
			// console.log(acc);
			// console.log(cur);
			return acc.concat(Array.isArray(cur) ? deepFlat(cur) : cur );
		},[])
	}
	let flatlist=deepFlat(list);
	console.log(flatlist);//[1, "2nd", 2, 3, "3rd", 4, 5, "2nd", 6, 7]
}