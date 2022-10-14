require('dotenv').config();
const axios = require('axios');
const path = require('path');

const headers = { Authorization: process.env.AUTH_TOKEN };

module.exports = {
  getMeta: (req, res) => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/${process.env.CAMPUS_CODE}/reviews/meta`, { headers, params: req.query })
      .then((apiResponse) => {
        res.status(200).json(apiResponse.data);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  },

  getReviews: (req, res) => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/${process.env.CAMPUS_CODE}/reviews`, { headers, params: req.query })
      .then((apiResponse) => {
        res.status(200).json(apiResponse.data);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  },

  postReview: (req, res) => {
    axios({
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/${process.env.CAMPUS_CODE}/reviews`,
      headers,
      method: 'post',
      data: req.body
    })
      .then(() => {
        res.sendStatus(201);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  },

  addHelpful: (req, res) => {
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/${process.env.CAMPUS_CODE + req.url}`, {}, { headers })
      .then(() => {
        console.log('succuess');
        res.sendStatus(204);
      })
      .catch((err) => {
        console.log(err)
        res.sendStatus(500);
      });
  },

  reportReview: (req, res) => {
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/${process.env.CAMPUS_CODE + req.url}`, {}, { headers })
      .then(() => {
        console.log('succuess');
        res.sendStatus(204);
      })
      .catch((err) => {
        console.log(err)
        res.sendStatus(500);
      });
  }
};

// https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta?product_id=40346