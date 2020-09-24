var mysql = require("mysql");
var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : 'root',
	port : '3306',
	database:'userinfo'
})
connection.connect()
// 查询全部(所有)
/* connection.query('select * from user',function(err,result){
	if(err){
		console.log("错误",err.message);
		return;
	}
	console.log(result)
}) */
var mysqladd="select username,password from user where id = 1"
connection.query(mysqladd,function(err,result){
	if(err){
		console.log("错误",err.message);
		return;
	}
	console.log(result)
})
connection.end()