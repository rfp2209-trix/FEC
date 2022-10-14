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

  getAverageReviewRating: (req, res) => {
    const { product_id } = req.params;
    const URL = `https://app-hrsei-api.herokuapp.com/api/fec2/${process.env.CAMPUS_CODE}/reviews/meta?product_id=${product_id}`;
    const config = {
      headers: {
        Authorization: process.env.AUTH_TOKEN,
      },
    };
    axios.get(URL, config)
      .then((reviewsMeta) => {
        let average = 0;
        let count = 0;
        for (let i = 1; i <= 5; i += 1) {
          if (reviewsMeta.data.ratings[i] !== undefined) {
            count += Number(reviewsMeta.data.ratings[i]);
            average += reviewsMeta.data.ratings[i] * i;
          }
        }
        average /= count;
        res.status(200).json(average);
        // for (var i = 0; i < reviewsMeta.data)
      });
  },

  getProductStyle: (req, res) => {
    const { product_id } = req.params;
    const URL = `https://app-hrsei-api.herokuapp.com/api/fec2/${process.env.CAMPUS_CODE}/products/${product_id}/styles`;
    const config = {
      headers: {
        Authorization: process.env.AUTH_TOKEN,
      },
    };
    axios.get(URL, config)
      .then((productImages) => {
        res.status(200).json(productImages.data);
      });
  },
// COOKIES TO SAVE OUTFIT LIST PER USER??? local storage ~~~~
};
