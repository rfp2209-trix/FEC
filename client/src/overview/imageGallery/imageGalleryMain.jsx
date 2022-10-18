/* eslint-disable object-curly-newline */
import React, { useState, useEffect } from 'react';
import { useProductsContext } from '../../Context.jsx';
import * as Styled from './imageGalleryMain.styles.js';

export default function ImageGalleryMain() {
  const { productsInfo, styleDetails, state, setState, loading } = useProductsContext();
  const [mainPhoto, setMainPhoto] = useState('');
  const photos = (styleDetails) ? styleDetails.results[0].photos : [];

  if (!loading && mainPhoto === '') {
    setMainPhoto(photos[0].url);
  }

  return (
    <Styled.MainImage>
      <img src={mainPhoto} alt="should be a pic here" />
    </Styled.MainImage>
  );
}
