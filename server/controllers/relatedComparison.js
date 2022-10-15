require('dotenv').config();

const axios = require('axios');

module.exports = {
  getRelatedItems: (req, res) => {
    const relatedProductInfo = [];
    let relatedProductIDs;
    const relatedProductRatings = [];
    const productStyleInfo = [];
    const { product_id } = req.params;
    const URL = `https://app-hrsei-api.herokuapp.com/api/fec2/${process.env.CAMPUS_CODE}/products/${product_id}/related`;
    const config = {
      headers: {
        Authorization: process.env.AUTH_TOKEN,
      },
    };
    axios.get(URL, config)
      .then((result) => {
        relatedProductIDs = result.data.slice();
        const allAxiosReq = [];
        relatedProductIDs.forEach((item) => {
          allAxiosReq[allAxiosReq.length] = axios.get(`http://localhost:3000/FEC/productinfo/${item}`);
          allAxiosReq[allAxiosReq.length] = axios.get(`http://localhost:3000/FEC/averagereview/${item}`);
          allAxiosReq[allAxiosReq.length] = axios.get(`http://localhost:3000/FEC/productinfo/${item}/styles`);
        });
        Promise.all(allAxiosReq)
          .then((responses) => {
            responses.forEach((item) => {
              if (typeof (item.data) === 'number' || typeof (item.data) === 'string') {
                relatedProductRatings.push(item.data);
              }
              if (item.data.product_id !== undefined) {
                productStyleInfo.push(item.data);
              } else if (item.data.id !== undefined) {
                console.log('here', item.data)
                relatedProductInfo.push(item.data);
              }
            });
            //workign here
            for (let i = 0; i < relatedProductInfo.length; i += 1) {
              relatedProductInfo[i].averageRating = relatedProductRatings[i];
              relatedProductInfo[i].styles = productStyleInfo[i];
            }
            console.log('rel', relatedProductInfo)
            res.status(200).json(relatedProductInfo);
          })
          .catch((err) => {
            console.log(err);
            res.sendStatus(500);
          });
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
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
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
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
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
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  },
  // COOKIES TO SAVE OUTFIT LIST PER USER??? local storage ~~~~
};
