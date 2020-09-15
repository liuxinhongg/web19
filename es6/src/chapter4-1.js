{
	const str1='a';
	const str2='\u20bb7';
	const str3="\u0061";
	// console.log(str3)//a
	// console.log(str2);//₻7
}
{
	// {}
	const str1="\u{20bb7}";
	// console.log(str1.length);//𠮷 2
}
{
	// for of新增的遍历的方法
	/* const str1="\u{20bb7}";
	console.log(str1)
	for(var i=0;i<str1.length;i++){
		console.log("str1",str1[i])
	} */
	const str1="hello"
	for(let item of str1 ){
		// console.log(item);
	}
}
{
	let str="wc24";
	console.log("includes",str.includes("wcc"));
	console.log("startsWith",str.startsWith("wc",4));
	console.log("endsWith",str.endsWith("24",4));
	let str1="wc";
	console.log(str1.repeat(3));
}
// 头部补全
{
	let str="swb";
	str=str.padStart(10,"wc");
	console.log(str);
}
// 尾部补全
{
	let str="swb";
	str=str.padEnd(1,"zyy");
	console.log(str);//swbzyyzyyz
}
// 模板字符串  ` ${变量} `
{
	let name="zhangsan";
	let age=19;
	document.write( '我叫'+name+',我今年'+age+'岁了');
	document.write(`我叫${name},我今年${age}岁了`);
}