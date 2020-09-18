{
	// Iterator
	const arr = [1,2,3,4,5];
	// Symbol.iterator遍历器对象,本身就是一个函数,next()
	const fn = arr[Symbol.iterator]();
	/* console.log(fn.next());
	console.log(fn.next());
	console.log(fn.next());
	console.log(fn.next());
	console.log(fn.next());
	console.log(fn.next());
	console.log(fn.next());
	console.log(fn.next());
	console.log(fn.next()); */
}
// 内部解构
{
	function useIte(array){
		var index = 0;
		return {
			next(){
				return index < array.length ? { value : array[index++],done : false } : { value : undefined,done : true }
			}
		}
	}
	let it = useIte(["a","b","c"]);
	/* console.log(it.next())
	console.log(it.next())
	console.log(it.next())
	console.log(it.next()) */
}
// Symbol.iterator应用场景
// 原生实现的数据集合有哪些? Array Object String Map Set 函数的arguments对象
// Array.from() 
{
	const aa = {
		color : "red",
		price : 20,
		size : "small",
		[Symbol.iterator](){
			let index = 0;
			const values = Object.values(this);
			return {
				next(){
					if(index < values.length){
						return {
							value : values[index++],
							done : false
						}
					}else{
						return {
							done : true
						}
					}
				}
			}
		}
	}
	let kk = aa[Symbol.iterator]();
	console.log(kk.next())
	console.log(kk.next())
	console.log(kk.next())
	for(const value of aa){
		console.log(value)
	}
	
}
