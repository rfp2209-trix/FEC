import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import _ from 'underscore';
import { useProductsContext } from '../Context.jsx';
import OutfitListEntry from './OutfitListEntry.jsx';

export default function OutfitList() {
  const {
    loading, productsInfo, styleDetails, avgReview,
  } = useProductsContext();
  const [OutfitStorage, setOutfitStorage] = useState([]);
  const [OutfitStorageIndex, setOutfitStorageIndex] = useState({});
  useEffect(() => {
    let localOutfitOnLoad = window.localStorage.getItem('OUTFIT_LIST');
    if (!JSON.parse(localOutfitOnLoad)) {
      window.localStorage.setItem('OUTFIT_LIST', JSON.stringify([]));
      localOutfitOnLoad = window.localStorage.getItem('OUTFIT_LIST');
      localOutfitOnLoad = JSON.parse(localOutfitOnLoad);
    }
    setOutfitStorage(JSON.parse(localOutfitOnLoad));
  }, []);
  useEffect(() => {
    let localOutfitIndexOnLoad = window.localStorage.getItem('OUTFIT_LIST_INDEX');
    if (!JSON.parse(localOutfitIndexOnLoad)) {
      window.localStorage.setItem('OUTFIT_LIST_INDEX', JSON.stringify({}));
      localOutfitIndexOnLoad = window.localStorage.getItem('OUTFIT_LIST_INDEX');
      localOutfitIndexOnLoad = JSON.parse(localOutfitIndexOnLoad);
    }
    setOutfitStorageIndex(JSON.parse(localOutfitIndexOnLoad));
  }, []);
  useEffect(() => {
    window.localStorage.setItem('OUTFIT_LIST', JSON.stringify([...OutfitStorage]));
    window.localStorage.setItem('OUTFIT_LIST_INDEX', JSON.stringify(OutfitStorageIndex));
  }, [OutfitStorage, OutfitStorageIndex]);

  const addCurrentProductHandler = () => {
    if (OutfitStorageIndex[productsInfo.id] === undefined) {
      setOutfitStorage([...OutfitStorage, productsInfo]);
      setOutfitStorageIndex(
        OutfitStorageIndex,
        OutfitStorageIndex[productsInfo.id] = OutfitStorage.length,
      );
    }
  };

  if (loading) {
    return <div />;
  }
  return (
    <>
      <div style={{ margin: '10px', 'font-size': '20px' }}>
        Your Outfit
      </div>
      <OutfitListContainer>
        <AddCurrentProductToOutfitContainer>
          ADD TO OUTFIT
          <AddCurrentProductButton onClick={addCurrentProductHandler}>
            ➕
          </AddCurrentProductButton>
        </AddCurrentProductToOutfitContainer>
        {OutfitStorage.length > 0 && OutfitStorage.map((currentProduct) => (
          <OutfitListEntry
            currentProduct={currentProduct}
            styleDetails={styleDetails}
            avgReview={avgReview}
            key={currentProduct.name}
          />
        ))}
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
