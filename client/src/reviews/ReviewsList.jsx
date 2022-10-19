import React from 'react';
import axios from 'axios';
import ReviewTile from './ReviewTile.jsx';
import { useProductsContext } from '../Context.jsx';

function ReviewsList({ setCurrentForm }) {
  const { reviews, totalReviews, setState, state, loading } = useProductsContext();

  if (loading) {
    return (
      <div />
    );
  }
  const reviewListComponents = reviews.results.map((review) => (
    <ReviewTile key={review.review_id} review={review} />
  ));
  return (
    <div>
      <label htmlFor="sort_by">
        {totalReviews}
        &nbsp;reviews, sorted by&nbsp;
        <select
          id="select_sort"
          name="sort_by"
          onChange={(event) => {
            axios.get(`/fec/reviews?product_id=${reviews.product}&count=2&sort=${event.target.value.toLowerCase()}`)
              .then((apiResponse) => {
                setState({
                  ...state,
                  reviews: apiResponse.data,
                });
              })
              .catch((err) => console.log(err));
          }}
        >
          <option value="Relevent">Relevent</option>
          <option value="Helpful">Helpful</option>
          <option value="Newest">Newest</option>
        </select>
      </label>
      <input type="text" placeholder="keyword search (low priority)" />
      <button type="button">Search!</button>
      <ol>
        {reviewListComponents}
      </ol>
      {totalReviews > reviewListComponents.length && (
        <button
          type="button"
          onClick={() => {
            console.log(reviews.page)
            axios.get(`/fec/reviews?product_id=${reviews.product}&count=2&sort=${document.getElementById('select_sort').value.toLowerCase()}&page=${reviews.page ? ((reviews.page / 2) + 2) : 2}`)
              .then((apiResponse) => {
                reviews.page = apiResponse.data.page;
                reviews.results.push(...apiResponse.data.results);
                setState({
                  ...state,
                });
              })
              .catch((err) => console.log(err));
          }}
        >
          MORE REVIEWS
        </button>
      )}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setCurrentForm('new review');
        }}
      >
        ADD REVIEW
      </button>
    </div>
  );
}

export default ReviewsList;
