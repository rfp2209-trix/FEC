require('dotenv').config();

const axios = require('axios');

module.exports = {
  getRelatedItems: (req, res) => {
    const { product_id } = req.params;
    const URL = `https://app-hrsei-api.herokuapp.com/api/fec2/${process.env.CAMPUS_CODE}/products/${product_id}/related`;
    const config = {
      headers: {
        Authorization: process.env.AUTH_TOKEN,
      },
    };
    axios.get(URL, config)
      .then((result) => {
        res.status(200).json(result.data);
      });
  },

  getProductInfo: (req, res) => {
    const { product_id } = req.params;
    const URL = `https://app-hrsei-api.herokuapp.com/api/fec2/${process.env.CAMPUS_CODE}/products/${product_id}`;
    const config = {
      headers: {
        Authorization: process.env.AUTH_TOKEN,
      },
    };
    axios.get(URL, config)
      .then((productInfo) => {
        res.status(200).json(productInfo.data);
      });
  },
// COOKIES TO SAVE OUTFIT LIST PER USER??? local storage ~~~~
};
