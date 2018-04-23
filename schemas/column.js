const mongoose =  require('mongoose');

//栏目的表结构
const column = new mongoose.Schema({
    //栏目的名称
    name:String,
    parentId:String,
    orderNo:String,
    Id:String,
    Catalog:String,
    flieImg:String
})

module.exports  = column;