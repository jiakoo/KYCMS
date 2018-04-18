
const mongoose =  require('mongoose');
const Column = require('../schemas/column');;

const Column = mongoose.model("Column",Column);
module.exports = Column