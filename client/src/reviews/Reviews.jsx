import React from 'react';
import ReviewsMeta from './ReviewsMeta.jsx';
import ReviewsList from './ReviewsList.jsx';

function Reviews() {
  return (
    <div>
      <h2>RATINGS & REVIEWS</h2>
      <ReviewsMeta />
      <ReviewsList />
    </div>
  );
}

export default Reviews;
