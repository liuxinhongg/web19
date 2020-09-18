{
	// Generator函数
	// yield ==> return
	// function *aa(){}
	const say = function*(){
		yield 's';
		yield 'a';
		yield 'y';
	}
	const fn = say();
	// console.log(fn.next())
	// console.log(fn.next())
	// console.log(fn.next())
	// console.log(fn.next())
}
// 应用场景
{
	let obj = {
		a:1,
		b:2,
		c:3
	} 	
	obj[Symbol.iterator] = function*(){
		for(const key of Object.keys(obj)){
			yield obj[key]
		}
	}
	let fn = obj[Symbol.iterator]();
	// console.log(fn.next())
	// console.log(fn.next())
	// console.log(fn.next())
	// console.log(fn.next())
	for(const value of obj){
		// console.log(value)
	}
}
{
	const state = function*(){
		while(1){
			yield  'success';
			yield  'fail';
			yield  'pending'
		}
	}
	const stateDate = state();
	console.log(stateDate.next())
	console.log(stateDate.next())
	console.log(stateDate.next())
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
	const ajax = function*(){
		console.log("任务开始");
		yield function(cb){
			setTimeout(()=>{
				console.log("异步任务end-ing");
				cb && cb()
			},1000)
		}
		console.log("任务结束")
	}
	const runAjax=ajax();
	const fr=runAjax.next()
	fr.value(()=>runAjax.next())
}