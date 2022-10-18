import React from 'react';
import { useProductsContext } from '../../Context.jsx';

export default function StarRating() {
  const { loading, reviewsMeta, avgReview } = useProductsContext();
  const starsData = (reviewsMeta) ? reviewsMeta.ratings : [];

  return (
    <div>
      Star Rating here
    </div>
  );
}
