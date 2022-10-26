import React from 'react';
import styled from 'styled-components';
import Stars from '../reviews/Stars.jsx';

export default function OutfitListEntry({
  currentProduct, avgReview, OutfitStorage,
  setOutfitStorage, OutfitStorageIndex, setOutfitStorageIndex,
}) {
  const removeOutfitHandlder = () => {
    OutfitStorage.splice(OutfitStorageIndex[currentProduct.id], 1);
    delete OutfitStorageIndex[currentProduct.id];
    setOutfitStorage([...OutfitStorage]);
    setOutfitStorageIndex({ ...OutfitStorageIndex });
  };
  window.onstorage = (event) => {
    setOutfitStorage(JSON.parse(event.target.localStorage.OUTFIT_LIST));
    setOutfitStorageIndex(JSON.parse(event.target.localStorage.OUTFIT_LIST_INDEX));
  };

  return (
    <OutfitListEntryContainer>
      <aside>
        <OutfitListEntryImg image={currentProduct.styleDetails.results[0].photos[0].url ? currentProduct.styleDetails.results[0].photos[0].url : 'https://cdn.discordapp.com/attachments/1029469898327466074/1031996114372665495/could_not_find_image.png'} alt="product img" />
        <RemoveFromOutfitButtonContainer onClick={removeOutfitHandlder}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Black_close_x.svg/1024px-Black_close_x.svg.png" width="30px" height="30px" alt="star icon" />
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
  contain: content;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
`;

const OutfitListEntryImg = styled.div`
  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: cover;
  margin: auto;
  width: 258px;
  height: 258px;
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
