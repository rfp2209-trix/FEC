import React from 'react';
import ReviewTile from './ReviewTile.jsx';
import { useProductsContext } from '../Context.jsx';
// cometnt
function ReviewsList() {
  const { totalReviews, loading } = useProductsContext();

  if (loading) {
    return (
      <div />
    );
  }
  return (
    <div>
      <div>
        {totalReviews}
        &nbsp;reviews, sorted by (insert dropdown here)
      </div>
      <input type="text" placeholder="keyword search (low priority)" />
      <button type="button">Search!</button>
      <ReviewTile />
      {totalReviews > 2 && <button type="button">MORE REVIEWS</button>}
      <button type="button">ADD REVIEW</button>
      <div>
        REMOVE ME!
        <div>When the add review button is clicked</div>
        <div>the whole page needs to locked out</div>
        <div>and a modal form must be rendered</div>
      </div>
    </div>
  );
}

export default ReviewsList;
