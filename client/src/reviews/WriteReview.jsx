import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useProductsContext } from '../Context.jsx';
import WriteCharacteristic from './WriteCharacteristic.jsx';

function WriteReview({ setCurrentForm }) {
  const { reviewsMeta, state, setState } = useProductsContext();
  const { characteristics } = reviewsMeta;
  const [photos, setPhotos] = useState([]);
  const [formData, setFormData] = useState({
    product_id: Number(reviewsMeta.product_id),
    rating: null,
    recommend: null,
    summary: null,
    body: null,
    characteristics: {},
    name: null,
    email: null,
    photos: [],
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
      <h4 style={{ margin: '0px' }}>How was the product?</h4>
      <CharacteristicsContainer>
        {Object.keys(characteristics).map((char) => (
          <WriteCharacteristic
            char={char}
            charID={characteristics[char].id}
            formData={formData}
            setFormData={setFormData}
            key={char}
          />
        ))}
      </CharacteristicsContainer>
      <label htmlFor="write_summary" style={{ display: 'block' }}>
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
      <label htmlFor="write_body" style={{ display: 'block' }}>
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
      {photos}
      <button
        type="button"
        onClick={() => {
          setPhotos(photos.concat(<PhotoInput
            key={photos.length}
            inputKey={photos.length}
            formData={formData}
            setFormData={setFormData}
          />));
        }}
      >
        Add Photo
      </button>
      <label htmlFor="write_username" style={{ display: 'block' }}>
        Username:
        <br />
        <input
          type="text"
          maxLength="60"
          placeholder="Example: jackson11!"
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value === '' ? null : e.target.value });
          }}
        />
      </label>
      <div> For privacy reasons, do not use your full name or email address </div>
      <label htmlFor="write_email" style={{ display: 'block' }}>
        Email:
        <br />
        <input
          id="write_email"
          type="text"
          maxLength="60"
          placeholder="Example: jackson11@email.com"
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value === '' ? null : e.target.value });
          }}
        />
      </label>
      <input
        type="submit"
        value="Submit Review"
        onClick={(e) => {
          axios.post('/fec/reviews', formData)
            .then(() => {
              setCurrentForm('none');
              setFormData({
                product_id: Number(reviewsMeta.product_id),
                rating: null,
                recommend: null,
                summary: null,
                body: null,
                characteristics: {},
                name: null,
                email: null,
                photos: [],
              });
              return axios.get(`/fec/reviews/meta?product_id=${reviewsMeta.product_id}`);
            })
            .then((response) => setState({ ...state, reviewsMeta: response.data }))
            .catch((err) => console.log(err));
          e.preventDefault();
        }}

      />
    </WriteReviewContainer>
  );
}

function PhotoInput({ inputKey, formData, setFormData }) {
  const { photos } = formData;
  return (
    <input
      type="text"
      placeholder="photo URL here"
      style={{ display: 'block' }}
      onChange={(e) => {
        photos[inputKey] = e.target.value;
        setFormData({ ...formData });
      }}
    />
  );
}

export default WriteReview;

const WriteReviewContainer = styled.form`
  box-sizing: border-box;
  width: 380px;
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
