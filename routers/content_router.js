const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();



// 创建 Schema
var contentSchema = mongoose.Schema({
	column: String,
	content: String
});


router.get('/', function(req, res) {

	// 到数据库查询 组成列表页
	res.render('content');
});







module.exports = router;