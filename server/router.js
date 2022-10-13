const router = require('express').Router();
const controllers = require('./controllers');

// PRODUCT OVERVIEW ROUTE
router.get('/overview', controllers.productsOverview.getProductsOverview);

// QA ROUTE
router.get('/questions/:productID', controllers.QAControls.get);

/*
additional routes
*/

module.exports = router;
