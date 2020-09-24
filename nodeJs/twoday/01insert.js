// node链接数据库
var mysql = require("mysql");
var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : 'root',
	port : '3306',
	database:'userinfo'
})
connection.connect()
// 表的插入
// insert into 表名(表字段)values(对应的值)
var addSql = 'insert into user(username,password,age) values("史武博","123456","18")';
// var addSqlParams = ["王城","123456","18"]
connection.query(addSql,function(err,result){
	if(err){
		console.log("添加失败",err.message);
		return;
	}
	console.log(result);
})
connection.end()