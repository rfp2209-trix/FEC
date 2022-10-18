import React from 'react';
import { useProductsContext } from '../../Context.jsx';
import * as Styled from './starRating.styles.js';

export default function StarRating() {
  const { loading, avgReview } = useProductsContext();
  const aria = `Rating of this product is ${avgReview} stars out of 5`;

  return (
    <Styled.StarDisplayContainer style={{ '--rating': avgReview }} aria-label={aria} />
  );
}
