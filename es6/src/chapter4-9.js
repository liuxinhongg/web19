{
	// 获取dom元素
	const inputObj=document.getElementById("oInput");
	const txtObj=document.getElementById("txt");
	// 初始化代理对象
	const obj={};
	// 配置代理的选项
	const handler={
		get(target,key){
			return Reflect.get(target,key)
		},
		set(target,key,value){
			if(key==="text"){
				// 数据双向绑定的条件判断
				inputObj.value = inputObj.value==value ? inputObj.value : value
				txtObj.innerHTML=value
			}
			return Reflect.set(target,key,value);
		}
	}
	// 吧对象放到代理池
	let objProxy=new Proxy(obj,handler);
	inputObj.addEventListener("keyup",function(e){
		// console.log(e.target.value)
		objProxy.text=e.target.value;
	})
	objProxy.text=1111
}