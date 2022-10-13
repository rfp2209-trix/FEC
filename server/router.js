const router = require('express').Router();
const controllers = require('./controllers');

router.get('/overview', controllers.productsOverview.getProductsOverview);

/*
additional routes
*/

module.exports = router;
