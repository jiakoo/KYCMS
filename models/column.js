
const mongoose =  require('mongoose');

const ColumnS = require('../schemas/column');;
const Column = mongoose.model("Column",ColumnS);

module.exports = Column