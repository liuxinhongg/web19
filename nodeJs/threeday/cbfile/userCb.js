var userC = require("../config/sqlConfig")
class UserCallB = {
	zhuceUser(req, res, next) {
		console.log(req.query); //{ username: 'aa', password: '123456', age: '18' }
		// 关联数据库
		// var user = req.query.username;
		// var pass = req.query.password;
		// var age = req.query.age
		var u = {
			user: req.query.username,
			pass: req.query.password,
			age: req.query.age
		}
		if ((user == "" || user == undefined) && (pass == "" || pass == undefined)) {
			res.send({
				msg: "用户名或密码不能为空",
				code: -1
			})
		}
		// var searchSql="select * from user where username = ?";
		db.query(userC.userinfo.searchname, [u.user], function(result, fileds) {
			if (result.length) {
				res.send({
					msg: "该用户已注册",
					code: 1
				})
			} else {
				// var addSql = "insert into user(username,password,age) values(?,?,?)";
				var addSqlQuery = [u.user, u.pass, u.age];
				db.query(userC.userinfo.userinsert, addSqlQuery, function(result, fileds) {
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
	}
	denglu(req, res, next) {
		var user = req.body.username;
		var pass = req.body.password;
		if (!user && !pass) {
			res.send({
				msg: "用户名或密码不能为空",
				code: -1
			})
		}
		//查询
		db.query(userC.userinfo.searchname, [user], function(result, fileds) {
			if (result.length) {
				if (result[0].password === pass) {
					res.send({
						msg: "登录成功~",
						code: 0
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
	}
}
module.exports = new UserCallB();
