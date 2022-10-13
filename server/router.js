const router = require('express').Router();
const controllers = require('./controllers');

router.get('/overview', controllers.productsOverview.getProductsOverview);

router.get('/related/:product_id', controllers.relatedComparison.getRelatedItems);

router.get('/productinfo/:product_id', controllers.relatedComparison.getProductInfo)

/*
additional routes
*/

module.exports = router;
