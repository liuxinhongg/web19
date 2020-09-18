"use strict";

var _chapter = require("./chapter5-4-2.js");

var _chapter2 = _interopRequireDefault(_chapter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_chapter2.default); // import导入
/* import { a , sayHello , test } from "./chapter5-4-2.js"
console.log(a,test,sayHello) */
/* import * as test from "./chapter5-4-2.js"
console.log(test)
console.log(test.default.a)
console.log(test.default.fn) */

console.log(_chapter2.default.a);
console.log(_chapter2.default.fn);