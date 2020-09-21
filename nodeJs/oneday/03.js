var http = require("http");
var server=http.createServer(function(req,res){
	res.setHeader("Content-Type","text/html; charset=utf-8");
	var num = parseInt(Math.random()*999);
	var ips = req.connection.remoteAddress;//访问远程地址
	// console.log(ips);
	if(num===666){
		console.log("中奖用户是："+ips);
		throw new Error("游戏终止！！");
	}
	res.end(num.toString()+"【ips】"+ips);
})
server.listen(3000)
console.log("服务已启动")