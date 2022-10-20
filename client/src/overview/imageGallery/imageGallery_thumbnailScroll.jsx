/* eslint-disable arrow-body-style */
/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { useProductsContext } from '../../Context.jsx';
import { useOverviewContext } from '../overviewContextWrapper.jsx';
import ImageGalleryThumbnails from './imageGallery_thumbnails.jsx';
import * as Styled from './imageGallery_thumbnails.styles';
import { ThumbnailContainer } from './imageGallery.styles.js';

export default function ImageGalleryThumbnailScroll() {
  const { styleDetails, loading } = useProductsContext();
  const {
    styleId, setStyleId, sideScroll, setSideScroll,
  } = useOverviewContext();

  useEffect(() => {
    if (!loading && styleDetails) {
      const def_styleID = styleDetails.results[0].style_id;
      setStyleId(def_styleID);
      console.log('ID', styleId);
    }
  });

  const styles = (!loading && styleDetails) ? styleDetails.results : [];
  const filteredStyles = styles.filter((style) => style.style_id === styleId);

  useEffect(() => {
    if (filteredStyles.length > 0 && sideScroll === '') {
      const imageReel = filteredStyles[0].photos;
      setSideScroll(imageReel);
    }
  });

  // const photos = (styleDetails) ? styleDetails.results[0].photos : [];

  return (
    <div>
      <ThumbnailContainer>
        <Styled.ThumbnailDetailScroll>
          {sideScroll && sideScroll.map((photo, index) => {
            return <ImageGalleryThumbnails key={index} image={photo.thumbnail_url} />;
          })}
        </Styled.ThumbnailDetailScroll>
      </ThumbnailContainer>
    </div>
  );
}
