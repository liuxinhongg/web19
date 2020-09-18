"use strict";

// async 异步编程
{
	// function * name(){yield shuxing }
	var fn1 = async function fn1() {
		await console.log(1);
		await console.log(2);
		await console.log(3);
	};

	fn1();
}

// 实现过程
{
	var _fn = function _fn() {
		setTimeout(function () {
			console.log("任务1");
		}, 1000);
	};

	var fn2 = function fn2() {
		setTimeout(function () {
			console.log("任务2");
		}, 1000);
	};

	var fn3 = function fn3() {
		setTimeout(function () {
			console.log("任务3");
		}, 1000);
	};

	var init = function init() {
		_fn();
		fn2();
		fn3();
	};
	// init()

}
// 包装成promise函数
{
	var _fn2 = function _fn2() {
		return new Promise(function (resolve) {
			setTimeout(function () {
				console.log("任务1");
				resolve();
			}, 1000);
		});
	};

	var _fn3 = function _fn3() {
		return new Promise(function (resolve) {
			setTimeout(function () {
				console.log("任务2");
				resolve();
			}, 1000);
		});
	};

	var _fn4 = function _fn4() {
		return new Promise(function (resolve) {
			setTimeout(function () {
				console.log("任务3");
				resolve();
			}, 1000);
		});
	};
	// await 要遇到resolve()才会往下执行


	var _init = async function _init(fn1, fn2, fn3) {
		await fn1();
		await fn2();
		await fn3();
	};

	_init(_fn2, _fn3, _fn4);
}