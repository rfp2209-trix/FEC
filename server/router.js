const router = require('express').Router();
const controllers = require('./controllers');

// PRODUCT OVERVIEW ROUTES
router.get('/product/:product_id', controllers.productsOverview.getProduct);
router.get('/product/styles/:product_id', controllers.productsOverview.getStyles);
router.get('/cart', controllers.productsOverview.getCart);
router.post('/cart', controllers.productsOverview.addToCart);

/*
  *
  *
  *
  *
  *     Product Overview Routes here
  *
  *
  *
  *
  *
  *
  *
  *
  *
  *
  *
*/

// RELATED AND COMPARISON ROUTES
router.get('/related/:product_id', controllers.relatedComparison.getRelatedItems);

router.get('/productinfo/:product_id', controllers.relatedComparison.getProductInfo);

router.get('/productinfo/:product_id/styles', controllers.relatedComparison.getProductStyle);

router.get('/averageReview/:product_id', controllers.relatedComparison.getAverageReviewRating);

// QA ROUTES
router.get('/questions/:productID', controllers.QAControls.get);
/*
  *
  *
  *    QA Routes here
  *
  *
  *
  *
  *
  *
  *
*/
// RATINGS AND REVIEWS ROUTES
router.get('/reviews/meta', controllers.reviews.getMeta);
router.get('/reviews', controllers.reviews.getReviews);
router.post('/reviews', controllers.reviews.postReview);
router.put('/reviews/:review_id/helpful', controllers.reviews.addHelpful);
router.put('/reviews/:review_id/report', controllers.reviews.reportReview);

module.exports = router;
