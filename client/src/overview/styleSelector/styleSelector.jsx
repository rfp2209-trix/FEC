/* eslint-disable react/no-array-index-key */
/* eslint-disable arrow-body-style */
import React from 'react';
import StyleThumbsRender from './styleThumbsRender.jsx';
import * as Styled from './styleSelector.styles.js';
import { useProductsContext } from '../../Context.jsx';

export default function styleSelector() {

  const { styleDetails, loading } = useProductsContext();
  const styles = (!loading && styleDetails) ? styleDetails : [];

  console.log('styles results', styles);


  return (
    <Styled.StyleSelectorContainer>
      {!loading && styles.results.map((style) => {
        return <StyleThumbsRender key={style.style_id} image={style.photos[0].thumbnail_url} />;
      })}
    </Styled.StyleSelectorContainer>
  );
}
