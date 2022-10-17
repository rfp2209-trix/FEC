/* eslint-disable react/prop-types */
import React from 'react';
import * as Styled from './imageGallery_thumbnails.styles.js';

export default function ImageGalleryThumbnails({ image }) {
  return (
    <Styled.ThumbsDetail>
      <Styled.ThumbImage src={image} alt="should be a pic here :(" />
    </Styled.ThumbsDetail>

  );
}
