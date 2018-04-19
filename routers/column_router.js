const express = require('express');
const router = express.Router();
const column = require('../controllers/column');

router.get("/",column.getFirst)
router.get("/columnFrom",column.getFrom)
router.post("/createcolumn",column.createCio)
router.get("/update/:id",column.updateCio)
router.get("/delete",column.deleteCio)
module.exports = router
