import React from 'react';
import { useProductsContext } from '../Context.jsx';
import {
  MetaList,
  CharGrid,
  CharDescribeBar,
  FullCharBar,
  DownTriangle,
} from './meta.style.js';
import { charMeaning } from '../../helpers.js';
import { GridSpan } from './reviews.style.js';

function ProductBreakdown() {
  const { reviewsMeta, loading } = useProductsContext();
  if (loading) {
    return <div />;
  }
  const characteristicBar = ['one', 'two', 'three', 'four'].map((digit) => <CharDescribeBar key={digit} area={digit} />);
  const characteristicComponents = Object.entries(reviewsMeta.characteristics).map((indvChar) => {
    const charPercent = ((indvChar[1].value / 5) * 100).toFixed(2);
    return (
      <CharGrid key={indvChar[1].id}>
        <GridSpan area="characteristic" justify="start">
          {indvChar[0]}
        </GridSpan>
        <GridSpan area="low-desc" justify="start">{charMeaning[indvChar[0]][0]}</GridSpan>
        <GridSpan area="mid-desc">{charMeaning[indvChar[0]][2]}</GridSpan>
        <GridSpan area="high-desc" justify="end">{charMeaning[indvChar[0]][4]}</GridSpan>
        <FullCharBar>
          <div style={{ position: 'relative' }}>
            <DownTriangle percentLeft={`${charPercent}%`} />
            {characteristicBar}
          </div>
        </FullCharBar>
      </CharGrid>
    )
  });
  return (
    <MetaList>
      {characteristicComponents}
    </MetaList>
  );
}

export default ProductBreakdown;
