/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */
/* eslint-disable max-len */
/* eslint-disable arrow-body-style */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */
/* eslint-disable object-curly-newline */
import React, { useState, useEffect, useRef } from 'react';
import { SlMagnifier } from 'react-icons/sl';
import { FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa';
import { useProductsContext } from '../../Context.jsx';
import { useOverviewContext } from '../overviewContextWrapper.jsx';
import * as Styled from './imageGalleryMain.styles.js';

export default function ImageGalleryMain() {
  const { styleDetails, loading } = useProductsContext();
  const { styleId, setStyleId, mainPhoto, setMainPhoto, photoIndex, setPhotoIndex } = useOverviewContext();
  const ref = useRef(null);
  const [zoom, setZoom] = useState(false);

  useEffect(() => {
    if (!loading && styleDetails && styleId === 0) {
      const def_styleID = styleDetails.results[0].style_id;
      setStyleId(def_styleID);
    }
  });

  const styles = (!loading && styleDetails) ? styleDetails.results : [];
  const filteredStyles = styles.filter((style) => style.style_id === styleId);
  const numberOfPhotos = (filteredStyles.length > 0) ? filteredStyles[0].photos.length : 0;

  useEffect(() => {
    if (filteredStyles.length > 0 && mainPhoto === '') {
      const photo = filteredStyles[0].photos[0].url;
      setMainPhoto(photo);
    }
  });

  useEffect(() => {
    if (filteredStyles.length > 0) {
      const photo = filteredStyles[0].photos[photoIndex].url;
      setMainPhoto(photo);
    }
  }, [photoIndex]);

  useEffect(() => {
    const element = ref.current;
    const listen = (event) => {
      element.style.backgroundPositionX = `${-event.offsetX * 2.5}px`;
      element.style.backgroundPositionY = `${-event.offsetY * 2.5}px`;
    };
    if (zoom === true) {
      element.addEventListener('mousemove', listen);
    } else {
      return () => {
        const element = ref.current;
        element.removeEventListener('mousemove', listen);
      };
    }
  }, [zoom]);

  const handleMainPhotoClick = () => {
    setZoom(false);
  };

  const handleRight = () => {
    if ((photoIndex + 1) > numberOfPhotos - 1) {
      setPhotoIndex(0);
      return;
    }
    setPhotoIndex((photoIndex) => photoIndex + 1);
  };
  const handleLeft = () => {
    if ((photoIndex - 1) < 0) {
      setPhotoIndex(numberOfPhotos - 1);
    }
    setPhotoIndex((photoIndex) => photoIndex - 1);
  };
  const handleZoom = () => {
    setZoom(true);
  };

  return (
    <Styled.MainImage>
      {!zoom ? <FaArrowCircleRight onClick={handleRight} name="right" className="ar" aria-label="arrow right" /> : null }
      {!zoom ? <FaArrowCircleLeft onClick={handleLeft} className="al" name="left" aria-label="arrow left" /> : null }
      {!zoom ? <SlMagnifier onClick={handleZoom} className="mag" aria-label="magnifying glass" /> : null }
      {zoom ? <Styled.MainPhotoZoom ref={ref} onClick={handleMainPhotoClick} photo={mainPhoto} />
        : <Styled.MainPhotoDefault photo={mainPhoto} />}
      {zoom ? <FaArrowCircleRight onClick={handleRight} className="zoom-ar-right" /> : null}
      {zoom ? <FaArrowCircleLeft onClick={handleLeft} className="zoom-ar-left" /> : null}
    </Styled.MainImage>
  );
}
