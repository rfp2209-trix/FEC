import React from 'react';
import styled from 'styled-components';
import { useProductsContext } from '../Context.jsx';
import Stars from './Stars.jsx';
import { MetaList } from './meta.style.js';

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
  const mostStarRatings = Math.max(...Object.entries(reviewsMeta.ratings)
    .map((nestedArray) => nestedArray[1]));
  const ratingsComponents = Object.entries(reviewsMeta.ratings).reverse().map((resultArray) => {
    const percent = ((resultArray[1] / mostStarRatings) * 100).toFixed(2);
    return (
      <li
        key={resultArray[0]}
        style={{
          '--rating': resultArray[0],
          '--star-size': '18px',
          fontSize: '18px',
          width: '250px',
        }}
      >
        <Stars width="100px" />
        <PercentageReviewBar percent={`${percent}%`} />
      </li>
    );
  });
  const percentRecomended = (reviewsMeta.recommended.true / totalReviews) * 100;
  return (
    <MetaList style={{fontSize: '16px'}}>
      {percentRecomended.toFixed(0)}
      % of reviews recommend this product
      {ratingsComponents}
    </MetaList>
  );
}

const PercentageReviewBar = styled.div`
  display: inline-block;
  box-sizing: border-box;
  height: 12px;
  min-width 150px;
  border-radius: 2px;
  background: linear-gradient(to right, #536872 ${(props) => props.percent}, #acc8d7 ${(props) => props.percent});
`;
