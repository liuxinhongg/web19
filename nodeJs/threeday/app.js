var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expressJWT = require("express-jwt");
var { PRIVATE_KEY } = require("./config/constant");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var pageRouter = require('./routes/page');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
	extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//拦截添加，要放在路由之前
app.use(expressJWT({
	secret: PRIVATE_KEY,
	algorithms:['HS256']
}).unless({
	path: ['/page/register', '/page/login','/page/upload'] //白名单,除了这了写的地址，其他的URL都需要验证
}));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/page", pageRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
	console.log(err)
	if (err.name === 'UnauthorizedError') {
		// 这个需要根据自己的业务逻辑来处理
		res.status(401).send({
			code: -1,
			msg: 'token验证失败'
		});
	} else {
		// set locals, only providing error in development
		res.locals.message = err.message;
		res.locals.error = req.app.get('env') === 'development' ? err : {};

		// render the error page
		res.status(err.status || 500);
		res.render('error');
	}

});
app.all("*", function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "content-type");
	res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
	req.method.toLowerCase() == 'options' ? res.send(200) : next();
});
module.exports = app;
