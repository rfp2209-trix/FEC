const router = require('express').Router();
const controllers = require('./controllers');

// PRODUCT OVERVIEW ROUTE
router.get('/overview', controllers.productsOverview.getProductsOverview);

// QA ROUTE
router.get('/questions/:productID', controllers.QAControls.get);

// REVIEwS ROUTES
router.get('/reviews/meta', controllers.reviews.getMeta);
router.get('/reviews', controllers.reviews.getReviews);
router.post('/reviews', controllers.reviews.postReview);
router.put('/reviews/:review_id/helpful', controllers.reviews.addHelpful);
router.put('/reviews/:review_id/report', controllers.reviews.reportReview);

module.exports = router;
