/* eslint-disable import/extensions */
import React from 'react';
import * as Styled from './app.style.js';

// import your react component to app.styles.js
// follow the convention for creating styled.components
// import your styled component here

function App() {
  return (
    <Styled.Container>
      <Styled.Header>
        <h2>Header Goes Here</h2>
      </Styled.Header>
      <Styled.OverviewContainer />
      <Styled.SectionBreakOne />
      <Styled.ReviewsContainer />
      <Styled.WriteReviewContainer />
      <Styled.Footer>
        <h2>
          Footer Goes Here
        </h2>
      </Styled.Footer>
    </Styled.Container>
  );
}

export default App;
