const userconfig={
	userinfo:{
		searchname:`select * from user where username = ?`,
		userinsert:`insert into user(username,password,age) values(?,?,?)`
	}
}
module.exports=userconfig