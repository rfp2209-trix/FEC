/* eslint-disable import/extensions */
import React, { useState } from 'react';
import * as Styled from './app.style.js';
import Reviews from './reviews/Reviews.jsx';
import WriteReview from './reviews/WriteReview.jsx';

// import your react component to app.styles.js
// follow the convention for creating styled.components
// import your styled component here

function App() {
  const [addForm, setAddForm] = useState('none');
  return (
    <Styled.Container onClick={() => setAddForm('none')}>
      <Styled.Header>
        <h2>Header Goes Here</h2>
      </Styled.Header>
      <Styled.OverviewContainer />
      {/* <Styled.SectionBreakOne /> */}
<<<<<<< HEAD
      <Styled.RelatedProductListContainer />
      {/* <Styled.OutfitListContainer /> */}
      <Styled.ReviewsContainer />
      <Styled.WriteReviewContainer />
      <Styled.QuestionsContainer />
      {/* <Styled.Footer>
=======
      <Reviews setAddForm={setAddForm} />
      {addForm === 'new review' && (
      <WriteReview setAddForm={setAddForm} />
      )}
      <Styled.Footer>
>>>>>>> main
        <h2>
          Footer Goes Here
        </h2>
      </Styled.Footer>
    </Styled.Container>
  );
}

export default App;
