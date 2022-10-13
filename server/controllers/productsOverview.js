require('dotenv').config();
const axios = require('axios');
require('dotenv').config();

module.exports = {
  getProductsOverview(req, res) {
    // const queryParam = (req.query) ? `?${req.query}` : '';
    const productId = 40345;
    const URL = `https://app-hrsei-api.herokuapp.com/api/fec2/${process.env.CAMPUS_CODE}/products/${productId}`;

    const config = {
      params:{
      },
      headers: {
        Authorization: process.env.AUTH_TOKEN,
      },
    };

    axios.get(URL, config)
      .then((response) => {
        res.status(200).json(response.data);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  },
};
