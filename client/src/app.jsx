/* eslint-disable import/extensions */
import React, { useState } from 'react';
import { OverviewContextWrapper } from './overview/overviewContextWrapper.jsx';
import * as Styled from './app.style.js';
import Reviews from './reviews/Reviews.jsx';
import WriteReview from './reviews/WriteReview.jsx';
import QuestionModal from './questionsAnswers/questionForm.jsx';

// import your react component to app.styles.js
// follow the convention for creating styled.components
// import your styled component here

function App() {
  const [currentForm, setCurrentForm] = useState('none');
  return (
    <Styled.Container onClick={() => setCurrentForm('none')}>
      <Styled.Header>
        <h2>Header Goes Here</h2>
      </Styled.Header>
      <OverviewContextWrapper>
        <Styled.OverviewContainer />
      </OverviewContextWrapper>
      <br />
      {/* <Styled.SectionBreakOne /> */}
      <Styled.RelatedProductListContainer />
      {/* <Styled.OutfitListContainer /> */}
      <Styled.QuestionsContainer setCurrentForm={setCurrentForm} />
      {currentForm === 'new question' && <QuestionModal setCurrentForm={setCurrentForm} />}
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
