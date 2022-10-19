import React from 'react';
import { useProductsContext } from '../Context.jsx';
import Stars from './Stars.jsx';

function RatingsBreakdown() {
  return (
    <div>
      <RatingSummary />
      <StarsBreakdown />
    </div>
  );
}

function RatingSummary() {
  const { avgReview, loading } = useProductsContext();
  if (loading) {
    return <div />;
  }
  return (
    <div style={{ '--rating': avgReview, '--star-size': '60px' }}>
      {avgReview}
      <Stars />
    </div>
  );
}

function StarsBreakdown() {
  const { reviewsMeta, totalReviews, loading } = useProductsContext();
  if (loading) {
    return <div />;
  }
  const ratingsComponents = Object.entries(reviewsMeta.ratings).reverse().map((resultArray) => (
    <li key={resultArray[0]}>
      {resultArray[0]}
      &nbsp;stars (insert bar here showing relative amount of reviews)
      {resultArray[1]}
    </li>
  ));
  const percentRecomended = (reviewsMeta.recommended.true / totalReviews) * 100;
  return (
    <div>
      {percentRecomended.toFixed(0)}
      % of reviews recommend this product
      {ratingsComponents}
    </div>
  );
}

export default RatingsBreakdown;
