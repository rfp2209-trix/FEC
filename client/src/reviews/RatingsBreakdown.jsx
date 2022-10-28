import React from 'react';
import { useProductsContext } from '../Context.jsx';
import Stars from './Stars.jsx';
import {
  MetaList,
  PercentageReviewBar,
  StyledRatingBreakdown,
} from './meta.style.js';

export function RatingSummary() {
  const { avgReviewActual, avgReview, loading } = useProductsContext();
  if (loading) {
    return <div />;
  }
  return (
    <div style={{ '--rating': avgReview, '--star-size': '36px', fontSize: '44px' }}>
      {avgReviewActual}
      &nbsp;
      <Stars />
    </div>
  );
}

export function StarsBreakdown({ ratingsFilter, setRatingsFilter }) {
  const { reviewsMeta, totalReviews, loading } = useProductsContext();
  const breakdownClick = (rating) => {
    const filterCopy = [...ratingsFilter];
    if (ratingsFilter[rating]) {
      filterCopy[rating] = false;
      setRatingsFilter(filterCopy);
    } else {
      filterCopy[rating] = Number(rating);
      setRatingsFilter(filterCopy);
    }
  };
  if (loading) {
    return <div />;
  }
  const ratingsComponents = Object.entries(reviewsMeta.ratings).reverse().map((resultArray) => {
    const percent = ((resultArray[1] / totalReviews) * 100).toFixed(2);
    return (
      <StyledRatingBreakdown
        key={resultArray[0]}
        starRating={resultArray[0]}
        onClick={() => breakdownClick(resultArray[0])}
      >
        <Stars width="100px" />
        <PercentageReviewBar percent={`${percent}%`} />
        {` (${resultArray[1]})`}
      </StyledRatingBreakdown>
    );
  });
  const percentRecomended = (reviewsMeta.recommended.true / totalReviews) * 100;
  const writeFilters = () => {
    const filters = ratingsFilter
      .filter((isFiltered) => !!isFiltered);
    if (filters.length === 5) {
      return 'all';
    }
    if (filters.length > 1 && filters.length < 5) {
      const editString = filters.join(', ');
      const returnME = `${editString.slice(0, -2)} and  ${editString.slice(-2)} star`;
      return returnME;
    }
    return `${filters[0]} star`;
  };
  const currentFilters = writeFilters();
  return (
    <div style={{ fontSize: '14px' }}>
      {percentRecomended.toFixed(0)}
      % of reviews recommend this product
      {ratingsFilter.some((isFiltered) => isFiltered) && (
        <div>
          Now showing&nbsp;
          {currentFilters}
          &nbsp;Reviews
        </div>
      )}
      <MetaList style={{ fontSize: '14px' }}>
        {ratingsComponents}
      </MetaList>
    </div>
  );
}
