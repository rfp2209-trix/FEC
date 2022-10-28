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
    <OutfitListEntryContainer href={`?product_id=${currentProduct.id}`}>
      <aside>
        <OutfitListEntryImg image={currentProduct.styleDetails.results[0].photos[0].url ? currentProduct.styleDetails.results[0].photos[0].url : 'https://cdn.discordapp.com/attachments/1029469898327466074/1031996114372665495/could_not_find_image.png'} alt="product img" />
        <RemoveFromOutfitButtonContainer onClick={(e) => {
          e.preventDefault(); removeOutfitHandlder();
        }}
        >
          <span className="material-symbols-outlined">
            close
          </span>
        </RemoveFromOutfitButtonContainer>
        <OutfitEntryText>
          {currentProduct.category}
          <OutfitEntryTitle>
            {currentProduct.name}
          </OutfitEntryTitle>
          <OutfitEntryPrice>
            $
            {currentProduct.default_price}
          </OutfitEntryPrice>
        </OutfitEntryText>
        <div className="Stars" style={{ '--rating': avgReview, '--star-size': '20px' }} aria-label={avgReview}>
          <Stars />
        </div>
      </aside>
    </OutfitListEntryContainer>
  );
}

const OutfitEntryTitle = styled.div`
  font-size: 20px;
  padding-bottom: 5px;
`;

const OutfitEntryPrice = styled.div`
  font-size: 14px;
  padding-bottom: 14px;
`;

const OutfitEntryText = styled.div`
  font-size: 14px;
  padding-top: 5px;
  padding-bottom: 8px;
  margin-left: 3px;
  :hover {
     color: #c9620b;
    }
    `;

const OutfitListEntryImg = styled.div`
  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: cover;
  margin: auto;
  width: 258px;
  height: 258px;
  transition: 0.3s;
  &:hover ${OutfitEntryText} {
      color: #c9620b;
    }
  `;

const OutfitListEntryContainer = styled.a`
  color: black;
  text-decoration: none;
  width:258px;
  height:370px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-left: 15px;
  margin-right: 15px;
  contain: content;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  border-radius: 6px;
  :hover ${OutfitListEntryImg} {
      -webkit-transform: scale(1.03);
      -ms-transform: scale(1.03);
      zoom: scale(1.03);
      transition: 0.25s ease;
    }
`;

const RemoveFromOutfitButtonContainer = styled.div`
  position: absolute;
  height: 25px;
  width: 25px;
  top: 3%;
  left 3%;
  font-size: 16px;
    cursor: pointer;
    border-radius: 6px;
    :hover {
      color: #c9620b;
    }
`;
