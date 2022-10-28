import React, { useState } from 'react';
import axios from 'axios';
import { useProductsContext } from '../Context.jsx';
import { DarkBG, ModalContainer } from './background.style.js';
import FileUpload from '../../fileUpload.jsx';

function AnswerModal({ setAnswerQuestion, currentQData }) {
  const { productsInfo, loading } = useProductsContext();
  const [answer, setAnswer] = useState({
    body: null,
    name: null,
    email: null,
    photos: [],
  });
  // const [photoUrls, setPhotoUrls] = useState();
  const handleChange = (e) => {
    answer[e.target.name] = e.target.value;
    setAnswer({ ...answer });
  };

  if (loading) {
    return (<span />);
  }

  const handlePhotoSubmit = (input) => {
    answer.photos.push(input);
    setAnswer({ ...answer });
    console.log('URL generated, pushed to photo array');
  };

  const handleSubmitAnswer = (e) => {
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
        <form onSubmit={handleSubmitAnswer}>
          <div name="answerModalHeader">
            <h1>Submit Your Answer</h1>
            <h3>{`${productsInfo.name} : ${currentQData[1]}`}</h3>
          </div>
          Your Nickname
          <br />
          <input name="name" size="85" placeholder="Psyduck" required onChange={(e) => { handleChange(e); }} />
          <br />
          Your Email
          <small> (For authentication reasons, you will not be emailed)</small>
          <br />
          <input name="email" size="85" placeholder="barack@google.com" required onChange={(e) => { handleChange(e); }} />
          <br />
          Your Answer
          <br />
          <textarea name="body" rows="8" cols="73" placeholder="The answer to this question is..." required onChange={(e) => { handleChange(e); }} />
          <br />
          <FileUpload stateUpdaterFn={handlePhotoSubmit} />
          <br />
          <button type="submit">Submit Answer</button>
        </form>
      </ModalContainer>
    </DarkBG>
  );
}

export default AnswerModal;
