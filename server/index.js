const express = require('express');
const path = require('path');
const router = require('./router');

const app = express();
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const logger = (req, res, next) => {
  console.log(`A ${req.method} request was made to the ${req.url} endpoint`);
  if (req.body && Object.keys(req.body).length) {
    console.log(`with a payload of ${JSON.stringify(req.body)}`);
  }
  next();
};
app.use(logger);
app.use('/fec', router);

app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(process.env.PORT || 3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`server listening on ${process.env.PORT || 3000}`);
    console.log('successfully connected');
  }
});
