require('dotenv').config();
const axios = require('axios');

const headers = { Authorization: process.env.AUTH_TOKEN };

module.exports = {
  getMeta: (req, res) => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/${process.env.CAMPUS_CODE}/reviews/meta?product_id=${req.query.product_id}`, { headers })
      .then((apiResponse) => {
        res.status(200).json(apiResponse.data);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  },

  getReviews: (req, res) => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/${process.env.CAMPUS_CODE}/reviews?product_id=${req.query.product_id}`, { headers })
      .then((apiResponse) => {
        res.status(200).json(apiResponse.data);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  },

  postReview: (req, res) => {
  },

  addHelpful: (req, res) => {
  },

  reportReview: (req, res) => {
  }
};

// https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta?product_id=40346