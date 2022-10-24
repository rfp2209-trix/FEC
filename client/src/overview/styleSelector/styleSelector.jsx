/* eslint-disable react/jsx-indent */
/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/no-array-index-key */
/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from 'react';
import StyleThumbsRender from './styleThumbsRender.jsx';
import * as Styled from './styleSelector.styles.js';
import { useProductsContext } from '../../Context.jsx';
import { useOverviewContext } from '../overviewContextWrapper.jsx';

export default function styleSelector() {
  const { styleDetails, loading } = useProductsContext();
  const {
    styleId, setStyleId, styleName, setStyleName,
  } = useOverviewContext();


  useEffect(() => {
    if (!loading && styleDetails) {
      const def_styleID = styleDetails.results[0].style_id;
      setStyleId(def_styleID);
    }
  }, []);

  const styles = (!loading && styleDetails) ? styleDetails.results : [];
  const filteredStyles = styles.filter((style) => style.style_id === styleId);


  useEffect(() => {
    if (filteredStyles.length > 0 && styleName === '') {
      setStyleName(filteredStyles[0].name);
    }
  });
  const originalPrice = (!loading && filteredStyles.length > 0) ? filteredStyles[0].original_price : '';
  const salePrice = (filteredStyles.length > 0 && (filteredStyles[0].sale_price !== null)) ? filteredStyles[0].sale_price : null;

  return (
    <Styled.StyleContainerWrapper>
      <div className="price-render-container">
        {!loading && salePrice
          ? <div>
            <span className="original-price-strike">{originalPrice}&nbsp;&nbsp;</span>
            <span>{salePrice}</span>
            </div>
          : <span>{originalPrice}</span>}
      </div>
      <div className="style-type-container">
        <p>Style: &nbsp;</p>
        <p>{styleName}</p>
      </div>
      <Styled.StyleSelectorContainer>
        {!loading && styleDetails.results.map((style) => {
          return <StyleThumbsRender
            key={style.style_id}
            image={style.photos[0].thumbnail_url}
            id={style.style_id}
          />;
        })}
      </Styled.StyleSelectorContainer>
    </Styled.StyleContainerWrapper>
  );
}
