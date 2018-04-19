
const mongoose =  require('mongoose');
// 修改了变量名称 将之前的  Column 修改为 columnSchema 
// 原因 变量名重复 因为 定义 model 时也使用了 Column 这个变量名
const columnSchema = require('../schemas/column');;

const Column = mongoose.model("Column",columnSchema);
module.exports = Column