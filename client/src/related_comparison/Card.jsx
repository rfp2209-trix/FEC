import React, { useState } from 'react';
import styled from 'styled-components';
import Stars from '../reviews/Stars.jsx';
import ComparisonModal from './ComparisonModal.jsx';

export default function Card({
  category, name, price, rating, img, toggleModal, isOpen,
}) {
  return (
    <CardContainer>
      <aside>
        <img src={img} width="258x" height="258px" alt="product img" />
        <CompareButtonContainer onClick={toggleModal}>
          <img src="https://static.thenounproject.com/png/141961-200.png" width="25px" height="25px" />
        </CompareButtonContainer>
        <FavoriteButtonContainer onClick={() => { console.log('yo'); }}>
          <img src="https://cdn.pixabay.com/photo/2015/01/17/11/45/star-602148_960_720.png" width="40px" height="40px" />
        </FavoriteButtonContainer>
        <CardText>
          {category}
        </CardText>
        <CardTitle>
          {name}
        </CardTitle>
        <CardPrice>
          $
          {price}
        </CardPrice>
        <div className="Stars" style={{ '--rating': rating, '--star-size': '20px' }} aria-label={rating}>
          <Stars />
        </div>
      </aside>
    </CardContainer>
  );
}
const CardContainer = styled.div`
  contain: content;
  margin: 0px;
  padding: 0px;

`;

const CompareButtonContainer = styled.div`
position: absolute;
height: 25px;
width: 25px;
top: 5%;
right 0%;
transform: translate(-50%, -50%);
-ms-transform: translate(-50%, -50%);
font-size: 16px;
cursor: pointer;
border-radius: 5px;
`;

const FavoriteButtonContainer = styled.div`
position: absolute;
height: 25px;
width: 25px;
top: 3%;
left 5%;
transform: translate(-50%, -50%);
-ms-transform: translate(-50%, -50%);
font-size: 16px;
cursor: pointer;
border-radius: 5px;
`;

const CardTitle = styled.div`
  font-size: 24px;
  padding-bottom: 15px;
`;

const CardText = styled.div`
  font-size: 16px;
`;

const CardPrice = styled.div`
  font-size: 14px;
  padding-bottom: 6px;
`;
