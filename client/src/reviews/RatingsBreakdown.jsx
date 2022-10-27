import React from 'react';
import { useProductsContext } from '../Context.jsx';
import Stars from './Stars.jsx';
import {
  MetaList,
  PercentageReviewBar,
  StyledRatingBreakdown,
} from './meta.style.js';

export function RatingSummary() {
  const { avgReview, loading } = useProductsContext();
  if (loading) {
    return <div />;
  }
  return (
    <div style={{ '--rating': avgReview, '--star-size': '36px', fontSize: '44px' }}>
      {avgReview}
      &nbsp;
      <Stars />
    </div>
  );
}

export function StarsBreakdown() {
  const { reviewsMeta, totalReviews, loading } = useProductsContext();
  if (loading) {
    return <div />;
  }
  // const mostStarRatings = Math.max(...Object.entries(reviewsMeta.ratings)
  //   .map((nestedArray) => nestedArray[1]));
  const ratingsComponents = Object.entries(reviewsMeta.ratings).reverse().map((resultArray) => {
    const percent = ((resultArray[1] / totalReviews) * 100).toFixed(2);
    return (
      <StyledRatingBreakdown
        key={resultArray[0]}
        starRating={resultArray[0]}
      >
        <Stars width="100px" />
        <PercentageReviewBar percent={`${percent}%`} />
        {` (${resultArray[1]})`}
      </StyledRatingBreakdown>
    );
  });
  const percentRecomended = (reviewsMeta.recommended.true / totalReviews) * 100;
  return (
    <MetaList style={{ fontSize: '16px' }}>
      {percentRecomended.toFixed(0)}
      % of reviews recommend this product
      {ratingsComponents}
    </MetaList>
  );
}


