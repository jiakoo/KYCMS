const mongoose =  require('mongoose');

//栏目的表结构
const column = new mongoose.Schema({
    //栏目的名称
    name:String,
    parentId:Number,
    orderNo:Number,
    Id:Number,
    Catalog:String
})

module.exports  = column;