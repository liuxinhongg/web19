var mysql = require("mysql");
var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : 'root',
	port : '3306',
	database:'userinfo'
})
connection.connect()
var updataSql = "update user set username = ? where id=?";
var updataQuery=["依依",1]
connection.query(updataSql,updataQuery,function(err,result){
	if(err){
		console.log("错误",err.message);
		return;
	}
	console.log(result)
})
connection.end()