'use strict';

{
	// Generator函数
	// yield ==> return
	// function *aa(){}
	var say = /*#__PURE__*/regeneratorRuntime.mark(function say() {
		return regeneratorRuntime.wrap(function say$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.next = 2;
						return 's';

					case 2:
						_context.next = 4;
						return 'a';

					case 4:
						_context.next = 6;
						return 'y';

					case 6:
					case 'end':
						return _context.stop();
				}
			}
		}, say, this);
	});
	var fn = say();
	// console.log(fn.next())
	// console.log(fn.next())
	// console.log(fn.next())
	// console.log(fn.next())
}
// 应用场景
{
	var obj = {
		a: 1,
		b: 2,
		c: 3
	};
	obj[Symbol.iterator] = /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
		var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, key;

		return regeneratorRuntime.wrap(function _callee$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						_iteratorNormalCompletion = true;
						_didIteratorError = false;
						_iteratorError = undefined;
						_context2.prev = 3;
						_iterator = Object.keys(obj)[Symbol.iterator]();

					case 5:
						if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
							_context2.next = 12;
							break;
						}

						key = _step.value;
						_context2.next = 9;
						return obj[key];

					case 9:
						_iteratorNormalCompletion = true;
						_context2.next = 5;
						break;

					case 12:
						_context2.next = 18;
						break;

					case 14:
						_context2.prev = 14;
						_context2.t0 = _context2['catch'](3);
						_didIteratorError = true;
						_iteratorError = _context2.t0;

					case 18:
						_context2.prev = 18;
						_context2.prev = 19;

						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}

					case 21:
						_context2.prev = 21;

						if (!_didIteratorError) {
							_context2.next = 24;
							break;
						}

						throw _iteratorError;

					case 24:
						return _context2.finish(21);

					case 25:
						return _context2.finish(18);

					case 26:
					case 'end':
						return _context2.stop();
				}
			}
		}, _callee, this, [[3, 14, 18, 26], [19,, 21, 25]]);
	});
	var _fn = obj[Symbol.iterator]();
	// console.log(fn.next())
	// console.log(fn.next())
	// console.log(fn.next())
	// console.log(fn.next())
	var _iteratorNormalCompletion2 = true;
	var _didIteratorError2 = false;
	var _iteratorError2 = undefined;

	try {
		for (var _iterator2 = obj[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
			// console.log(value)

			var value = _step2.value;
		}
	} catch (err) {
		_didIteratorError2 = true;
		_iteratorError2 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion2 && _iterator2.return) {
				_iterator2.return();
			}
		} finally {
			if (_didIteratorError2) {
				throw _iteratorError2;
			}
		}
	}
}
{
	var state = /*#__PURE__*/regeneratorRuntime.mark(function state() {
		return regeneratorRuntime.wrap(function state$(_context3) {
			while (1) {
				switch (_context3.prev = _context3.next) {
					case 0:
						if (!1) {
							_context3.next = 9;
							break;
						}

						_context3.next = 3;
						return 'success';

					case 3:
						_context3.next = 5;
						return 'fail';

					case 5:
						_context3.next = 7;
						return 'pending';

					case 7:
						_context3.next = 0;
						break;

					case 9:
					case 'end':
						return _context3.stop();
				}
			}
		}, state, this);
	});
	var stateDate = state();
	console.log(stateDate.next());
	console.log(stateDate.next());
	console.log(stateDate.next());
	// console.log(stateDate.next())
	// console.log(stateDate.next())
	// console.log(stateDate.next())
	// console.log(stateDate.next())
}
/* {
	//长循环  用户支付一笔订单，当用户付款成功，我们就提示，“付款成功，继续购物”，当用户提交订单，但是为付款，我们就隔2秒提醒用户
	function fn1(){
		return new Promise (resolve=>{
			setTimeout(()=>{
				console.log("订单查询中...");
				resolve({code : 0})
			},1000)
		})
	}
	const getState = function*(){
		yield fn1();
	}
	function autoGetStatus(){
		// 得到迭代器
		const gen = getState();
		const status = gen.next() 
		status.value.then(res=>{
			console.log(res);//{code : 0}
			if(res.code==0){
				console.log("用户付款成功~")
			}else {
				console.log("暂无付款");
				setTimeout(()=>{
					autoGetStatus()
				},2000)
			}
		})
	}
	autoGetStatus()
} */
{
	var ajax = /*#__PURE__*/regeneratorRuntime.mark(function ajax() {
		return regeneratorRuntime.wrap(function ajax$(_context4) {
			while (1) {
				switch (_context4.prev = _context4.next) {
					case 0:
						console.log("任务开始");
						_context4.next = 3;
						return function (cb) {
							setTimeout(function () {
								console.log("异步任务end-ing");
								cb && cb();
							}, 1000);
						};

					case 3:
						console.log("任务结束");

					case 4:
					case 'end':
						return _context4.stop();
				}
			}
		}, ajax, this);
	});
	var runAjax = ajax();
	var fr = runAjax.next();
	fr.value(function () {
		return runAjax.next();
	});
}