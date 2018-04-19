const express = require('express');
const contentModel = require('../models/contentModel');
const router = express.Router();
router.get('/', function(req, res) {
	res.render('content');
});

router.post('/setContentHtml', function(req, res) {
	// 拿到 req.body 中的数据 然后保存到数据库中
	// 需要引入 body-parser
	res.json({
		code: 1
	});

	// 保存数据
	var content = new contentModel({
		content: req.body.content
	});

	content.save(function(err) {
		if(err) {
			console.log('保存数据错误:', err);
			return false;
		}
	});

});

router.get('/preview/:id', function(req, res) {
	// 查询数据库
	// 拿到这个 id  然后 去数据库取数据 
	// 最后渲染到页面上


});

router.get('/list', function(req, res) {
	// 查询数据库
	contentModel.find(function(err, obj) {
		if(err) {
			console.log('查询数据库错误', err);
			return false;
		}
		// 查询到数据后 渲染到页面上
		res.render('content_list', {
			contentList: obj
		});
		console.log(obj, '查询到的数据列表');
	});	
});

router.get('/deleteAll', function(req, res) {
	contentModel.remove(function() {
		res.json({
			code: 1
		});
	});
	contentModel.find(function(err, obj) {
		if(err) {
			console.log('查询数据库错误');
			return false;
		}
		console.log('删除后查询到的数据:', obj);
	});
});




module.exports = router;































