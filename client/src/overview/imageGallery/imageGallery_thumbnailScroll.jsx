/* eslint-disable arrow-body-style */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { useProductsContext } from '../../Context.jsx';
import ImageGalleryThumbnails from './imageGallery_thumbnails.jsx';
import * as Styled from './imageGallery_thumbnails.styles';
import { ThumbnailContainer } from './imageGallery.styles.js';

export default function ImageGalleryThumbnailScroll() {
  const { results, loading } = useProductsContext();

  const photos = (results) ? results[0].photos : [];

  return (
    <div>
      <ThumbnailContainer>
        <Styled.ThumbnailDetailScroll>
          {!loading && photos.map((photo, index) => {
            return <ImageGalleryThumbnails key={index} image={photo.thumbnail_url} />;
          })}
        </Styled.ThumbnailDetailScroll>
      </ThumbnailContainer>
    </div>
  );
}
