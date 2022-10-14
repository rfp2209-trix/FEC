const router = require('express').Router();
const controllers = require('./controllers');

// PRODUCT OVERVIEW ROUTES
router.get('/overview', controllers.productsOverview.getProductsOverview);

// RELATED AND COMPARISON ROUTES
router.get('/related/:product_id', controllers.relatedComparison.getRelatedItems);

router.get('/productinfo/:product_id', controllers.relatedComparison.getProductInfo);

router.get('/productinfo/:product_id/styles', controllers.relatedComparison.getProductStyle);

router.get('/averageReview/:product_id', controllers.relatedComparison.getAverageReviewRating);

// QA ROUTES
router.get('/questions/:productID', controllers.QAControls.get);

// RATINGS AND REVIEWS ROUTES

/*
additional routes
*/

module.exports = router;
