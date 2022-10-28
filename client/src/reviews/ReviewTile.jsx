import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import { DarkBG } from '../questionsAnswers/background.style.js';
import { useProductsContext } from '../Context.jsx';
import Stars from './Stars.jsx';
import {
  StyledTile,
  TileFlex,
  SummaryDiv,
  StyledButton,
  ReviewImg,
  StyledResponse,
  ModalImg,
  NoStyleButton,
} from './ReviewTile.styles.js';

function ReviewTile({ review }) {
  const [helpfulClicked, setHelpfulClicked] = useState(false);
  const [pictureClicked, setPictureClicked] = useState(null);
  const [moreReview, setMoreReview] = useState(false);
  const {
    reviewsSort,
    totalReviews,
    reviewsMeta,
    state,
    setState,
  } = useProductsContext();
  const photoElements = review.photos.map((photo) => (
    <ReviewImg
      key={photo.id}
      src={photo.url}
      alt="[Nothing Here]"
      onClick={() => setPictureClicked(photo.url)}
    />
  ));
  useEffect(() => {
    if (review.body.length > 250) {
      setMoreReview(true);
    }
  }, []);
  return (
    <StyledTile
      rating={review.rating}
      starSize="28px"
      data-testid="review-tile"
    >
      <TileFlex styleFontSize="14px">
        <Stars />
        <div>
          {review.reviewer_name}
          ,&nbsp;
          {format(new Date(review.date), 'MMMM dd, yyyy')}
        </div>
      </TileFlex>
      <SummaryDiv>{review.summary}</SummaryDiv>
      <div style={{ overflowWrap: 'break-word' }}>
        {moreReview && review.body.slice(0, 250)}
        {moreReview && <NoStyleButton type="button" onClick={() => setMoreReview(false)}>show more...</NoStyleButton>}
        {!moreReview && review.body}
      </div>
      <div>
        {photoElements}
      </div>
      {review.recommend && <div>✓ I recommended this product</div>}
      {!!review.response && (
        <StyledResponse>
          <b>
            Response:
          </b>
          <br />
          {review.response}
        </StyledResponse>
      )}
      <TileFlex
        justify="start"
        styleFontSize="14px"
        gap="20px"
      >
        {helpfulClicked ? (
          <span>
            Helpful?&nbsp;
            <u>Yes</u>
            &nbsp;&#40;
            {review.helpfulness}
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
                    return axios.get(`/fec/reviews/?product_id=${reviewsMeta.product_id}&count=${totalReviews}&sort=${reviewsSort}`);
                  })
                  .then((getResponse) => {
                    setState({ ...state, reviews: getResponse.data });
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
              .then(() => (
                axios.get(`/fec/reviews/?product_id=${reviewsMeta.product_id}&count=${totalReviews}&sort=${reviewsSort}`)
              ))
              .then((getResponse) => setState({ ...state, reviews: getResponse.data }))
              .catch((err) => console.log(err));
          }}
        >
          report
        </StyledButton>
      </TileFlex>
      {pictureClicked !== null && (
      <DarkBG
        onClick={() => setPictureClicked(null)}
      >
        <ModalImg src={pictureClicked} alt="[Nothing Here]" />
      </DarkBG>
      )}
    </StyledTile>
  );
}

export default ReviewTile;
