require('dotenv').config();
const axios = require('axios');

const config = { headers: { Authorization: process.env.AUTH_TOKEN } };

module.exports = {
  getQuestions(req, res) {
    const { productID } = req.params;

    const questionURL = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions?product_id=${productID}`;

    axios.get(questionURL, config)
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

  getAnswers(req, res) {
    const { questionID } = req.params;

    const answerURL = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${questionID}/answers`;

    axios.get(answerURL, config)
      .then((results) => {
        console.log('init answer query successful', results.data);
        res.send(results.data);
      })
      .catch((err) => {
        console.log('error getting answers from server', err);
        res.status(500).send('Could not get results from server');
      });
  },

  ask(req, res) {
    const questionDetails = req.body;
    console.log(req.body);

    const askURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions';

    axios.post(askURL, questionDetails, config)
      .then(() => {
        res.send('GREAT SUCCESS');
      })
      .catch((err) => {
        console.log('Something went wrong with pOsTiNg', err);
        res.status(400);
        res.send('Could not upload your question to the database');
      });
  },

  answer(req, res) {
    const answerDetails = req.body;
    const { questionID } = req.params;
    console.log('answer details: ', answerDetails);
    console.log('questionID: ', questionID);

    const answerURL = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${questionID}/answers`;

    axios.post(answerURL, answerDetails, config)
      .then(() => {
        res.send('GREAT SUCCESS ANSWERING');
      })
      .catch((err) => {
        console.log(err, 'Could not create answer in DB 😔');
        res.status(400);
        res.send('Could not create answer in DB');
      });
  },

  helpfulQuestion(req, res) {
    const { questionID } = req.params;
    const helpfulURL = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${questionID}/helpful`;

    axios.put(helpfulURL, null, config)
      .then(() => {
        console.log('GREAT SUCCESS');
        res.send(`Successfully incremented helpful rating of ${questionID}`);
      })
      .catch((err) => {
        console.log(err, 'Something went wrong with updating helpfulness');
        res.send('There is an issue with incrementing helpfulness');
      });
  },

  reportQuestion(req, res) {
    const { questionID } = req.params;
    const reportQuestionURL = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${questionID}/report`;

    axios.put(reportQuestionURL, null, config)
      .then(() => {
        console.log('GREAT SUCCESS REPORTING');
        res.send(`Successfully Reported Question ${questionID}!`);
      })
      .catch((err) => {
        console.log(err, 'Could not successfully report question');
        res.send('There was an issue with reporting this question');
      });
  },

  helpfulAnswer(req, res) {
    const { answerID } = req.params;
    const helpfulAnswerURL = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/answers/${answerID}/helpful`;

    axios.put(helpfulAnswerURL, null, config)
      .then(() => {
        console.log('VERY HELPFUL ANSWER!');
        res.send('Successfully declared helpfulness');
      })
      .catch((err) => {
        console.log(err, `Something went wrong with updating helpfulness of answer ${answerID}`);
        res.send(`Could not increment helpfulness rating of ${answerID}`);
      });
  },

  reportAnswer(req, res) {
    const { answerID } = req.params;
    const reportAnswerURL = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/answers/${answerID}/report`;

    axios.put(reportAnswerURL, null, config)
      .then(() => {
        console.log('GREAT SUCCESS - ANSWER REPORTED');
        res.send(`Successfully Reported Answer ${answerID}`);
      })
      .catch((err) => {
        console.log(err, 'Something went wrong with reporting');
        res.send(`Could not successfully report ${answerID}`);
      });
  },
};
