const router = require('express').Router();
const controllers = require('./controllers');

router.get('/overview', controllers.productsOverview.getProductsOverview);

// QA ROUTE
router.get('/questions', controllers.questionsControl.get);
/*
additional routes
*/



// '/reviews' endpoint
router.get('/reviews/meta', controllers.reviews.getMeta);
router.get('/reviews', controllers.reviews.getReviews);
router.post('/reviews', controllers.reviews.postReview);


module.exports = router;
