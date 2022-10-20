import React, { useState } from 'react';
import styled from 'styled-components';
import { useProductsContext } from '../Context.jsx';
import WriteCharacteristic from './WriteCharacteristic.jsx';

function WriteReview({ setCurrentForm }) {
  const { reviewsMeta, state, setState } = useProductsContext();
  const { characteristics } = reviewsMeta;
  const [formData, setFormData] = useState({
    rating: null,
    recommend: null,
    summary: null,
    body: null,

  });
  return (
    <WriteReviewContainer
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div
        onChange={(e) => {
          setFormData({ ...formData, rating: Number(e.target.value) });
        }}
      >
        User Rating
        <label htmlFor="write_one_star">
          <input id="write_one_star" type="radio" name="write_rating" value="1" />
          1
        </label>
        <label htmlFor="write_two_star">
          <input id="write_two_star" type="radio" name="write_rating" value="2" />
          2
        </label>
        <label htmlFor="write_three_star">
          <input id="write_three_star" type="radio" name="write_rating" value="3" />
          3
        </label>
        <label htmlFor="write_four_star">
          <input id="write_four_star" type="radio" name="write_rating" value="4" />
          4
        </label>
        <label htmlFor="write_five_star">
          <input id="write_five_star" type="radio" name="write_rating" value="5" />
          5
        </label>
      </div>
      <div
        onChange={(e) => {
          setFormData({ ...formData, recommend: e.target.value === 'true' });
        }}
      >
        Recommend Product?
        <label htmlFor="yes_recommend">
          <input id="yes_recommend" type="radio" name="recommend" value="true" />
          yes
        </label>
        <label htmlFor="no_recommend">
          <input id="no_recommend" type="radio" name="recommend" value="false" />
          no
        </label>
      </div>
      <h3 style={{ margin: '0px' }}>How was the product?</h3>
      <CharacteristicsContainer>
        {Object.keys(characteristics).map((key) => (
          <WriteCharacteristic char={key} key={key} />
        ))}
      </CharacteristicsContainer>
      <label htmlFor="write_summary">
        Review Summary:
        <br />
        <textarea
          id="write_summary"
          type="text"
          maxLength="60"
          placeholder="Example: Best purchase ever!"
          onChange={(e) => {
            setFormData({ ...formData, summary: e.target.value === '' ? null : e.target.value });
          }}
        />
      </label>
      <label htmlFor="write_body">
        Review:
        <br />
        <textarea
          id="write_body"
          type="text"
          maxLength="100"
          minLength="50"
          placeholder="Why did you like the product or not?"
          onChange={(e) => {
            setFormData({ ...formData, body: e.target.value.length <= 50 ? null : e.target.value });
          }}
        />
      </label>
      <div> photo placeholder</div>
      <label htmlFor="write_username">
        Username:
        <br />
        <input type="text" maxLength="60" placeholder="Example: jackson11!" />
      </label>
      <div> For privacy reasons, do not use your full name or email address </div>
      <label htmlFor="write_email">
        Email:
        <br />
        <input id="write_email" type="text" maxLength="60" placeholder="Example: jackson11@email.com" />
      </label>
      <br />
      <input
        type="submit"
        value="Submit Review"
        onClick={(e) => {
          e.preventDefault();
          console.log("WE ARE HERE", document.querySelector('input[name="recommend"]:checked').value === 'true');
          const reviewRating = document.querySelector('input[name="write_rating"]:checked').value;
          const reviewRecommended = document.querySelector('input[name="recommend"]:checked').value === 'true';
          //const
          setCurrentForm('none');
        }}
      />
    </WriteReviewContainer>
  );
}

export default WriteReview;

const WriteReviewContainer = styled.form`

  width: 60vw;
  height: 60vh;
  left: 20%;
  top: 20%;
  padding: 20px;
  background: #FF0000;
  position: fixed
`;

const CharacteristicsContainer = styled.ul`
  list-style-type: none;
  padding: 0px 0px 0px 20px;
  margin: 0px;
`;
