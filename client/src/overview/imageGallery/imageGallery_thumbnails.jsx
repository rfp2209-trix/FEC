/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { HiOutlineCheckCircle } from 'react-icons/hi2';
import * as Styled from './imageGallery_thumbnails.styles.js';
import { useOverviewContext } from '../overviewContextWrapper.jsx';

export default function ImageGalleryThumbnails({ image, id, photoIdx }) {
  const { setStyleId, styleId, setMainPhoto, setPhotoIndex, photoIndex } = useOverviewContext();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(photoIdx === photoIndex);
  }, [photoIndex]);

  const handleThumbClick = () => {
    setMainPhoto('');
    setStyleId(id);
    setPhotoIndex(photoIdx);
    // console.log('photo-----', photoIndex)
  };
  return (
    <Styled.ThumbsDetail>
      <Styled.ThumbImage onClick={handleThumbClick} image={image} />
      {checked ? <HiOutlineCheckCircle className="thumbScrollCheckCircle" /> : null }
    </Styled.ThumbsDetail>
  );
}
