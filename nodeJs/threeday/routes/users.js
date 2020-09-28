var express = require('express');
var router = express.Router();
// var db = require("../db");
var usercallback=require("../cbfile/userCb")
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/register',usercallback.zhuceUser);
// 登录
router.post("/login",usercallback.denglu)
router.get("/userinfo",function(req,res,next){
	//登录成功后把用户名存到本地localstorage，直接取出来
	var user = req.query.username;
	if(!user){
		res.send({
			msg:"用户名不能为空",
			code:-1
		})
	}
	db.query("select * from user where username = ?",[user],function(result,fileds){
		if(result.length){
			res.send({
				data:result,
				msg:'成功~',
				code:0
			})
		}else{
			res.send({
				msg:"该用户不存在，请输入正确的用户名！",
				code:1
			})
		}
	})
})
router.get('/userUpdate',function(req,res,next){
	var id= req.query.id
	// console.log(typeof parseInt(id))
	var user= req.query.username
	var pass= req.query.password
	var age= req.query.age;
	db.query("update user set username=?,password=?,age=?where id=?",[user,pass,age,parseInt(id)],function(result,fileds){
		res.send({
			msg:'修改成功',
			code:0
		})
	})
})
module.exports = router;
 