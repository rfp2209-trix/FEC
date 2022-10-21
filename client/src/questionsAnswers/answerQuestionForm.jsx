import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useProductsContext } from '../Context.jsx';

function AnswerModal({ setCurrentForm, currentQData }) {
  const { productsInfo, loading } = useProductsContext();

  if (loading) {
    return (<span />);
  }

  const handleSubmitAnswer = (e) => {
    e.preventDefault();
    const askBody = document.getElementById('answerAnswer').value;
    const askName = document.getElementById('answerName').value;
    const askEmail = document.getElementById('answerEmail').value;
    // const askPhotos = photoURLs;
    const askAnswerData = {
      body: askBody,
      name: askName,
      email: askEmail,
    // photos: askPhotos,
    };
    axios.post(`/qa/questions/${currentQData[0]}/answers`, askAnswerData)
      .then(() => {
        console.log('Successfully uploaded answer!');
      })
      .catch(() => {
        console.log('Could not submit answer');
      });
    setCurrentForm('none');
  };

  return (
    <BackgroundOpacityDiv onClick={() => { setCurrentForm('none'); }}>
      <AnswerModalContainer onClick={(e) => { e.stopPropagation(); }}>
        <form>
          <div name="answerModalHeader">
            <h1>Submit Your Answer</h1>
            <br />
            <h3>{`${productsInfo.name} : ${currentQData[1]}`}</h3>
          </div>
          Your Nickname
          <br />
          <input name="answerName" placeholder="Barack" />
          <br />
          Your Email
          <br />
          <input name="answerEmail" placeholder="barack@google.com" />
          <br />
          Your Answer
          <br />
          <input name="answerAnswer" placeholder="The answer to this question is..." />
          <br />
          Photo URL Upload
          <br />
          <input name="answerPhoto" placeholder="https://unsplash.com/photos/aopy8Hwom4s" />
          <button type="submit">Upload Photo URL</button>
          <br />
          <button type="submit" onClick={handleSubmitAnswer}>Submit Answer</button>
        </form>
      </AnswerModalContainer>
    </BackgroundOpacityDiv>
  );
}

export default AnswerModal;

const BackgroundOpacityDiv = styled.div`
  display: flex;
  justify-content: center
  align-items: center;
  height: 100vh;
  width: 100vw;
  padding: 20px;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
`;

const AnswerModalContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: #f0fff0;
  height: 30vh;
  width: 60vw;
  min-height: 400px;
  min-width: 800px;
`;
