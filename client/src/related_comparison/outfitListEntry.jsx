import React from 'react';
import styled from 'styled-components';
import Stars from '../reviews/Stars.jsx';

export default function OutfitListEntry({ currentProduct, styleDetails, avgReview }) {
  return (
    <OutfitListEntryContainer>
      <aside>
        <img src={styleDetails.results[0].photos[0].url} width="258x" height="258px" alt="product img" />
        <RemoveFromOutfitButtonContainer onClick={() => { console.log('yo'); }}>
          <img src="https://cdn.pixabay.com/photo/2015/01/17/11/45/star-602148_960_720.png" width="40px" height="40px" />
        </RemoveFromOutfitButtonContainer>
        <OutfitEntryText>
          {currentProduct.category}
        </OutfitEntryText>
        <OutfitEntryTitle>
          {currentProduct.name}
        </OutfitEntryTitle>
        <OutfitEntryPrice>
          $
          {currentProduct.default_price}
        </OutfitEntryPrice>
        <div className="Stars" style={{ '--rating': avgReview, '--star-size': '20px' }} aria-label={avgReview}>
          <Stars />
        </div>
      </aside>
    </OutfitListEntryContainer>
  );
}

const OutfitListEntryContainer = styled.div`
  width:258px;
  height:385px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  border: solid;
  margin-left: 15px;
  margin-right: 15px;
`;

const RemoveFromOutfitButtonContainer = styled.div`
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

const OutfitEntryTitle = styled.div`
  font-size: 24px;
  padding-bottom: 15px;
`;

const OutfitEntryText = styled.div`
  font-size: 16px;
`;

const OutfitEntryPrice = styled.div`
  font-size: 14px;
  padding-bottom: 6px;
`;
