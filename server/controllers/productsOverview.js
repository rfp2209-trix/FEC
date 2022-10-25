require('dotenv').config();
const axios = require('axios');

module.exports = {
  getProduct(req, res) {
    console.log('req received');
    const { product_id } = req.params;
    const URL = `https://app-hrsei-api.herokuapp.com/api/fec2/${process.env.CAMPUS_CODE}/products/${product_id}`;

    const config = {
      headers: {
        Authorization: process.env.AUTH_TOKEN,
      },
    };
    axios.get(URL, config)
      .then((product) => {
        res.status(200).json(product.data);
      });
  },

  getStyles(req, res) {
    //getter for styles based upon a provided product_id/styles
    const { product_id } = req.params;

    const URL = `https://app-hrsei-api.herokuapp.com/api/fec2/${process.env.CAMPUS_CODE}/products/${product_id}/styles`;

    const config = {
      headers: {
        Authorization: process.env.AUTH_TOKEN,
      },
    };

    axios.get(URL, config)
      .then((styles) => {
        res.status(200).json(styles.data);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  },

  getCart(req, res) {
    const URL = `https://app-hrsei-api.herokuapp.com/api/fec2/${process.env.CAMPUS_CODE}/cart`;

    const config = {
      headers: {
        Authorization: process.env.AUTH_TOKEN,
      },
    };

    axios.get(URL, config)
      .then((cartContents) => {
        res.status(200).json(cartContents.data);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  },

  addToCart(req, res) {
    console.log('body---------------------->', req.body);
    const queryData = req.body;

    const URL = `https://app-hrsei-api.herokuapp.com/api/fec2/${process.env.CAMPUS_CODE}/cart`;

    const config = {
      headers: {
        Authorization: process.env.AUTH_TOKEN,
      },
    };
    console.log('querydata', queryData);
    axios.post(URL, queryData, config)
      .then(() => {
        console.log('successful post!');
        res.status(201).send();
      })
      .catch((err) => {
        console.log('from addtocart', err);
        res.sendStatus(501);
      });
  },
};
