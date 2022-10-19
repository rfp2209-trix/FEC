import React from 'react';
import styled from 'styled-components';

function WriteReview({ setCurrentForm }) {
  return (
    <WriteReviewContainer
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div>
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
      <div>
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
      <div> characteristic map, and radio buttons go here</div>
      <label htmlFor="write_summary">
        Review Summary:
        <br />
        <textarea id="write_summary" type="text" maxLength="60" placeholder="Example: Best purchase ever!" />
      </label>
      <label htmlFor="write_body">
        Review:
        <br />
        <textarea id="write_body" type="text" maxLength="100" minLength="50" placeholder="Why did you like the product or not?" />
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
          console.log();
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
