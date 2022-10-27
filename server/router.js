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
router.get('/productinfo/:product_id/styles', controllers.relatedComparison.getProductStyle);
router.get('/averageReview/:product_id', controllers.relatedComparison.getAverageReviewRating);
router.get('/productinfo/:product_id/getallinfo', controllers.relatedComparison.getAllInfo);
router.post('/interactions', controllers.relatedComparison.storeInteraction);

// QA ROUTES
router.get('/questions/:productID', controllers.QAControls.getQuestions);
router.get('/answers/:questionID', controllers.QAControls.getAnswers);
router.post('/ask', controllers.QAControls.ask); // PRODUCT ID GOES IN BODY
router.post('/answer/:questionID', controllers.QAControls.answer);
router.put('/question/helpful/:questionID', controllers.QAControls.helpfulQuestion);
router.put('/question/report/:questionID', controllers.QAControls.reportQuestion);
router.put('/answer/helpful/:answerID', controllers.QAControls.helpfulAnswer);
router.put('/answer/report/:answerID', controllers.QAControls.reportAnswer);

// RATINGS AND REVIEWS ROUTES
router.get('/reviews/meta', controllers.reviews.getMeta);
router.get('/reviews', controllers.reviews.getReviews);
router.post('/reviews', controllers.reviews.postReview);
router.put('/reviews/:review_id/helpful', controllers.reviews.addHelpful);
router.put('/reviews/:review_id/report', controllers.reviews.reportReview);

module.exports = router;
