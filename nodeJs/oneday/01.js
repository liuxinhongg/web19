// require:表示引用, http内置模块
var http = require("http");
// 创建一个服务器
var server = http.createServer(function(req,res){
	res.setHeader("Content-Type","text/html; charset=utf-8");
	res.end("今天降温了~");
	
})
server.listen(3000);
console.log("服务已启动~")