require('dotenv').config();
const models = require('../models')


const URL = `https://app-hrsei-api.herokuapp.com/api/fec2/:${process.env.CAMPUS_CODE}`

module.exports = {
  getProductsOverview: function (req, res) {
    models.productsOverview.getAll((err, data) => {
      if (err){
        console.log(err);
        res.status(400).send()
      }else {
        res.stats(200).send(data);
      }
    })
  }

}
