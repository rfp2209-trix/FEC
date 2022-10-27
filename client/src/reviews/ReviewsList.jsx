import React, { useState } from 'react';
import axios from 'axios';
import ReviewTile from './ReviewTile.jsx';
import { useProductsContext } from '../Context.jsx';
import {
  ReviewsListContainer,
  ReviewTileList,
  ReviewsListButton,
  ReviewsFlex,
  StyledSortSelect,
} from './reviews.style.js';

function ReviewsList({ setCurrentForm }) {
  const {
    reviews,
    totalReviews,
    reviewsSort,
    setState,
    state,
    loading,
  } = useProductsContext();
  const [reviewsDisplayed, setReviewsDisplayed] = useState(2);
  if (loading) {
    return (
      <div />
    );
  }
  const reviewListComponents = reviews.results.map((review) => (
    <ReviewTile key={review.review_id} review={review} />
  ));
  return (
    <ReviewsListContainer id="review_list">
      <label htmlFor="sort_by">
        <b style={{ fontSize: '18px' }}>
          {totalReviews}
          &nbsp;reviews, sorted by&nbsp;
        </b>
        <StyledSortSelect
          value={reviewsSort}
          data-testid="sort-select"
          id="select_sort"
          name="sort_by"
          onChange={(event) => {
            const newSort = event.target.value;
            axios.get(`/fec/reviews?product_id=${reviews.product}&count=${totalReviews}&sort=${newSort}`)
              .then((apiResponse) => {
                setState({
                  ...state,
                  reviewsSort: newSort,
                  reviews: apiResponse.data,

                });
              })
              .catch((err) => console.log(err));
          }}
        >
          <option value="relevent">Relevent</option>
          <option value="helpful">Helpful</option>
          <option value="newest">Newest</option>
        </StyledSortSelect>
      </label>
      <input type="text" placeholder="keyword search (low priority)" />
      <button type="button">Search!</button>
      <ReviewTileList>
        {reviewListComponents.slice(0, reviewsDisplayed)}
      </ReviewTileList>
      <ReviewsFlex>
        {reviewsDisplayed < reviewListComponents.length && (
        <ReviewsListButton
          type="button"
          onClick={() => {
            if (reviewsDisplayed < reviewListComponents.length) {
              const newDisplayedAmount = (reviewsDisplayed + 2) > reviewListComponents.length ? (
                reviewListComponents.length
              ) : (
                reviewsDisplayed + 2
              );
              setReviewsDisplayed(newDisplayedAmount);
            }
          }}
        >
          MORE REVIEWS
        </ReviewsListButton>
        )}
        <ReviewsListButton
          data-testid="more-reviews"
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setCurrentForm('new review');
          }}
        >
          ADD A REVIEW ＋
        </ReviewsListButton>
      </ReviewsFlex>
    </ReviewsListContainer>
  );
}

export default ReviewsList;
