const router = require('express').Router();
const controllers = require('./controllers');

/*
additional routes
*/

router.get('/overview', controllers.productsOverview.getProductsOverview);



// '/reviews' endpoint
router.get('/reviews/meta', controllers.reviews.getMeta);
router.get('/reviews', controllers.reviews.getReviews);
router.post('/reviews', controllers.reviews.postReview);


module.exports = router;
