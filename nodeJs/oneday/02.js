var http = require("http");
// 声明一个变量
var a = 0;
var server= http.createServer(function(req,res){
	a++;
	// res.end()必须输出的是字符串,tostring()
	res.end(a.toString());
})

server.listen(3000);
console.log("服务已启动~")