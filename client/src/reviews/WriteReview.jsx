import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useProductsContext } from '../Context.jsx';
import WriteCharacteristic from './WriteCharacteristic.jsx';
import WriteRating from './WriteRating.jsx';
import UploadPicture from './UploadPicWidget.jsx';
import {
  WarningText,
  WriteReviewContainer,
  CharacteristicsContainer,
  StyledTextArea,
  StyledInput,
  WriteReviewButton,
} from './WriteReview.styles.js';
import { ReviewImg } from './ReviewTile.styles.js';
import { sumArray, avgStarValue } from '../../helpers.js';
import { DarkBG } from '../questionsAnswers/background.style.js';

function WriteReview({ setCurrentForm }) {
  const {
    reviewsMeta,
    reviewsSort,
    state,
    setState,
  } = useProductsContext();
  const { characteristics } = reviewsMeta;
  const [unfilledCharacteristics, setUnfilledCharacteristics] = useState(false);
  const [validEmail, setValidEmail] = useState(true);
  const [validBody, setValidBody] = useState(true);
  const [formData, setFormData] = useState({
    product_id: Number(reviewsMeta.product_id),
    rating: '',
    recommend: '',
    summary: '',
    body: '',
    characteristics: {},
    name: '',
    email: '',
    photos: [],
  });
  useEffect(() => {
    if (formData.email.match(/[a-zA-Z0-9-_.!$#&]+@[a-zA-Z0-9-_]+\.[a-zA-Z0-9]{1,5}/) === null && formData.email !== '') {
      setValidEmail(false);
    } else {
      setValidEmail(true);
    }
  }, [formData.email]);
  const handleSubmit = () => {
    axios({
      url: '/fec/reviews',
      data: formData,
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
    })
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
      .catch((err) => {
        console.log(err);
        if (Object.keys(formData.characteristics).length
        < Object.keys(characteristics).length) {
          setUnfilledCharacteristics(true);
        }
        if (formData.email.length && formData.email.match(/[a-zA-Z0-9-_.!$#&]+@[a-zA-Z0-9-_]+\.[a-zA-Z0-9]+/) === null) {
          setValidEmail(false);
        }
        setFormData({
          product_id: Number(reviewsMeta.product_id),
          rating: formData.rating || null,
          recommend: formData.recommend === undefined ? null : formData.recommend,
          summary: formData.summary || null,
          body: formData.body || null,
          characteristics: { ...formData.characteristics },
          name: formData.name || null,
          email: formData.email || null,
          photos: [...formData.photos],
        });
      });
  };
  return (
    <DarkBG>
      <WriteReviewContainer
        onClick={(e) => {
          e.stopPropagation();
        }}
        onSubmit={(e) => {
          handleSubmit(e);
          e.preventDefault();
        }}
      >
        <WriteRating formData={formData} setFormData={setFormData} />
        <div
          onChange={(e) => {
            setFormData({ ...formData, recommend: e.target.value === 'true' });
          }}
        >
          <h4 style={{ margin: '0px' }}>Recommend Product?</h4>
          {formData.recommend === null && <WarningText>Please Make a Selection</WarningText>}
          <label htmlFor="yes_recommend">
            <input id="yes_recommend" type="radio" name="recommend" value="true" required />
            yes
          </label>
          <label htmlFor="no_recommend">
            <input id="no_recommend" type="radio" name="recommend" value="false" />
            no
          </label>
        </div>
        <h4 style={{ margin: '0px' }}>How was the product?</h4>
        {unfilledCharacteristics && <WarningText>Please describe the product</WarningText>}
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
        <h4 style={{ margin: '0px' }}>Review Summary:</h4>
        <StyledTextArea
          id="write_summary"
          type="text"
          maxLength="60"
          placeholder="Example: Best purchase ever!"
          rows="2"
          value={formData.summary}
          style={{ width: '380px', resize: 'none' }}
          onChange={(e) => {
            setFormData({ ...formData, summary: e.target.value === '' ? null : e.target.value });
          }}
        />
        <h4 style={{ margin: '0px' }}>Review:</h4>
        {(!validBody || formData.body === null)
        && <WarningText>Review must be at least 50 characters</WarningText>}
        <StyledTextArea
          id="write_body"
          type="text"
          maxLength="1000"
          minLength="50"
          placeholder="Why did you like the product or not?"
          rows="4"
          value={formData.body}
          onChange={(e) => {
            setFormData({
              ...formData,
              body: e.target.value === '' ? '' : e.target.value,
            });
            if (e.target.value.length < 50) {
              setValidBody(false);
            } else {
              setValidBody(true);
            }
          }}
          required
        />
        {formData.photos.map((photoLink) => (
          <ReviewImg
            src={`${photoLink}`}
            alt="[ERROR]"
            width="75px"
            height="50px"
            key={`${photoLink.slice(-10)}`}
          />
        ))}
        {formData.photos.length < 5 && (
          <UploadPicture
            formData={formData}
            setFormData={setFormData}
          />
        )}
        <h4 style={{ margin: '0px' }}>Username:</h4>
        {formData.name === null && <WarningText>Please enter a Username</WarningText>}
        <StyledInput
          type="text"
          maxLength="60"
          placeholder="Example: jackson11!"
          style={{ width: '380px', resize: 'none' }}
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value === '' ? null : e.target.value });
          }}
          value={formData.name}
          required
        />
        <div> For privacy reasons, do not use your full name or email address </div>
        <h4 style={{ margin: '0px' }}>Email:</h4>
        {!validEmail && (
        <WarningText>
          Please enter a fake email with format &ldquo;user@DomainName&rdquo;
        </WarningText>
        )}
        <StyledInput
          id="write_email"
          type="email"
          maxLength="60"
          placeholder="Example: jackson11@email.com"
          style={{ width: '380px', resize: 'none' }}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value === '' ? '' : e.target.value });
          }}
          value={formData.email}
          required
        />
        <WriteReviewButton
          type="submit"
        >
          Submit Review
        </WriteReviewButton>
      </WriteReviewContainer>
    </DarkBG>
  );
}

export default WriteReview;
