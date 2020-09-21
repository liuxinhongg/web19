let http = require("http");
let fs=require("fs");
let server=http.createServer(function(req,res){
	res.setHeader("Content-Type","text/html; charset=utf-8");
	if(req.url==='/favicon.ico'){
		return;
	}
	if(req.url==="/aa"){
		fs.readFile("./test.txt",function(err,data){
			if(err){
				console.log("读取文件失败~");
				return;
			}
			res.end(data);
		})
	}else if(req.url==="/bb"){
		fs.readFile("./banner.json",function(err,data){
			if(err){
				console.log("读取文件失败~");
				return;
			}
			res.end(data);
		})
	}else{
		res.end("who are you?")
	}
})
server.listen(3000)
console.log("程序已启动~")