const express = require('express');
const router = express.Router();
const column = require('../controllers/column');

const multer = require('multer');
var upload = multer({ dest: 'public/upload/' });
var type = upload.single('avatar');


router.get("/",column.getFirst)
router.get("/columnFrom",column.getFrom)
router.post("/createcolumn",type,column.createCio)
router.get("/update/:id",column.updateCio)
router.get("/delete",column.deleteCio)
module.exports = router
