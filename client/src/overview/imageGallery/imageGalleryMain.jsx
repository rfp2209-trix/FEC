/* eslint-disable max-len */
/* eslint-disable arrow-body-style */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */
/* eslint-disable object-curly-newline */
import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { HiMagnifyingGlassPlus } from 'react-icons/hi2';
import { FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa';
import { useProductsContext } from '../../Context.jsx';
import { useOverviewContext } from '../overviewContextWrapper.jsx';
import * as Styled from './imageGalleryMain.styles.js';

export default function ImageGalleryMain() {
  const { styleDetails, loading } = useProductsContext();
  const { styleId, setStyleId, mainPhoto, setMainPhoto, photoIndex, setPhotoIndex } = useOverviewContext();
  const ref = useRef(null);
  const [zoom, setZoom] = useState(true);
  const [allowMove, setAllowMove] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (!loading && styleDetails && styleId === 0) {
      const def_styleID = styleDetails.results[0].style_id;
      setStyleId(def_styleID);
    }
  });

  const styles = (!loading && styleDetails) ? styleDetails.results : [];
  const filteredStyles = styles.filter((style) => style.style_id === styleId);

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
  // TODO: Fix pan functionality -- removeEventListener not working
  // TODO: Fix photos not displaying correctly -- not centered
  // useEffect(() => {
  //   const element = ref.current;
  //   const listen = (event) => {
  //     element.style.backgroundPositionX = `${-event.offsetX}px`;
  //     element.style.backgroundPositionY = `${-event.offsetY}px`;
  //   };
  //   element.addEventListener('mousemove', listen);
  //   setAllowMove(!allowMove);
  //   return () => {
  //     element.removeEventListener('mousemove', listen);
  //   };
  // }, [zoom]);

  const handleRight = () => {
    setPhotoIndex((photoIndex) => photoIndex + 1);
  };
  const handleLeft = () => {
    setPhotoIndex((photoIndex) => photoIndex - 1);
  };
  const handleZoom = () => {
    setZoom(!zoom);
  };

  return (
    <Styled.MainImage>
      <FaArrowCircleRight onClick={handleRight} name="right" className="ar" aria-label="arrow right" />
      <FaArrowCircleLeft onClick={handleLeft} className="al" name="left" aria-label="arrow left" />
      <HiMagnifyingGlassPlus onClick={handleZoom} className="mag" aria-label="magnifying glass" />
      {!zoom ? <Styled.MainPhotoZoom photo={mainPhoto} ref={ref} /> : <Styled.MainPhotoDefault photo={mainPhoto} ref={ref} />}
    </Styled.MainImage>
  );
}
