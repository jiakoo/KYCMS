const mongoose = require('mongoose');
const contentSchema = require('../schemas/contentSchema');

// 定义模型 
const contentModel = mongoose.model('contentModel', contentSchema);

module.exports = contentModel;