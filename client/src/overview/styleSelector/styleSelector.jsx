/* eslint-disable react/no-array-index-key */
/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from 'react';
import StyleThumbsRender from './styleThumbsRender.jsx';
import * as Styled from './styleSelector.styles.js';
import { useProductsContext } from '../../Context.jsx';

export default function styleSelector() {
  const [styleName, setStyleName] = useState('');
  const { styleDetails, loading } = useProductsContext();

  useEffect(() => {
    if (!loading && styleDetails) {
      setStyleName(styleDetails.results[0].name);
    }
  });

  return (
    <Styled.StyleContainerWrapper>
      <div>
        <p>Style: &nbsp;</p>
        <p>{!loading && styleName}</p>
      </div>
      <Styled.StyleSelectorContainer>
        {!loading && styleDetails.results.map((style) => {
          return <StyleThumbsRender key={style.style_id} image={style.photos[0].thumbnail_url} />;
        })}
      </Styled.StyleSelectorContainer>
    </Styled.StyleContainerWrapper>
  );
}
