import React from 'react';
import { useProductsContext } from '../../Context.jsx';
import * as Styled from './starRating.styles.js';

export default function StarRating() {
  const { loading, avgReview, totalReviews } = useProductsContext();
  const aria = `Rating of this product is ${avgReview} stars out of 5`;

  return (
    <Styled.StarDisplayContainer data-testid="star-rating-exists" style={{ '--rating': avgReview }} aria-label={aria}>
      {!loading && totalReviews > 0
        ? (
          <div>
            <a href="#review_list">Read all {totalReviews} reviews</a>
          </div>
        )
        : null}
    </Styled.StarDisplayContainer>
  );
}
