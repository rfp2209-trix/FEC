import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useProductsContext } from '../Context.jsx';
import OutfitListEntry from './OutfitListEntry.jsx';

export default function OutfitList() {
  const {
    loading, productsInfo, styleDetails, avgReview,
  } = useProductsContext();
  const [OutfitStorage, setOutfitStorage] = useState([]);
  useEffect(() => {
    let list = window.localStorage.getItem('OUTFIT_LIST');
    list = JSON.parse(list);
    if (!list) {
      window.localStorage.setItem('OUTFIT_LIST', JSON.stringify([]));
      list = window.localStorage.getItem('OUTFIT_LIST');
      list = JSON.parse(list);
    }
    window.localStorage.setItem('OUTFIT_LIST', JSON.stringify([...list, ...OutfitStorage]));
  }, [OutfitStorage]);
  useEffect(() => {
    const localListOnLoad = window.localStorage.getItem('OUTFIT_LIST');
    setOutfitStorage(JSON.parse(localListOnLoad));
  }, []);
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
          <AddCurrentProductButton onClick={() => setOutfitStorage([
            ...OutfitStorage,
            productsInfo,
          ])}
          >
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
