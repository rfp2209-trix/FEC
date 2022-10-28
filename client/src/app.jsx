/* eslint-disable import/extensions */
import React, { useState } from 'react';
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
  const [ClickData, setClickData] = useState([]);
  // const appElement = document.querySelector('#root');
  // appElement.addEventListener('click', (e) => {
  //   const clickDetails = {};
  //   const moduleClicked = e.path.filter((element) => element.id === 'OV'
  //     || element.id === 'RIC'
  //     || element.id === 'QA'
  //     || element.id === 'REV');
  //   [clickDetails.module] = [moduleClicked[0]];
  //   clickDetails.time = new Date();
  //   clickDetails.element = e.target;
  //   setClickData([...ClickData, clickDetails]);
  // });
  // console.log('click tracker data: ', ClickData);
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
        {/* <Styled.QuestionsContainer setCurrentForm={setCurrentForm} /> */}
        {currentForm === 'new question' && <QuestionModal setCurrentForm={setCurrentForm} />}
        <Styled.QuestionsContainer
          setCurrentForm={setCurrentForm}
          setCurrentQData={setCurrentQData}
        />
        {/* {currentForm === 'new question' ? <QuestionModal setCurrentForm={setCurrentForm} /> : null} */}
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
