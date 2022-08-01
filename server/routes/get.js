const express = require('express');
const router = express.Router();

const get = require('../controllers/get');

router.get('/products',get.getProducts);


module.exports = router;
