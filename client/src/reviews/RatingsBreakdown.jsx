import React from 'react';
import { useProductsContext } from '../Context.jsx';

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
    <div>{avgReview}</div>
  );
}

function StarsBreakdown() {
  const { ratings, recommended, totalReviews, loading } = useProductsContext();
  if (loading) {
    return <div />;
  }
  const ratingsComponents = Object.entries(ratings).reverse().map((resultArray) => (
    <li key={resultArray[0]}>
      {resultArray[0]}
      &nbsp;stars (insert bar here showing relative amount of reviews)
      {resultArray[1]}
    </li>
  ));
  const percentRecomended = (recommended.true / totalReviews) * 100;
  return (
    <div>
      {percentRecomended.toFixed(0)}
      % of reviews recommend this product
      {ratingsComponents}
    </div>
  );
}

export default RatingsBreakdown;
