import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useProductsContext } from '../Context.jsx';
import WriteCharacteristic from './WriteCharacteristic.jsx';
import WriteRating from './WriteRating.jsx';
import { sumArray, avgStarValue } from '../../helpers.js';
import { DarkBG } from '../questionsAnswers/background.style.js';

function WriteReview({ setCurrentForm }) {
  const { reviewsMeta, reviewsSort, state, setState } = useProductsContext();
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
    <DarkBG>
      <WriteReviewContainer
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <WriteRating formData={formData} setFormData={setFormData} />
        <div
          onChange={(e) => {
            setFormData({ ...formData, recommend: e.target.value === 'true' });
          }}
        >
          <h4 style={{ margin: '0px' }}>Recommend Product?</h4>
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
          <h4 style={{ margin: '0px' }}>Review Summary:</h4>
          <textarea
            id="write_summary"
            type="text"
            maxLength="60"
            placeholder="Example: Best purchase ever!"
            rows="2"
            style={{ width: '380px', resize: 'none' }}
            onChange={(e) => {
              setFormData({ ...formData, summary: e.target.value === '' ? null : e.target.value });
            }}
          />
        </label>
        <label htmlFor="write_body" style={{ display: 'block' }}>
          <h4 style={{ margin: '0px' }}>Review:</h4>
          <textarea
            id="write_body"
            type="text"
            maxLength="100"
            minLength="50"
            placeholder="Why did you like the product or not?"
            rows="4"
            style={{ width: '380px', resize: 'none' }}
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
        <h4 style={{ margin: '0px' }}>Username:</h4>
          <input
            type="text"
            maxLength="60"
            placeholder="Example: jackson11!"
            style={{ width: '380px', resize: 'none' }}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value === '' ? null : e.target.value });
            }}
          />
        </label>
        <div> For privacy reasons, do not use your full name or email address </div>
        <label htmlFor="write_email" style={{ display: 'block' }}>
          <h4 style={{ margin: '0px' }}>Email:</h4>
          <input
            id="write_email"
            type="text"
            maxLength="60"
            placeholder="Example: jackson11@email.com"
            style={{ width: '380px', resize: 'none' }}
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
              .then((reviewsMetaGet) => {
                const newTotal = sumArray(Object.values(reviewsMetaGet.data.ratings));
                const newAvg = avgStarValue(reviewsMetaGet.data.ratings).toFixed(1);
                setState({
                  ...state,
                  reviewsMeta: reviewsMetaGet.data,
                  avgReview: newAvg,
                  totalReviews: newTotal,
                });
                return newTotal;
              })
              .then((total) => axios.get(`/fec/reviews/?product_id=${reviewsMeta.product_id}&sort=${reviewsSort}&count=${total}`))
              .then((reviewsGet) => setState({ ...state, reviews: reviewsGet.data }))
              .catch((err) => console.log(err));
            e.preventDefault();
          }}
        />
      </WriteReviewContainer>
    </DarkBG>
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
  width: 420px;
  height: auto;
  padding: 20px;
  background: #f0fff0;
  position: fixed
`;

const CharacteristicsContainer = styled.ul`
  list-style-type: none;
  padding: 0px 0px 0px 20px;
  margin: 0px;
`;
