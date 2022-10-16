/* eslint-disable import/extensions */
import React from 'react';
import * as Styled from './app.style.js';

// import your react component to app.styles.js
// follow the convention for creating styled.components
// import your styled component here

function App() {
  return (
    <Styled.Container>
      <Styled.ContentContainer>
        <Styled.OverviewContainer />
        <Styled.ReviewsContainer />
        <Styled.WriteReviewContainer />
      </Styled.ContentContainer>
    </Styled.Container>
  );
}

export default App;
