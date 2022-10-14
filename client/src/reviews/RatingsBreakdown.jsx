import React from 'react';

function RatingsBreakdown() {
  return (
    <div>
      <RatingSummary />
      <StarsBreakdown />
      <div>clickable amount of reviews that recommend product</div>
    </div>
  );
}

function RatingSummary() {
  return (
    <div>Average rating in nums and stars Here</div>
  );
}

function StarsBreakdown() {
  return (
    <div>individual ratings amount here</div>
  );
}

export default RatingsBreakdown;
