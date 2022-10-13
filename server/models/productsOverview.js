const axios = require('axios');
require('dotenv').config()

module.exports = {

  getAll: function (callback){

    const config = {
      headers:{
        Authorization: process.env.API_TOKEN
      }
    }
    axios.get(URL, config)
      .then((response) => {
        callback(null, response)
      })
      .catch(console.log)

  }
}