/* eslint-disable object-curly-newline */
import React, { useState, useEffect } from 'react';
import { HiMagnifyingGlassPlus } from 'react-icons/hi2';
import { useProductsContext } from '../../Context.jsx';
import { useOverviewContext } from '../overviewContextWrapper.jsx';
import * as Styled from './imageGalleryMain.styles.js';


export default function ImageGalleryMain() {
  const { styleDetails, loading } = useProductsContext();
  const { styleId, setStyleId } = useOverviewContext();
  const [mainPhoto, setMainPhoto] = useState('');

  // useEffect(() => {
  //   if (!loading && styleDetails) {
  //     const def_styleID = styleDetails.results[0].style_id;
  //     setStyleId(def_styleID);
  //   }
  // });

  const photos = (styleDetails) ? styleDetails.results[0].photos : [];

  if (!loading && mainPhoto === '') {
    setMainPhoto(photos[0].url);
  }

  // const handleZoom = () => {
  //   setZoom(!zoom);
  // }
  // const handleKeyZoom = (event) => {
  //   if (event.key === '+') {
  //     setZoom(true);
  //   };
  //   if (event.key === '-') {
  //     setZoom(false);
  //   }
  // };

  return (
    <Styled.MainImage>
      <HiMagnifyingGlassPlus className="mag" aria-label="magnifying glass" />
      <img src={mainPhoto} className="mainPhoto" alt="should be a pic here" />
    </Styled.MainImage>
  );
}
