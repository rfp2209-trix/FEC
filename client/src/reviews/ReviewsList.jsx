import React from 'react';
import ReviewTile from './ReviewTile.jsx';
// cometnt
function ReviewsList() {
  return (
    <div>
      <div>
        amount of reviews and a sort drop down
      </div>
      <input type="text" placeholder="keyword search (low priority)" />
      <button type="button">Search!</button>
      <ReviewTile />
      <button type="button">MORE REVIEWS</button>
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
