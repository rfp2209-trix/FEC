/* eslint-disable react/prop-types */
import React from 'react';
import * as Styled from './imageGallery_thumbnails.styles.js';
import { useOverviewContext } from '../overviewContextWrapper.jsx';


export default function ImageGalleryThumbnails({ image, id }) {
  const { setStyleId, setMainPhoto } = useOverviewContext();

  const handleThumbClick = () => {
    setMainPhoto('');
    setStyleId(id);
  };
  return (
    <div>
      <Styled.ThumbsDetail />
      <Styled.ThumbImage onClick={handleThumbClick} src={image} alt="fashion pic" />
    </div>
  );
}
