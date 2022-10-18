import React from 'react';
import styled from 'styled-components';
import ReviewsMeta from './ReviewsMeta.jsx';
import ReviewsList from './ReviewsList.jsx';

function Reviews({setAddForm}) {
  return (
    <ReviewsContainer>
      <h2>RATINGS & REVIEWS</h2>
      <ReviewsMeta />
      <ReviewsList />
    </ReviewsContainer>
  );
}

export default Reviews;

export const ReviewsContainer = styled.div`

  width: 100vw;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background: white;
  flex: 1;
`;
