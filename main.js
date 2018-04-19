const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
// 设置端口
app.set('port', process.env.PORT || 3000);
// 设置模板引擎 
app.set('views', './views');
app.set('view engine', 'pug');
// 设置静态资源托管
app.use('/static', express.static('public'));


//post解析
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// 首页路由
app.get('/', function(req, res) {
	res.render('index');
});


app.use('/admin/column', require('./routers/column_router'));
// app.get('/admin/column', require('./routers/column_router'));
app.use('/admin/content', require('./routers/content_router'));


// 连接数据库
// http://10.0.15.33:27017/
mongoose.connect('mongodb://10.0.15.33:27017/cms', function(err) {
	if(err) {
		console.log('链接数据库失败');
		return false;
	}
	console.log('链接数据库成功');
});

app.listen(app.get('port'), (err) => {
	if(err) {
		console.log('服务器启动失败');
		return false;
	}
	console.log('server running http://10.0.15.31:3000');
});
