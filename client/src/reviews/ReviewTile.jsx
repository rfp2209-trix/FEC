import React, { useState } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import Stars from './Stars.jsx';
import {
  StyledTile,
  FlexDiv,
  SummaryDiv,
  StyledButton,
} from './ReviewTile.styles.js';

function ReviewTile({ review }) {
  const [helpfulClicked, setHelpfulClicked] = useState(false);
  const [reportClicked, setReportClicked] = useState(false);
  if (reportClicked) {
    return <div />;
  }
  return (
    <StyledTile
      rating={review.rating}
      starSize="28px"
      data-testid="review-tile"
    >
      <FlexDiv styleFontSize="14px">
        <Stars />
        <div>
          {review.reviewer_name}
          ,&nbsp;
          {format(new Date(review.date), 'MMMM dd, yyyy')}
        </div>
      </FlexDiv>
      <SummaryDiv>{review.summary}</SummaryDiv>
      <div>{review.body}</div>
      {review.recommend && <div>✓ I recommended this product</div>}
      {!!review.response && <div>review.response</div>}
      <FlexDiv
        justify="start"
        styleFontSize="14px"
        gap="20px"
      >
        {helpfulClicked ? (
          <span>
            Helpful?&nbsp;
            <u>Yes</u>
            &nbsp;&#40;
            {review.helpfulness + 1}
            &#41;
          </span>
        ) : (
          <span>
            Helpful?&nbsp;
            <StyledButton
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
              Yes
            </StyledButton>
            &nbsp;&#40;
            {review.helpfulness}
            &#41;
          </span>
        )}
        <span>&#124;</span>
        <StyledButton
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
        </StyledButton>
      </FlexDiv>
    </StyledTile>
  );
}

export default ReviewTile;
