import React, { useState } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import Stars from './Stars.jsx';

function ReviewTile({ review }) {
  const [helpfulClicked, setHelpfulClicked] = useState(false);
  const [reportClicked, setReportClicked] = useState(false);
  if (reportClicked) {
    return <div />;
  }
  return (
    <li
      data-testid="review-tile"
      style={{
        '--rating': review.rating,
        '--star-size': '18px',
        fontSize: '18px',
      }}
    >
      <Stars />
      <div>{format(new Date(review.date), 'MMMM dd, yyyy')}</div>
      <b>{review.summary}</b>
      <div>{review.body}</div>
      <div>{review.recommend ? 'Recommended' : 'Not Recommended'}</div>
      <div>{review.reviewer_name}</div>
      <div>{!!review.response && review.response}</div>
      {helpfulClicked ? (
        <span>
          helpful
          &#40;
          {review.helpfulness + 1}
          &#41;
        </span>
      ) : (
        <button
          type="button"
          onClick={() => {
            axios.put(`/fec/reviews/${review.review_id}/helpful`)
              .then(() => {
                console.log('success');
                setHelpfulClicked(true);
              })
              .catch((err) => console.log(err));
          }}
        >
          helpful
          &#40;
          {review.helpfulness}
          &#41;
        </button>
      )}
      <button
        type="button"
        onClick={() => {
          axios.put(`/fec/reviews/${review.review_id}/report`)
            .then(() => {
              console.log('success');
              setReportClicked(true);
            })
            .catch((err) => console.log(err));
        }}
      >
        report
      </button>
    </li>
  );
}

export default ReviewTile;
