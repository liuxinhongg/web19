{
	// set()类似数组,但是里面的值不能重复
	// [1]
	let set = new Set();
	set.add(1);
	console.log(set)
	// Object.is()去重,同值相等
	let setIs=new Set(['1',2,3,4,4,5]);
	setIs.add(1);
	console.log(setIs)
	console.log(setIs.size)
	
}
{
	// 判断属性has() 删除属性delete() 清空clear()
	// let obj={
	// 	hobby:"playing"
	// }
	let arr=[{"aa":1},"nhao","hello",3,4]
	let set = new Set(arr);
	/* set.add(obj);
	set.add('info');
	set.add('say'); */
	console.log(set)
	console.log(set.has({aa: 1}));//false
	/*
	 let set = new Set([1,2,3,4]);
	console.log(set.has(6));
	set.delete(3)
	set.clear()
	console.log(set); */
}
/* {
	let arr=[1,2,3,43,4,4,5,3,7];
	let set=new Set(arr);
	console.log(typeof set)
	console.log(Array.from(set))
} */
{
	let set = new Set([1,2,3,43,4,5,7]);
	for(const key of set.entries()){
		// console.log(key)
	}
}
// weakset()
{
	/* let obj={};
	let windows={hobby: "playing"};
	let weakset = new WeakSet();
	weakset.add(windows);
	console.log(weakset.has(windows))
	console.log(weakset) */
	const ws = new WeakSet();
	const obj = {};
	const foo = {};
	
	ws.add(window);
	ws.add(obj);
	
	// console.log(ws.has(window)) ; // true
	/* ws.has(foo);    // false
	
	ws.delete(window);
	ws.has(window); */ 
}