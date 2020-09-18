// es6类
{
	// es5通过构造含函数来实现类
	// 构造函数和普通函数的区别? 构造函数一般命名的时候开头是大写
	function Person(name,age){
		// 通过this进行赋值操作
		this.name = name;
		this.age = age;
	}
	Person.prototype.sayHello = function(){
		console.log(`大家好,我叫${this.name},我今年${this.age}岁了~`);
	}
	const p = new Person("王城",20);
	p.sayHello()
	console.log(p);
}
//es6 改造es5实现类的方法,类和构造函数本质是一样的
{
	class Person {
		constructor(name,age) {
		    this.name = name;
			this.age = age;
		}
		sayHello(){
			console.log(`大家好,我叫${this.name},我今年${this.age}岁了~`);
		}
	}
	const p = new Person("张三",18);
	console.log(p);
	p.sayHello()
}
// 类的特点
{
	// 类的继承
	class Parent {
		constructor(name = 'zs'){
			this.name = name;
		}
	}
	// extends 子继承父
	/* class Child extends Parent {}
	console.log(new Child()); */
	// 子类不写父级的属性
	class Child extends Parent {
		constructor(name = "TM",age) {
			super(name)
			this.age=age
		    this.name=name
		}
	}
	console.log(new Child("nhao",20))
}
// 类具有get和set 属性,看着想方法
{
	class Person {
		constructor(name='武博') {
		    this.name = name
		}
		// \xa0  
		get fullName(){
			return "史" + "\xa0" +this.name
		}
		//set不能是其他的属性,一定是构造器里面的属性
		set fullName(value){
			this.name=value
		}
	}
	const p = new Person();
	console.log(p.fullName)
	p.fullName="依依";
	console.log(p.name)
}
// 类添加一个静态的方法
// 静态方法:只能再类的构造函数中去使用,
{
	class Person {
		constructor(name = "zahngsan") {
		    this.name=name
		}
		static sayHello(obj){
			// obj:{name:"xiaohua"}
			console.log(`大家好,我叫${obj.name}`);
		}
	}
	const per=new Person("小花");
	console.log(per)//{name: "小花"}
	Person.sayHello(per)
	// per.sayHello()
}
{
	class Person {
		//es7添加静态属性
		static prop = "flower"
		constructor(name="zhangsan") {
		    this.name = name
		}
	}
	// Person.prop="test";//es6静态属性
	console.log(Person.prop)
}