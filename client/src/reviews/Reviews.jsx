import React from 'react';
import styled from 'styled-components';
import ReviewsMeta from './ReviewsMeta.jsx';
import ReviewsList from './ReviewsList.jsx';
import { ReviewsFlex } from './reviews.style.js';

function Reviews({ setCurrentForm }) {
  return (
    <ReviewsContainer>
      <h2>RATINGS & REVIEWS</h2>
      <ReviewsFlex>
        <ReviewsMeta />
        <ReviewsList setCurrentForm={setCurrentForm} />
      </ReviewsFlex>
    </ReviewsContainer>
  );
}

export default Reviews;

const ReviewsContainer = styled.div`
  width: 100vw;
  padding: 0px;
  background: #f0fff0;
  margin: 0px;
`;
