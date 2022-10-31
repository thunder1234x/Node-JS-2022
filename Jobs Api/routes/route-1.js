const router = require('express').Router()

const { products } = require('../controller/testing');

router.route('/products').get(products)

module.exports = router;