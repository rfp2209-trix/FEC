import React, { useState } from 'react';
import styled from 'styled-components';
import ReviewsMeta from './ReviewsMeta.jsx';
import ReviewsList from './ReviewsList.jsx';
import { ReviewsFlex } from './reviews.style.js';

function Reviews({ setCurrentForm }) {
  const [ratingsFilter, setRatingsFilter] = useState([null, false, false, false, false, false]);
  return (
    <ReviewsContainer>
      <div>
        <h2>RATINGS & REVIEWS</h2>
        <ReviewsFlex gap="30px">
          <ReviewsMeta
            ratingsFilter={ratingsFilter}
            setRatingsFilter={setRatingsFilter}
          />
          <ReviewsList
            setCurrentForm={setCurrentForm}
            ratingsFilter={ratingsFilter}
            setRatingsFilter={setRatingsFilter}
          />
        </ReviewsFlex>
      </div>
    </ReviewsContainer>
  );
}

export default Reviews;

const ReviewsContainer = styled.div`
  width: 100vw;
  padding: 0px;
  background: white;
  margin: 0px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
