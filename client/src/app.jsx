/* eslint-disable import/extensions */
import React, { useState } from 'react';
import * as Styled from './app.style.js';
import Reviews from './reviews/Reviews.jsx';

// import your react component to app.styles.js
// follow the convention for creating styled.components
// import your styled component here

function App() {
  const [addForm, setAddForm] = useState('none');
  return (
    <Styled.Container>
      {/* <Styled.Header>
        <h2>Header Goes Here</h2>
      </Styled.Header> */}
      {/* <Styled.OverviewContainer /> */}
      {/* <Styled.SectionBreakOne /> */}
      <Reviews setAddForm={setAddForm} />
      <Styled.WriteReviewContainer />
      {/* <Styled.Footer>
        <h2>
          Footer Goes Here
        </h2>
      </Styled.Footer> */}
    </Styled.Container>
  );
}

export default App;
