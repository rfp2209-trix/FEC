const express = require('express');
const path = require('path');
const routes = require('./router.js');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const logger = (req, res, next) => {
  console.log(`A ${req.method} request was made to the ${req.url} endpoint`);
  if(req.body && Object.keys(req.body).length) {
    console.log(`with a payload of ${JSON.stringify(req.body)}`);
  }
  next();
};

app.use('/fec', routes);
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(logger);

app.listen(process.env.PORT || 3000, (err, success) => {
  if (err) {
    console.log(err)
  } else {
    console.log(`server listening on ${process.env.ROOT || 3000}`)
  }
})
