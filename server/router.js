const router = require('express').Router();
const controllers = require('./controllers');

router.get('/overview', controllers.productsOverview.getProductsOverview);

// QA ROUTE
router.get('/questions', controllers.questionsControl.get);
/*
additional routes
*/

module.exports = router;
