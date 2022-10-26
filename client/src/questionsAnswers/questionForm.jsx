import React from 'react';
import axios from 'axios';
import { useProductsContext } from '../Context.jsx';
import { DarkBG, ModalContainer } from './background.style.js';

function QuestionModal({ setCurrentForm }) {
  const { questionsData, productsInfo, loading } = useProductsContext();
  const productID = JSON.parse(questionsData.product_id);

  if (loading) {
    return (
      <span />
    );
  }
  console.log('productsInfo inside of questioNForm', productsInfo);
  const dataBody = {
    body: null,
    name: null,
    email: null,
    product_id: productID,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const warning = Object.keys(dataBody).filter((each) => dataBody[each] === null);
    if (warning[0] === 'body') {
      alert('You did not write a question');
    } else if (warning[0] === 'name') {
      alert('Nickname is required');
    } else if (warning[0] === 'email') {
      alert('Email is required');
    } else {
      axios.post('/fec/ask', dataBody)
        .then(() => {
          console.log('Successfully submitted question');
        })
        .catch(() => {
          console.log('Could not submit question to server');
        });
      setCurrentForm('none');
    }
  };

  return (
    <DarkBG
      onClick={() => setCurrentForm('none')}
    >
      <ModalContainer
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <form>
          <div name="modal-header">
            <h1>Ask Your Question</h1>
            <h3>{`About the ${productsInfo.name}`}</h3>
            <br />
            Your Nickname
            <br />
            <input name="name" id="askName" size="100" placeholder="Example: Boaty McBoatFace" maxLength="60" required />
            <br />
            <br />
            Your Email
            <br />
            <input name="email" id="askEmail" size="100" placeholder="boatymcboatface@google.com" maxLength="60" required />
            <br />
            <small>For authentication reasons, you will not be emailed</small>
            <br />
            Your Question
            <br />
            <input name="question" id="askQuestion" size="100" placeholder="How long does it take to put together this product?" required />
            <br />
            <button type="submit" onClick={handleSubmit}>Submit Question</button>
          </div>
        </form>
      </ModalContainer>
    </DarkBG>
  );
}

export default QuestionModal;
