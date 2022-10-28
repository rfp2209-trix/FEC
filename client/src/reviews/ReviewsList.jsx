import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReviewTile from './ReviewTile.jsx';
import { useProductsContext } from '../Context.jsx';
import {
  ReviewsListContainer,
  ReviewTileList,
  ReviewsListButton,
  ReviewsFlex,
  StyledSortSelect,
  StyledSearch,
} from './reviews.style.js';

function ReviewsList({ setCurrentForm, ratingsFilter }) {
  const {
    reviews,
    totalReviews,
    reviewsSort,
    setState,
    state,
    loading,
  } = useProductsContext();
  const [nReviewsDisplayed, setnReviewsDisplayed] = useState(2);
  const [reviewsDisplayed, setReviewsDisplayed] = useState([]);
  const [searchString, setSearchString] = useState('');
  let reviewListComponents = [];
  if (!loading) {
    if (searchString.length > 3 && ratingsFilter.some((isFiltered) => !!isFiltered)) {
      reviewListComponents = reviews.results.filter((review) => (
        !!ratingsFilter[review.rating]
        && (
          review.body.toLowerCase().includes(searchString)
          || review.summary.toLowerCase().includes(searchString)
        )
      ))
        .map((review) => <ReviewTile key={review.review_id} review={review} />);
    } else if (ratingsFilter.some((isFiltered) => !!isFiltered)) {
      reviewListComponents = reviews.results.filter((review) => !!ratingsFilter[review.rating])
        .map((review) => <ReviewTile key={review.review_id} review={review} />);
    } else if (searchString.length > 3) {
      reviewListComponents = reviews.results.filter((review) => (
        review.body.toLowerCase().includes(searchString)
        || review.summary.toLowerCase().includes(searchString)
      ))
        .map((review) => <ReviewTile key={review.review_id} review={review} />);
    } else {
      reviewListComponents = reviews.results.map((review) => (
        <ReviewTile key={review.review_id} review={review} />
      ));
    }
  }
  useEffect(() => setReviewsDisplayed(reviewListComponents), [
    loading,
    reviewsSort,
    ratingsFilter,
    searchString,
    reviews,
  ]);
  if (loading) {
    return (
      <div />
    );
  }
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
      <StyledSearch
        type="text"
        placeholder="keyword search"
        value={searchString}
        onChange={(e) => setSearchString(e.target.value.toLowerCase())}
      />
      {/* <button type="button">Search!</button> */}
      <ReviewTileList>
        {reviewsDisplayed.slice(0, nReviewsDisplayed)}
      </ReviewTileList>
      <ReviewsFlex>
        {nReviewsDisplayed < reviewsDisplayed.length && (
        <ReviewsListButton
          type="button"
          onClick={() => {
            if (nReviewsDisplayed < reviewsDisplayed.length) {
              const newDisplayedAmount = (nReviewsDisplayed + 2) > reviewsDisplayed.length ? (
                reviewsDisplayed.length
              ) : (
                nReviewsDisplayed + 2
              );
              setnReviewsDisplayed(newDisplayedAmount);
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
            setCurrentForm('new review');
            e.stopPropagation();
          }}
        >
          ADD A REVIEW ＋
        </ReviewsListButton>
      </ReviewsFlex>
    </ReviewsListContainer>
  );
}

export default ReviewsList;
