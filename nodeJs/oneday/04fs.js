var http = require("http");
// fs  system 系统文件模块
var fs= require("fs");
var server=http.createServer(function(req,res){
	res.setHeader("Content-Type","text/html; charset=utf-8");
	res.setHeader("Access-Control-Allow-Origin","*");//解决跨域
	/* fs.readFile("./test.txt",function(err,data){
		if(err){
			console.log("文件读取失败");
			return;
		}
		res.end(data);
	}) */
	
	fs.readFile("./banner.json",function(err,data){
		if(err){
			console.log("读取文件错误");
			return
		}
		res.end(data);
	})
})
server.listen(3000)
console.log("服务已启动~")