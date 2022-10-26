/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { OverviewContextWrapper } from './overview/overviewContextWrapper.jsx';
import * as Styled from './app.style.js';
import Reviews from './reviews/Reviews.jsx';
import WriteReview from './reviews/WriteReview.jsx';
import QuestionModal from './questionsAnswers/questionForm.jsx';
import Header from './header.jsx';

// import your react component to app.styles.js
// follow the convention for creating styled.components
// import your styled component here

function App() {
  const [currentForm, setCurrentForm] = useState('none');
  const [currentQData, setCurrentQData] = useState([]);
  useEffect(() => {
    const appElement = document.querySelector('#root');
    appElement.addEventListener('click', ((e) => {
      const clickDetails = {};
      const moduleClicked = e.path.filter((element) => element.id === 'OV'
        || element.id === 'RIC'
        || element.id === 'QA'
        || element.id === 'REV');
      [clickDetails.widget] = [moduleClicked[0].id];
      clickDetails.time = new Date();
      clickDetails.element = e.target.nodeName;
      console.log('click details: ', clickDetails);
      axios.post('/fec/interactions', clickDetails)
        .catch((err) => {
          if (err) {
            console.log('err', err)
          }
        });
    }));
  }, []);
  return (
    <Styled.Container onClick={() => setCurrentForm('none')}>
      <Styled.Header>
        <Header />
      </Styled.Header>
      <OverviewContextWrapper>
        <div id="OV">
          <Styled.OverviewContainer />
        </div>
      </OverviewContextWrapper>
      <br />
      {/* <Styled.SectionBreakOne /> */}
      <div id="RIC">
        <Styled.RelatedProductListContainer />
        <Styled.OutfitListContainer />
      </div>
      <div id="QA">
        <Styled.QuestionsContainer setCurrentForm={setCurrentForm} />
        {currentForm === 'new question' && <QuestionModal setCurrentForm={setCurrentForm} />}
        <Styled.QuestionsContainer
          setCurrentForm={setCurrentForm}
          setCurrentQData={setCurrentQData}
        />
        {currentForm === 'new question' ? <QuestionModal setCurrentForm={setCurrentForm} /> : null}
        {currentForm === 'new answer' ? <AnswerModal setCurrentForm={setCurrentForm} currentQData={currentQData} /> : null }
      </div>
      <div id="REV">
        <Reviews setCurrentForm={setCurrentForm} />
        {currentForm === 'new review' && <WriteReview setCurrentForm={setCurrentForm} />}
      </div>
      {/* <Styled.Footer>
        <h2>
          Footer Goes Here
        </h2>
      </Styled.Footer> */}
    </Styled.Container>
  );
}

export default App;
