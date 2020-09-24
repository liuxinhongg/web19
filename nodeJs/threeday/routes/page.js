var express = require("express");
var router = express.Router()
//设置请求方法和路径
router.get("/sort",function(req,res,next){
	res.send(["111",222])
})
module.exports = router