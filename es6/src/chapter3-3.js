/* {
	let a,b;
	[a,b] = [1,2];
	// console.log(a,b);//1 2 一一对应
} 
{
	let a,b,c;
	[a,b,c] = [1,2];
	// console.log(a,b,c);//1 2 undefined
} 
{
	let a,b,c;
	[a,b,c=3]=[1,2];
	// console.log(a,b,c);//1 2 3
}
{
	// ...spread语法。拓展运算符，返回的是一个数组
	let a,other;
	[a,...other]=[1,2,3,4,5,6,7];
	console.log(a);
	console.log(other);//[2, 3, 4, 5, 6, 7]
}
{
	let a,b;
	[a,,b]=[1,2,3];
	console.log(a,b);
} */
{
	let a,b;
	({a,b}={a:2,b:3});
	console.log(a,b);
}
{
	let num,total;
	({a:num,b:total}={a:4,b:6})
	console.log(num,total);
}
// 应用场景:
{
	function fn(){
		return {
			name:"zhangsan",
			nameList:[
				{
					name:"lisi"
				}
			]
		}
	}
	let b=fn();
	let { name:person,nameList:[{name:otherperson}] } = b
	// let { name:person,nameList:[{name:otherperson}] } = { name:"zhangsan", nameList:[ { name:"lisi" } ] }
	console.log(person,otherperson);//zhangsan lisi
}