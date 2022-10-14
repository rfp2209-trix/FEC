const router = require('express').Router();
const controllers = require('./controllers');

// PRODUCT OVERVIEW ROUTES
router.get('/product/:product_id', controllers.productsOverview.getProduct);
router.get('/product/styles/:product_id', controllers.productsOverview.getStyles);
router.get('/cart', controllers.productsOverview.getCart);
router.post('/cart', controllers.productsOverview.addToCart);

// RELATED AND COMPARISON ROUTES
router.get('/related/:product_id', controllers.relatedComparison.getRelatedItems);

router.get('/productinfo/:product_id', controllers.relatedComparison.getProductInfo);

// QA ROUTES
router.get('/questions/:productID', controllers.QAControls.get);

// RATINGS AND REVIEWS ROUTES

/*
additional routes
*/

module.exports = router;
