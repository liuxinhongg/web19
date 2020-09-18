"use strict";

// 箭头函数
{}
/* function fn(x){
	let x;
}
fn(1); */

// 箭头函数是匿名函数
{
	/* const arrow=function(x){
 	console.log("箭头函数")
 } */
	var arrow = function arrow(x) {
		console.log("箭头函数");
	};
	arrow(1);
}
// 如果箭头函数里面只有一个参数,并且只有一条语句,可以省略() 和 {}
{
	// const  arrow=function(x){ return x+2}
	var _arrow = function _arrow(x) {
		return x + 2;
	};
	console.log(_arrow(2));
}
// 箭头函数不绑定this
{
	var fruit = {
		name: "apple",
		price: 18,
		num: 20,
		sum: function sum() {
			var _this = this;

			// this指向的是window,因为window下面没有price和num属性
			/* setTimeout(function(){
   	console.log(this.price * this.num);//NaN
   },1000) */
			// 因为箭头函数不绑定this,此刻的this绑定的是上一级的fruit作用域
			setTimeout(function () {
				console.log(_this.price * _this.num); //360
			}, 1000);
		}
	};
	fruit.sum();
}