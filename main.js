const express = require('express');
const mongoose = require('mongoose');
const app = express();
// 设置端口
app.set('port', process.env.PORT || 3000);
// 设置模板引擎 
app.set('views', './views');
app.set('view engine', 'pug');
// 设置静态资源托管
app.use('/static', express.static('public'));

// 路由
app.get('/', function(req, res) {
	res.render('index');
});

app.listen(app.get('port'), (err) => {
	if(err) {
		console.log('服务器启动失败');
		return false;
	}
	console.log('server running http://10.0.15.31:3000');
});


// git pull --rebase origin master
// git remote rm origin



cannot pull with rebase: You have unstaged changes. please commit or stash them.
