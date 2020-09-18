"use strict";

{
	// proxy代理就是对对象的一些操作  get set has deletpro..
	var account = {
		id: 9923,
		name: "admin",
		phone: "17868875584",
		creat_time: '2019',
		_private: "test"
		// 代理操作, 新建一个代理
	};var accountProxy = new Proxy(account, {
		//拦截读取和设置的操作
		// 拦截读取get方式是一个函数
		get: function get(target, key) {
			//需要将手机号中间四位用*代替；将时间2019改为2020
			switch (key) {
				case "phone":
					return target[key].substring(0, 3) + '****' + target[key].substring(7);
				case "creat_time":
					return target[key].replace("2019", 2020);
				default:
					return target[key];
			}
		},
		// 如果设置id，我就对该属性不进行操作，如果其他我们可以进行操作
		set: function set(target, key, value) {
			if (key === "id") {
				return target[key];
			} else {
				return target[key] = value;
			}
		},
		// 拦截对象里面的in操作 key in obj操作; 使用has(目标对象、属性名)
		has: function has(target, key) {
			if (key in target) {
				console.log("" + key, target[key]);
				return true;
			} else {
				console.log("该对象暂无该属性");
				return false;
			}
		},
		// deleteProperty拦截删除delete操作符,如果这个方法抛出错误或者返回false，当前属性就无法被delete命令删除。
		deleteProperty: function deleteProperty(target, key) {
			if (key.indexOf("_") === 0) {
				console.warn("私有属性不能删除");
				throw new Error("不能删除");
				// return false;
			} else {
				delete target[key];
				return true;
			}
		},
		// ownKeys拦截遍历操作 Obect.keys();
		// 过滤id和开头是_下划线的属性
		ownKeys: function ownKeys(target) {
			return Object.keys(target).filter(function (item) {
				return item !== "id" && item.indexOf("_") !== 0;
			});
		}
	});
	console.log("拦截读取", accountProxy.phone, accountProxy.creat_time);
	accountProxy.id = 1234;
	accountProxy.name = "user";
	console.log("拦截设置", accountProxy.id, accountProxy.name);
	console.log("拦截in", 'name' in accountProxy);
	console.log("拦截in", 'age' in accountProxy);
	// console.error("我是谁")
	// console.log("删除", delete accountProxy["_private"] )
	// console.log("删除name", delete accountProxy.phone )
	console.log("拦截Object.keys()", Object.keys(accountProxy));
}
{
	// Reflect可以直接操作对象
	var obj = {
		name: "zhangsan",
		age: 20,
		sex: "男",
		hobby: "playing"
	};
	console.log(Reflect.get(obj, "hobby"));
	Reflect.set(obj, "name", "lisi");
	console.log(obj.name);
	"name" in obj;
	console.log(Reflect.has(obj, "height"));
}