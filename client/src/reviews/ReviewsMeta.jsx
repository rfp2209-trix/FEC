import React from 'react';
import { RatingSummary, StarsBreakdown } from './RatingsBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';
import { MetaContainer } from './meta.style.js';

function ReviewsMeta({ ratingsFilter, setRatingsFilter }) {
  return (
    <MetaContainer>
      <RatingSummary />
      <StarsBreakdown
        ratingsFilter={ratingsFilter}
        setRatingsFilter={setRatingsFilter}
      />
      <ProductBreakdown />
    </MetaContainer>
  );
}

export default ReviewsMeta;
