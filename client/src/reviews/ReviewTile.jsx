import React from 'react';
import { useProductsContext } from '../Context.jsx';

function ReviewTile() {
  const { loading, results } = useProductsContext();
  if (loading) {
    return <div />;
  }
  const reviewComponents = results.map((indvReview) => (
    <li key={indvReview.review_id}>
      <div>{indvReview.rating}</div>
      <div>{indvReview.date}</div>
      <div>{indvReview.summary}</div>
      <div>{indvReview.Body}</div>
      <div>{indvReview.recommends}</div>
      <div>{indvReview.reviewer_name}</div>
      <div>{!!indvReview.response && indvReview.response}</div>
      <button type="button">helpful</button>
      <button type="button">report</button>
    </li>
  ));
  return (
    <ol>
      {reviewComponents}
    </ol>
  );
}

export default ReviewTile;
