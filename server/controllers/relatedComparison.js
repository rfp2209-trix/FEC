require('dotenv').config();

const axios = require('axios');

module.exports = {
  getAllInfo: (req, res) => {
    const allReqs = [];
    const { product_id } = req.params;
    let allInfo = {};
    allReqs.push(
      axios.get(`http://localhost:3000/FEC/productinfo/${product_id}`),
      axios.get(`http://localhost:3000/FEC/averagereview/${product_id}`),
      axios.get(`http://localhost:3000/FEC/productinfo/${product_id}/styles`),
    );
    Promise.all(allReqs)
      .then((allReqsResponse) => {
        allInfo = Object.assign(
          allReqsResponse[0].data,
          allReqsResponse[1].data,
          allReqsResponse[2].data,
        );
        res.status(200).json(allInfo);
      });
  },

  getRelatedItems: (req, res) => {
    const relatedProductInfo = [];
    const AxiosReq = [];
    const { product_id } = req.params;
    const URL = `https://app-hrsei-api.herokuapp.com/api/fec2/${process.env.CAMPUS_CODE}/products/${product_id}/related`;
    const config = {
      headers: {
        Authorization: process.env.AUTH_TOKEN,
      },
    };
    axios.get(URL, config)
      .then((result) => {
        const relatedProductIDs = result.data.slice();
        for (let i = 0; i < relatedProductIDs.length; i += 1) {
          AxiosReq.push(axios.get(`http://localhost:3000/FEC/productinfo/${relatedProductIDs[i]}/getallinfo`));
        }
        Promise.all(AxiosReq)
          .then((AxiosRes) => {
            for (let i = 0; i < AxiosRes.length; i += 1) {
              relatedProductInfo.push(AxiosRes[i].data);
            }
            res.status(200).json(relatedProductInfo);
          });
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
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
        const result = {};
        let average = 0;
        let count = 0;
        for (let i = 1; i <= 5; i += 1) {
          if (reviewsMeta.data.ratings[i] !== undefined) {
            count += Number(reviewsMeta.data.ratings[i]);
            average += reviewsMeta.data.ratings[i] * i;
          }
        }
        average /= count;
        average = average.toFixed(2);
        result.averageRating = average;
        res.status(200).json(result);
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
