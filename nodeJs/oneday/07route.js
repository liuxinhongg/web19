//用户访问   /student/1234567890 查询学生的信息
// 用户访问   /teacher/121212 查询老师信息
let http=require("http");
// let url= require("url");
let server=http.createServer(function(req,res){
	res.setHeader("Content-Type","text/html; charset=utf-8");
	if(req.url==='/favicon.ico'){
		return;
	}
	var userurl=req.url;
	if(userurl.substr(0,9)==="/student/"){
		var studentid=userurl.substr(9);
		if(/^\d{10}$/.test(studentid)){
			res.end("你所查询的学生信息，id是"+studentid);
		}else{
			res.end("你所查询的学生信息错误，id是"+studentid);
		}
	}
	// teacher
})
server.listen(3000)
console.log("服务已启动~")