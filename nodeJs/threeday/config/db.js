var mysql = require("mysql");
//创建一个mysql的资源池 pool 池
var pool = mysql.createPool({
	host:"localhost",
	user:"root",
	password:"root",
	port:"3306",
	database:"userinfo"
})
exports.query = function(sql,arr,callback){
	// 建立链接
	pool.getConnection(function(err,connection){
		if(err) {throw err;return}
		connection.query(sql,arr,function(error,results,fileds){
			//将链接返回到连接池，让其他人重复使用
			connection.release()
			if(error) throw error;
			// 执行回调函数，将数据返回
			callback && callback(results,fileds)
		})
	})
}