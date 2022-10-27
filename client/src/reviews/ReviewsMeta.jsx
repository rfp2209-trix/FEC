import React from 'react';
import { RatingSummary, StarsBreakdown } from './RatingsBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';
import { MetaContainer } from './meta.style.js';

function ReviewsMeta() {
  return (
    <MetaContainer>
      <RatingSummary />
      <StarsBreakdown />
      <ProductBreakdown />
    </MetaContainer>
  );
}

export default ReviewsMeta;
