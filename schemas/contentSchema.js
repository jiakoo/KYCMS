// 引入 mongoose
const mongoose = require('mongoose');
// 定义一个 schema
const Schema = mongoose.Schema;

// 实例化一个 schema
const contentSchema = new Schema({
	content: String
});

module.exports = contentSchema;
