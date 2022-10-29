import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useProductsContext } from '../Context.jsx';
import OutfitListEntry from './OutfitListEntry.jsx';
import { CarouselButtons, CarouselIcons } from './Carousel.style.js';

export default function OutfitList() {
  const {
    loading, productsInfo, styleDetails, avgReview,
  } = useProductsContext();
  const [OutfitStorage, setOutfitStorage] = useState([]);
  const [OutfitStorageIndex, setOutfitStorageIndex] = useState({});
  const [OutfitView, setOutfitView] = useState(OutfitStorage.slice(0, 4));
  const [LowerIndex, setLowerIndex] = useState(0);
  const [HigherIndex, setHigherIndex] = useState(4);

  window.onstorage = (event) => {
    setOutfitStorage(JSON.parse(event.target.localStorage.OUTFIT_LIST));
    setOutfitStorageIndex(JSON.parse(event.target.localStorage.OUTFIT_LIST_INDEX));
  };

  useEffect(() => {
    if (OutfitStorage && OutfitStorage.length >= HigherIndex) {
      setOutfitView(OutfitStorage.slice(LowerIndex, HigherIndex));
    } else {
      setOutfitView(OutfitStorage);
    }
  }, [OutfitStorage, LowerIndex, HigherIndex]);

  useEffect(() => {
    let localOutfitOnLoad = window.localStorage.getItem('OUTFIT_LIST');
    if (!JSON.parse(localOutfitOnLoad)) {
      window.localStorage.setItem('OUTFIT_LIST', JSON.stringify([]));
      localOutfitOnLoad = JSON.stringify([]);
    }
    setOutfitStorage(JSON.parse(localOutfitOnLoad));
  }, []);
  useEffect(() => {
    let localOutfitIndexOnLoad = window.localStorage.getItem('OUTFIT_LIST_INDEX');
    if (!JSON.parse(localOutfitIndexOnLoad)) {
      window.localStorage.setItem('OUTFIT_LIST_INDEX', JSON.stringify({}));
      localOutfitIndexOnLoad = JSON.stringify({});
    }
    setOutfitStorageIndex(JSON.parse(localOutfitIndexOnLoad));
  }, []);
  useEffect(() => {
    window.localStorage.setItem('OUTFIT_LIST', JSON.stringify([...OutfitStorage]));
    window.localStorage.setItem('OUTFIT_LIST_INDEX', JSON.stringify(OutfitStorageIndex));
  }, [OutfitStorage, OutfitStorageIndex]);

  const forwardClickHandler = () => {
    setLowerIndex(LowerIndex + 1);
    setHigherIndex(HigherIndex + 1);
  };

  const backwardClickHandler = () => {
    setLowerIndex(LowerIndex - 1);
    setHigherIndex(HigherIndex - 1);
  };

  const addCurrentProductHandler = () => {
    const localStorageOnLoad = JSON.parse(window.localStorage.getItem('OUTFIT_LIST'));
    const localStorageIndexOnLoad = JSON.parse(window.localStorage.getItem('OUTFIT_LIST_INDEX'));
    if (OutfitStorageIndex[productsInfo.id] === undefined) {
      productsInfo.styleDetails = styleDetails;
      localStorageOnLoad.push(productsInfo);
      setOutfitStorage([...localStorageOnLoad]);
      localStorageIndexOnLoad[productsInfo.id] = OutfitStorage.length;
      setOutfitStorageIndex(
        localStorageIndexOnLoad,
      );
    }
  };

  if (loading) {
    return <div />;
  }
  return (
    <>
      <OutfitTitleText>
        <h2>
          YOUR OUTFIT
        </h2>
      </OutfitTitleText>
      <OutfitListContainer id="OutfitList">
        <AddCurrentProductToOutfitContainer>
          ADD CURRENT PRODUCT
          <AddCurrentProductButton onClick={addCurrentProductHandler}>
            ➕
          </AddCurrentProductButton>
        </AddCurrentProductToOutfitContainer>
        {OutfitStorage[LowerIndex - 1]
        && (
        <CarouselButtons onClick={backwardClickHandler}>
          <CarouselIcons className="material-symbols-outlined">
            arrow_back
          </CarouselIcons>
        </CarouselButtons>
        )}
        {OutfitView.length > 0 && OutfitView.map((currentProduct) => (
          <OutfitListEntry
            currentProduct={currentProduct}
            styleDetails={styleDetails}
            avgReview={avgReview}
            key={currentProduct.name}
            OutfitStorage={OutfitStorage}
            setOutfitStorage={setOutfitStorage}
            OutfitStorageIndex={OutfitStorageIndex}
            setOutfitStorageIndex={setOutfitStorageIndex}

          />
        ))}
        {OutfitStorage[HigherIndex]
          && (
          <CarouselButtons onClick={forwardClickHandler}>
            <CarouselIcons className="material-symbols-outlined">
              arrow_right_alt
            </CarouselIcons>
          </CarouselButtons>
          )}
      </OutfitListContainer>
    </>
  );
}

const OutfitListContainer = styled.div`

width: 100%;
display: flex;
flex-direction: row;
flex-wrap: nowrap;

`;

const AddCurrentProductToOutfitContainer = styled.div`
  contain: content;
  width:150px;
  height:150px;
  text-align: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-left: 15px;
  margin-right: 15px;
`;

const AddCurrentProductButton = styled.button`
  font-size: 68px;
  display: flex
  align-items: center;
  justify-content: center;
`;

const OutfitTitleText = styled.div`
  margin: 10px;
`;
