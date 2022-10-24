/* eslint-disable import/extensions */
import React, { useState } from 'react';
import { OverviewContextWrapper } from './overview/overviewContextWrapper.jsx';
import * as Styled from './app.style.js';
import Reviews from './reviews/Reviews.jsx';
import WriteReview from './reviews/WriteReview.jsx';
import QuestionModal from './questionsAnswers/questionForm.jsx';
import AnswerModal from './questionsAnswers/answerQuestionForm.jsx';
import Header from './header.jsx';

// import your react component to app.styles.js
// follow the convention for creating styled.components
// import your styled component here

function App() {
  const [currentForm, setCurrentForm] = useState('none');
  const [currentQData, setCurrentQData] = useState([]);
  // console.log('current form: ', currentForm);
  return (
    <Styled.Container onClick={() => setCurrentForm('none')}>
      <Styled.Header>
        <Header />
      </Styled.Header>
      <OverviewContextWrapper>
        <Styled.OverviewContainer />
      </OverviewContextWrapper>
      <br />
      {/* <Styled.SectionBreakOne /> */}
      <Styled.RelatedProductListContainer />
      <Styled.OutfitListContainer />
      <Styled.QuestionsContainer setCurrentForm={setCurrentForm} />
      {currentForm === 'new question' && <QuestionModal setCurrentForm={setCurrentForm} />}
      {/* <Styled.OutfitListContainer /> */}
      <Styled.QuestionsContainer
        setCurrentForm={setCurrentForm}
        setCurrentQData={setCurrentQData}
      />
      {currentForm === 'new question' ? <QuestionModal setCurrentForm={setCurrentForm} /> : null}
      {currentForm === 'new answer' ? <AnswerModal setCurrentForm={setCurrentForm} currentQData={currentQData} /> : null }
      <Reviews setCurrentForm={setCurrentForm} />
      {currentForm === 'new review' && <WriteReview setCurrentForm={setCurrentForm} />}
      {/* <Styled.Footer>
        <h2>
          Footer Goes Here
        </h2>
      </Styled.Footer> */}
    </Styled.Container>
  );
}

export default App;
