"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/* {
	let a,b;
	[a,b] = [1,2];
	// console.log(a,b);//1 2 一一对应
} 
{
	let a,b,c;
	[a,b,c] = [1,2];
	// console.log(a,b,c);//1 2 undefined
} 
{
	let a,b,c;
	[a,b,c=3]=[1,2];
	// console.log(a,b,c);//1 2 3
}
{
	// ...spread语法。拓展运算符，返回的是一个数组
	let a,other;
	[a,...other]=[1,2,3,4,5,6,7];
	console.log(a);
	console.log(other);//[2, 3, 4, 5, 6, 7]
}
{
	let a,b;
	[a,,b]=[1,2,3];
	console.log(a,b);
} */
{
	var a = void 0,
	    b = void 0;
	var _a$b = { a: 2, b: 3 };
	a = _a$b.a;
	b = _a$b.b;

	console.log(a, b);
}
{
	var num = void 0,
	    total = void 0;
	var _a$b2 = { a: 4, b: 6 };
	num = _a$b2.a;
	total = _a$b2.b;

	console.log(num, total);
}
// 应用场景:
{
	var fn = function fn() {
		return {
			name: "zhangsan",
			nameList: [{
				name: "lisi"
			}]
		};
	};

	var _b = fn();

	var person = _b.name,
	    _b$nameList = _slicedToArray(_b.nameList, 1),
	    otherperson = _b$nameList[0].name;
	// let { name:person,nameList:[{name:otherperson}] } = { name:"zhangsan", nameList:[ { name:"lisi" } ] }


	console.log(person, otherperson); //zhangsan lisi
}