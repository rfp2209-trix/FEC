import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useProductsContext } from '../Context.jsx';
import { DarkBG, ModalContainer } from './background.style.js';

function AnswerModal({ setAnswerQuestion, currentQData }) {
  const { productsInfo, loading } = useProductsContext();
  const [answer, setAnswer] = useState({
    body: null,
    name: null,
    email: null,
  });
  // const [photoUrls, setPhotoUrls] = useState();
  const handleChange = (e) => {
    answer[e.target.name] = e.target.value;
    setAnswer({ ...answer });
  };

  if (loading) {
    return (<span />);
  }

  const handleSubmitAnswer = (e) => {
    console.log('post body: ', answer);
    axios.post(`/fec/answer/${currentQData[0]}`, answer)
      .then(() => {
        console.log('Successfully uploaded answer!');
      })
      .catch(() => {
        console.log('Could not submit answer');
      });
    setAnswerQuestion(false);
    e.preventDefault();
  };

  return (
    <DarkBG onClick={() => { setAnswerQuestion(false); }}>
      <ModalContainer onClick={(e) => { e.stopPropagation(); }}>
        <form>
          <div name="answerModalHeader">
            <h1>Submit Your Answer</h1>
            <h3>{`${productsInfo.name} : ${currentQData[1]}`}</h3>
          </div>
          Your Nickname
          <br />
          <input name="name" placeholder="Barack" required onChange={(e) => { handleChange(e); }} />
          <br />
          Your Email
          <br />
          <input name="email" placeholder="barack@google.com" required onChange={(e) => { handleChange(e); }} />
          <br />
          Your Answer
          <br />
          <input name="body" placeholder="The answer to this question is..." required onChange={(e) => { handleChange(e); }} />
          <br />
          Photo URL Upload
          <br />
          <input id="answerPhoto" placeholder="https://unsplash.com/photos/aopy8Hwom4s" />
          <br />
          <button type="submit">Upload Photo URL</button>
          <br />
          <button type="submit" onClick={handleSubmitAnswer}>Submit Answer</button>
        </form>
      </ModalContainer>
    </DarkBG>
  );
}

export default AnswerModal;
