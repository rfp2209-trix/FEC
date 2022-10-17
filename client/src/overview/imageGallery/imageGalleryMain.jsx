/* eslint-disable object-curly-newline */
import React, { useState, useEffect } from 'react';
import { useProductsContext } from '../../Context.jsx';

export default function ImageGalleryMain() {
  const { results, state, setState, loading } = useProductsContext();
  const [mainPhoto, setMainPhoto] = useState('');

  const photos = (results) ? results[0].photos : [];

  if (!loading && mainPhoto === '') {
    setMainPhoto(photos[0].url);
  }

  return (
    <div>
      <img src={mainPhoto} alt="should be a pic here" />
    </div>
  );
}
