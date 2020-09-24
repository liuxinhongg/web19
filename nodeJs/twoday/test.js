const http = require("http");
const server = http.createServer(function(req,res){
	res.setHeader("Content-Type","text/html; charset=utf-8");
	http.get("http://v.juhe.cn/toutiao/index?type=top&key=51fcd598721eb91b390318375bc80922",{},function(res){
		console.log(res.on())
		// res.send(JSON.stringify(res))
		res.on('data',function(data){
			console.log(data)
		})
	})
	res.end()
})
server.listen(3000);
console.log("服务已启动~")