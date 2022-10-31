import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useProductsContext } from '../Context.jsx';
import { DarkBG, ModalContainer } from './background.style.js';
import { BigButton } from './qa-style.js';

function QuestionModal({ setCurrentForm }) {
  const { questionsData, productsInfo, loading } = useProductsContext();
  const productID = JSON.parse(questionsData.product_id);
  const [dataBody, setBodyData] = useState({
    body: null,
    name: null,
    email: null,
    product_id: productID,
  });

  if (loading) {
    return (
      <span />
    );
  }
  const handleChange = (value, key) => {
    dataBody[key] = value;
    setBodyData({ ...dataBody });
  };
  const handleSubmit = (e) => {
    console.log(dataBody);
    axios.post('/fec/ask', dataBody)
      .then(() => {
        console.log('Successfully submitted question');
        setCurrentForm('none');
      })
      .catch(() => {
        console.log('Could not submit question to server');
      });
    e.preventDefault();
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
        <form onSubmit={handleSubmit}>
          <QuestionModalContainer name="modal-header">
            <div name="questionModal">
              <h1>Ask Your Question</h1>
              <h3>{`About the ${productsInfo.name}`}</h3>
            </div>
            Your Nickname
            <br />
            <input
              name="name"
              type="text"
              id="askName"
              size="85"
              placeholder="Example: Boaty McBoatFace"
              maxLength="60"
              autoComplete="off"
              required
              onChange={(e) => { handleChange(e.target.value, 'name'); }}
            />
            <br />
            <br />
            Your Email
            <small> (For authentication reasons, you will not be emailed)</small>
            <br />
            <input
              name="email"
              type="text"
              id="askEmail"
              size="85"
              placeholder="boatymcboatface@google.com"
              maxLength="60"
              autoComplete="off"
              required
              onChange={(e) => { handleChange(e.target.value, 'email'); }}
            />
            <br />
            <br />
            Your Question
            <br />
            <textarea
              name="question"
              type="text"
              id="askQuestion"
              rows="8"
              cols="73"
              placeholder="How long does it take to put together this product?"
              autoComplete="off"
              required
              onChange={(e) => { handleChange(e.target.value, 'body'); }}
            />
            <br />
            <BigButton type="submit">Submit Question</BigButton>
          </QuestionModalContainer>
        </form>
      </ModalContainer>
    </DarkBG>
  );
}

export default QuestionModal;

const QuestionModalContainer = styled.div`
  font-size: 18px;
  font-family: 'Roboto Condensed', sans-serif;
`;
