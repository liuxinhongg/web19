let http = require("http");
let url = require("url");
// console.log(url)
let server = http.createServer(function(req,res){
	// console.log(req.url);
	if(req.url=="favicon.ico"){
		return;
	}
	// 主机host 端口8080 path路径 参数 query
	var pathname=url.parse(req.url).pathname
	var query=url.parse(req.url,true).query
	console.log(query.user)
	res.end()
})
server.listen(3000);
console.log("服务已启动~")