/* eslint-disable arrow-body-style */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { useProductsContext } from '../../Context.jsx';
import ImageGalleryThumbnails from './imageGallery_thumbnails.jsx';

export default function ImageGallery() {
  const [loading, setLoading] = useState(true);
  const { results } = useProductsContext();

  const photos = (results) ? results[0].photos : [];
  console.log(photos);

  if (!loading) {
    setLoading(false);
    return (
      <div>Loading....</div>
    );
  }

  return (
    <div>
      {photos.map((photo, index) => {
        return <ImageGalleryThumbnails key={index} image={photo.thumbnail_url} />;
      })}
    </div>
  );
}
