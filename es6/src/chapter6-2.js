// 解决回调地狱的办法Promise
/* {
	function ajax(cb){
		setTimeout(()=>{
			//判断回调函数存不存在
			cb && cb()
		},1000)
	}
	ajax(()=>{
		console.log("任务1")
	})
} */
/* {
	// cb:回调函数
	function ajax(cb){
		setTimeout(()=>{
			//判断回调函数存不存在
			cb && cb(()=>{
				console.log("任务2");
			},1000)
		},1000)
	}
	ajax((cb2)=>{
		console.log("任务1");
		setTimeout(()=>{
			cb2 && cb2()
		},1000)
	})
} */
// event loop[事件循环]
// Promise改造回调函数
/* {
	function ajax(){
		// resolve:表示程序执行下一步要执行的函数
		// reject:程序出错要执行的函数
		return new Promise((resolve,reject)=>{
			setTimeout(()=>resolve(),1000)
		})
	}
	// .then()链式回调函数
	ajax().then(()=>{
		console.log("任务1")
	})
} */
/* {
	function ajax(){
		// resolve:表示程序执行下一步要执行的函数
		// reject:程序出错要执行的函数
		return new Promise((resolve,reject)=>{
			setTimeout(()=>resolve(),1000)
		})
	}
	ajax().then(()=>{
		console.log("任务1");
		return new Promise((resolve)=>{
			setTimeout(()=>resolve(),1000)
		})
	}).then(()=>{
		console.log("任务2")
	})
} */
// try--catch
// catch捕获异常
/* {
	function judgeNumber(num){
		return new Promise((resolve,reject) => {
			if(typeof(num) === 'number'){
				resolve(num);
			}else{
				const err= new Error("请输入数字");
				reject(err);
			}
		})
	}
	judgeNumber("2")
		.then(num=>{console.log(num)})
		.catch(err=>console.log(err))
} */
{
	const imgUrl1="./image/cat1.jpg";
	const imgUrl2="./image/catt0.jpg";
	const imgUrl3="./image/cdat0.jpg";
	function getImage(url){
		return new Promise((resolve,reject)=>{
			const img = document.createElement("img");
			img.src = url;
			img.onload= ()=>resolve(img)
			img.onerror= (err)=>reject(err)
			
		})
	}
	function showImage(imgs){
		imgs.forEach(item=>{
			document.body.appendChild(item);
		})
	}
	// Promise.all([getImage(imgUrl1),getImage(imgUrl2),getImage(imgUrl3)]).then(showImage)
	/* */ function showFristImage(img){
		document.body.appendChild(img)
	}
	Promise.race([getImage(imgUrl1),getImage(imgUrl2),getImage(imgUrl3)]).then(showFristImage)
}
