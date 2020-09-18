"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// es6类
{
	// es5通过构造含函数来实现类
	// 构造函数和普通函数的区别? 构造函数一般命名的时候开头是大写
	var Person = function Person(name, age) {
		// 通过this进行赋值操作
		this.name = name;
		this.age = age;
	};

	Person.prototype.sayHello = function () {
		console.log("\u5927\u5BB6\u597D,\u6211\u53EB" + this.name + ",\u6211\u4ECA\u5E74" + this.age + "\u5C81\u4E86~");
	};
	var p = new Person("王城", 20);
	p.sayHello();
	console.log(p);
}
//es6 改造es5实现类的方法,类和构造函数本质是一样的
{
	var _Person = function () {
		function _Person(name, age) {
			_classCallCheck(this, _Person);

			this.name = name;
			this.age = age;
		}

		_createClass(_Person, [{
			key: "sayHello",
			value: function sayHello() {
				console.log("\u5927\u5BB6\u597D,\u6211\u53EB" + this.name + ",\u6211\u4ECA\u5E74" + this.age + "\u5C81\u4E86~");
			}
		}]);

		return _Person;
	}();

	var _p = new _Person("张三", 18);
	console.log(_p);
	_p.sayHello();
}
// 类的特点
{
	// 类的继承
	var Parent = function Parent() {
		var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'zs';

		_classCallCheck(this, Parent);

		this.name = name;
	};
	// extends 子继承父
	/* class Child extends Parent {}
 console.log(new Child()); */
	// 子类不写父级的属性


	var Child = function (_Parent) {
		_inherits(Child, _Parent);

		function Child() {
			var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "TM";
			var age = arguments[1];

			_classCallCheck(this, Child);

			var _this = _possibleConstructorReturn(this, (Child.__proto__ || Object.getPrototypeOf(Child)).call(this, name));

			_this.age = age;
			_this.name = name;
			return _this;
		}

		return Child;
	}(Parent);

	console.log(new Child("nhao", 20));
}
// 类具有get和set 属性,看着想方法
{
	var _Person2 = function () {
		function _Person2() {
			var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '武博';

			_classCallCheck(this, _Person2);

			this.name = name;
		}
		// \xa0  


		_createClass(_Person2, [{
			key: "fullName",
			get: function get() {
				return "史" + "\xa0" + this.name;
			}
			//set不能是其他的属性,一定是构造器里面的属性
			,
			set: function set(value) {
				this.name = value;
			}
		}]);

		return _Person2;
	}();

	var _p2 = new _Person2();
	console.log(_p2.fullName);
	_p2.fullName = "依依";
	console.log(_p2.name);
}
// 类添加一个静态的方法
// 静态方法:只能再类的构造函数中去使用,
{
	var _Person3 = function () {
		function _Person3() {
			var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "zahngsan";

			_classCallCheck(this, _Person3);

			this.name = name;
		}

		_createClass(_Person3, null, [{
			key: "sayHello",
			value: function sayHello(obj) {
				// obj:{name:"xiaohua"}
				console.log("\u5927\u5BB6\u597D,\u6211\u53EB" + obj.name);
			}
		}]);

		return _Person3;
	}();

	var per = new _Person3("小花");
	console.log(per); //{name: "小花"}
	_Person3.sayHello(per);
	// per.sayHello()
}
{
	var _Person4 = function _Person4() {
		var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "zhangsan";

		_classCallCheck(this, _Person4);

		this.name = name;
	};

	_Person4.prop = "test";
	console.log(_Person4.prop);
}