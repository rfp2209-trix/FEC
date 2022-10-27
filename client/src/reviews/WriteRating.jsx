import React from 'react';
import { IoStarSharp } from 'react-icons/io5';

export default function WriteRating({ formData, setFormData }) {
  const setRatingOnClick = (userRating) => {
    // setRating(userRating);
    setFormData({ ...formData, rating: userRating });
  };
  const ratingButtons = [1, 2, 3, 4, 5].map((digit) => (
    <IoStarSharp
      key={digit}
      style={{ color: digit <= formData.rating ? '#fc0' : '#acc8d7', fontSize: '18px' }}
      onClick={() => setRatingOnClick(digit)}
    />
  ));
  return (
    <div>
      <h4 style={{ margin: 0 }}>How would you rate the Product?</h4>
      {ratingButtons}
      &nbsp;
      {formData.rating && [null, 'Poor', 'Fair', 'Average', 'Good', 'Great'][formData.rating]}
    </div>
  );
}
