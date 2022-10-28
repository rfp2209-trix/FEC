import React, { useEffect, useRef } from 'react';
import { WriteReviewButton } from './WriteReview.styles.js';

export default function UploadPicture({
  formData,
  setFormData,
}) {
  let { photos } = formData;
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget({
      cloudName: 'hrfec',
      uploadPreset: 'reviewpic',
    }, (error, result) => {
      if (result.event === 'queues-end') {
        photos = [...photos, result.info.files[0].uploadInfo.secure_url];
        setFormData({ ...formData, photos });
        if (photos.length === 5) {
          widgetRef.current.close();
        }
      }
    });
  }, []);
  return (
    <WriteReviewButton
      type="button"
      onClick={() => widgetRef.current.open()}
    >
      Add Photos
    </WriteReviewButton>
  );
}
