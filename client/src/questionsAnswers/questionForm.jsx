import React from 'react';
import axios from 'axios';

function QuestionModal({ productID }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const askName = document.getElementById('askName').value;
    const askEmail = document.getElementById('askEmail').value;
    const askQuestion = document.getElementById('askQuestion').value;
    const dataBody = {
      body: askQuestion,
      name: askName,
      email: askEmail,
      product_id: JSON.parse(productID),
    };
    console.log(dataBody);

    axios.post('/fec/ask', dataBody)
      .then(() => {
        console.log('Successfully submitted question');
      })
      .catch(() => {
        console.log('Could not submit question to server');
      });
  };

  return (
    <form>
      <em>Form for Submitting Questions</em>
      <br />
      Your Nickname
      <br />
      <input name="name" id="askName" size="100" placeholder="Example: Boaty McBoatFace" required />
      <br />
      <br />
      Your Email
      <br />
      <input name="email" id="askEmail" size="100" placeholder="boatymcboatface@google.com" required />
      <br />
      <br />
      Your Question
      <br />
      <input name="question" id="askQuestion" size="100" placeholder="How long does it take to put together this product?" required />
      <br />
      <button type="submit" onClick={handleSubmit}>Submit Question</button>
    </form>
  );
}

export default QuestionModal;
