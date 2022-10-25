import React from 'react';
import { RatingSummary, StarsBreakdown } from './RatingsBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';

function ReviewsMeta() {
  return (
    <div style={{ width: '260px' }}>
      <RatingSummary />
      <StarsBreakdown />
      <ProductBreakdown />
    </div>
  );
}

export default ReviewsMeta;
