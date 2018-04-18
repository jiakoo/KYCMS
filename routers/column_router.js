const express = require('express');
const router = express.Router();
const column = require('../controllers/column');

router.get("/column",column.getCio)
router.post("/column",column.createCio)
router.put("/column",column.updateCio)

module.exports = router
