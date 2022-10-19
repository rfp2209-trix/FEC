import React from 'react';
import styled from 'styled-components';

function WriteReview({ setAddForm }) {
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
        <div> characteristic map, and radio buttons go here</div>
        <div>Review Summary: </div>
        <textarea type="text" maxLength="60" placeholder="Example: Best purchase ever!" />
        <div> Review: </div>
        <textarea type="text" maxLength="100" minLength="50" placeholder="Why did you like the product or not?" />
        <div> photo placeholder</div>
        <div>Username: </div>
        <input type="text" maxLength="60" placeholder="Example: jackson11!" />
        <div> For privacy reasons, do not use your full name or email address </div>
        <div>Email: </div>
        <input type="text" maxLength="60" placeholder="Example: jackson11@email.com" />
        <input
          type="submit"
          value="Submit Review"
          onClick={(e) => {
            e.preventDefault();
            setAddForm('none');
          }}
        />
      </div>
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
  position: absolute
`;
