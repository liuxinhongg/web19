let db = require("./db.js");
/* db.query("select * from user",[],function(result,fileds){
	console.log(result);
}) 
db.query("select * from user where id = ?",[3],function(result,fileds){
	console.log(result)
})*/
db.query("insert into user(username,password,age) values(?,?,?)",["小米","147258","19"],function(result,fileds){
	console.log(result);
})