const http = require("http");
const db = require("./db.js")
const server = http.createServer(function(req,res){
	res.setHeader("Content-Type","text/html; charset=utf-8");
	db.query("select * from user",[],function(result,fields){
		res.end(JSON.stringify(result) )
	})
})
server.listen(3001);
console.log("服务已启动~")