/* {
	// 0 0o 0O开头 8进制
	console.log(0o11);
	console.log(0O123);//3*8^0+2*8^1+1*8^2=83
	console.log(08);//8
	// console.log(0o8);//报错
} */
/* {
	// 0x 0X 16进制
	console.log(0X15);//21
	console.log(0b1111)//16
}
{
	console.log(Number.isFinite(12))//true
	console.log(Number.isFinite(Infinity))//false
	console.log(Number.isFinite(-Infinity))//false
	console.log(Number.isFinite(-13))//true
	console.log(1/0);//Infinity  0.000000000000000000000000000000000000000000000000001
	console.log(Infinity/Infinity)//NaN
	console.log(1/Infinity)
	console.log(Math.sqrt(81))//9
	console.log(Math.sign(5));//1
	console.log(Math.sign(-5));//-1
	console.log(Math.sign(0));//0
} */
{
	// 负性:0 false nul undefined "" NaN
	// 正性:剩余
	/* 或:a||b
	 a为正性 输出a;a为负性 输出 */
	// console.log(undefined||"你好");//123
	/* a与&& a&&b
	a为正性直接输出b;a为负性直接输出 */
	// console.log(1&&NaN);
}