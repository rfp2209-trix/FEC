/* eslint-disable arrow-body-style */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */
/* eslint-disable object-curly-newline */
import React, { useState, useEffect } from 'react';
import { HiMagnifyingGlassPlus } from 'react-icons/hi2';
import { FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa';
import { useProductsContext } from '../../Context.jsx';
import { useOverviewContext } from '../overviewContextWrapper.jsx';
import * as Styled from './imageGalleryMain.styles.js';

export default function ImageGalleryMain() {
  const { styleDetails, loading } = useProductsContext();
  const { styleId, setStyleId, mainPhoto, setMainPhoto, photoIndex, setPhotoIndex } = useOverviewContext();
  // const [images, setImages] = useState([]);

  useEffect(() => {
    if (!loading && styleDetails) {
      const def_styleID = styleDetails.results[0].style_id;
      setStyleId(def_styleID);
    }
  });

  const styles = (!loading && styleDetails) ? styleDetails.results : [];
  const filteredStyles = styles.filter((style) => style.style_id === styleId);
  // const photos = (styleDetails) ? styleDetails.results[0].photos : [];

  useEffect(() => {
    if (filteredStyles.length > 0 && mainPhoto === '') {
      const photo = filteredStyles[0].photos[0].url;
      setMainPhoto(photo);
    }
  });

  useEffect(() => {
    if (filteredStyles.length > 0) {
      console.log('Photo index has changed', photoIndex);
      const photo = filteredStyles[0].photos[photoIndex].url;
      setMainPhoto(photo);
    }
  }, [photoIndex]);

  const handleRight = () => {
    console.log('clicked right');
    setPhotoIndex((photoIndex) => photoIndex + 1);
  };
  console.log('photoIndex', photoIndex);
  const handleLeft = () => {
    console.log('clicked left');
    setPhotoIndex((photoIndex) => photoIndex - 1);
  };

  return (
    <Styled.MainImage>
      <FaArrowCircleRight onClick={handleRight} name="right" className="ar" aria-label="arrow right" />
      <FaArrowCircleLeft onClick={handleLeft} className="al" name="left" aria-label="arrow left" />
      <HiMagnifyingGlassPlus className="mag" aria-label="magnifying glass" />
      <img src={mainPhoto} className="mainPhoto" alt="should be a pic here" />
    </Styled.MainImage>
  );
}
