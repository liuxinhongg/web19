// 函数的拓展
{
	// 函数设置默认参数
	function es5Print(x,y){
		y = y || "world";
		console.log(x + y);
	}
	// es5Print("hello");
	// es5Print("hello", '');//helloworld
	function es6Print(x,y="world"){
		console.log(x + y);
	}
	es6Print("hello")
	es5Print("hello", '');//helloworld
}
{
	// rest是es6对函数提出的一个拓展
	function add(...rest){
		// rest是一个类数组对象
		let sum=0;
		for(const value of rest){
			sum+=value
		}
		// Array.prototype.method.apply(arguments);
		console.log(sum);
	}
	add(1,2,3,4,5);//15
	add(1,2,3,4);//10
	add(1,2,3,4,5,6,67,778,3,2);//871
}
{
	console.log(...[1,2,3,4,5]);
}
{
	// 作用:提高性能,使用递归的时候用尾调用
	function step1(x){
		return step2(x);
	}
	function step2(x){
		console.log("尾调用",x);
	}
	step1(111);
}