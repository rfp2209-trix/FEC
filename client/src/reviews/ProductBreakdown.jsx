import React from 'react';
import { useProductsContext } from '../Context.jsx';
import { MetaList, CharGrid } from './meta.style.js';
import { charMeaning } from '../../helpers.js';
import { GridSpan } from './reviews.style.js';

function ProductBreakdown() {
  const { reviewsMeta, loading } = useProductsContext();
  if (loading) {
    return <div />;
  }
  const characteristicComponents = Object.entries(reviewsMeta.characteristics).map((indvChar) => (
    <CharGrid key={indvChar[1].id}>
      <GridSpan area="characteristic" justify="start">
        {indvChar[0]}
      </GridSpan>
      <GridSpan area="low-desc">{charMeaning[indvChar[0]][0]}</GridSpan>
      <GridSpan area="mid-desc">{charMeaning[indvChar[0]][2]}</GridSpan>
      <GridSpan area="high-desc">{charMeaning[indvChar[0]][4]}</GridSpan>
    </CharGrid>
  ));
  return (
    <MetaList>
      {characteristicComponents}
    </MetaList>
  );
}

export default ProductBreakdown;
