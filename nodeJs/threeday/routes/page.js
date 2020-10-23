var express = require("express");
var router = express.Router()
let db=require('../config/db.js')
const {PWD_SALT,PRIVATE_KEY,EXPIRESD} = require("../config/constant.js");
const {md5,upload}=require("../config/methods.js")
const jswt=require("jsonwebtoken")
//上传用户图像
// var multer  = require('multer')
// var upload = multer({ dest: 'uploads/' })
//设置请求方法和路径
router.post("/register",function(req, res, next) {
		var u = {
			user: req.body.username,
			pass: req.body.password,
			age: req.body.age,
			nick: req.body.nick,
		}
		if ((u.user == "" || u.user == undefined) && (u.pass == "" || u.pass == undefined)) {
			res.send({
				msg: "用户名或密码不能为空",
				code: -1
			})
		}
		var searchSql="select * from user where username = ?";
		db.query(searchSql, [u.user], function(result, fileds) {
			if (result.length) {
				res.send({
					msg: "该用户已注册",
					code: 1
				})
			} else {
				// 做一个添加的处理,这里的密码需要进行加密,加密之后存储到我们的数据库
				// 我们需要安装一个crypto插件 cnpm i crypto -S
				// 在这里我们需要写一个方法,实现加密的方法,再constant.js放入一下方法
				u.pass=md5(`${u.pass}${PWD_SALT}`);
				console.log(u.pass)
				var addSql = "insert into user(username,password,age,nick) values(?,?,?,?)";
				var addSqlQuery = [u.user, u.pass, u.age,u.nick];
				db.query(addSql, addSqlQuery, function(result, fileds) {
					if (fileds) {
						throw fileds;
						return;
					}
					res.send({
						msg: "注册成功！",
						code: 0,
						data: result
					})
				})
			}
		})
	})
// 登录
router.post("/login",function(req, res, next) {
	var user = req.body.username;
	var pass = req.body.password;
	if (!user && !pass) {
		res.send({
			msg: "用户名或密码不能为空",
			code: -1
		})
	}
	//查询
	db.query('select * from user where username = ?', [user], function(result) {
		console.log(result[0])
		if (result.length) {
			// 首先要确保用户存在,这样我们就可以生成一个token,再constant.js进行配置
			pass=md5(`${pass}${PWD_SALT}`);
			// 当我们输入的密码和加密的密码相一致的时候,生成token
			if (result[0].password == pass) {
				console.log(111);
				// 生成token jswt.sign({user},密钥，过期时间)
				let token = jswt.sign({user},PRIVATE_KEY,{expiresIn:EXPIRESD});
				res.send({
					token:token,
					code:0,
					msg:'登录成功~'
				})
			} else {
				res.send({
					msg: "密码输入错误~",
					code: 1
				})
			}
		} else {
			res.send({
				msg: "用户名不存在，请注册",
				code: 2
			})
		}
	})
})
// 获取用户信息
/**/
router.get('/userinfo',function(req,res,next){
 let username = req.query.username;
 // console.log(req.query)
 // res.send("userinfo")
 // 在这块我们获取用户信息不能将用户的密码暴露出去,username,age,nick,head_img
 /* */
 db.query("select username,nick,head_img from user where username = ?",[username],function(result){
	 res.send({
		data:result[0],
		code:0,
		msg:'success'
	 })
 }) 
})
// 用户头像上传
router.post('/upload',upload.single('head_img'),function(req,res,next)  {
 // console.log(req.file)
 let imgPath = req.file.path.split('public')[1]
 let imgUrl = 'http://127.0.0.1:3030'+imgPath
 res.send({code:0,msg:'上传成功',data:imgUrl})
})
// 用户信息更新[需要穿token]
router.post('/updateuser',function(req,res,next)  {
	console.log(req)
	let {nick,head_img,username} = req.body;
	db.query('update user set nick = ?,head_img = ?where username = ?',[nick,head_img,username],function(result){
		console.log(result)
		 res.send({code:0,msg:'更新成功',data:null})
	})
})
module.exports = router