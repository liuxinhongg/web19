var mysql = require("mysql");
var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : 'root',
	port : '3306',
	database:'userinfo'
})
connection.connect()
connection.query('delete from user where username= "依依"',function(err,result){
	if(err){
		console.log("错误",err.message);
		return;
	}
	console.log(result)
});
connection.end()