require('dotenv').config();
const axios = require('axios');

module.exports = {
  get(req, res) {
    const { productID } = req.params;

    const URLinstance = `https://app-hrsei-api.herokuapp.com/api/fec2/:hr-rfp/qa/questions?product_id=${productID}`;

    const config = { headers: { Authorization: process.env.AUTH_TOKEN } };

    axios.get(URLinstance, config)
      .then((results) => {
        console.log('get successful ', results.data);
        res.send(results.data);
      })
      .catch((err) => {
        console.log('there was an issue getting from API', err);
        res.status(500);
        res.send('Something went wrong, interal server error');
      });
  },
};
