import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useProductsContext } from '../Context.jsx';

function QuestionModal({ setCurrentForm }) {
  const { questionsData, loading } = useProductsContext();
  const productID = JSON.parse(questionsData.product_id);

  if (loading) {
    return (
      <span />
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const askName = document.getElementById('askName').value;
    const askEmail = document.getElementById('askEmail').value;
    const askQuestion = document.getElementById('askQuestion').value;
    const dataBody = {
      body: askQuestion,
      name: askName,
      email: askEmail,
      product_id: productID,
    };
    console.log(dataBody);

    axios.post('/fec/ask', dataBody)
      .then(() => {
        console.log('Successfully submitted question');
      })
      .catch(() => {
        console.log('Could not submit question to server');
      });
    setCurrentForm('none');
  };

  return (
    <BackgroundOpacityDiv
      onClick={() => setCurrentForm('none')}
    >
      <QuestionModalContainer
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <form>
          <div name="modal-header">
            <div>Ask A Question</div>
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
          </div>
        </form>
      </QuestionModalContainer>
    </BackgroundOpacityDiv>
  );
}

export default QuestionModal;

const BackgroundOpacityDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  padding: 20px;
  background: rgba(0, 0, 0, 0.5);
  position: fixed
`;

const QuestionModalContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40vh;
  min-heigth: 400px;
  width:60vh;
  min-width: 800px;
  padding: 20px;
  background: #f0fff0;
`;
