import React, { useState } from 'react';
import styled from 'styled-components';
import Card from './Card.jsx';
import ComparisonModal from './ComparisonModal.jsx';

export default function RelatedProductListEntry({
  name, category, price, rating, imgs, features, selectedProductInfo, currentProduct, styleDetails
}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  const img = imgs[0].photos[0].url ? imgs[0].photos[0].url
    : 'https://cdn.discordapp.com/attachments/1029469898327466074/1031996114372665495/could_not_find_image.png';
  return (
    <RelatedProductListEntryContainer>
      <ComparisonModal
        isOpen={isOpen}
        features={features}
        selectedProductFeatures={selectedProductInfo.features}
        selectedProductName={selectedProductInfo.name}
        comparedProductName={name}
        toggleModal={toggleModal}
      />
      <Card
        img={img}
        imgs={imgs}
        name={name}
        category={category}
        rating={rating}
        price={price}
        toggleModal={toggleModal}
        isOpen={isOpen}
        features={features}
        selectedProductInfo={selectedProductInfo}
        currentProduct={currentProduct}
        styleDetails={styleDetails}
      />
    </RelatedProductListEntryContainer>
  );
}

const RelatedProductListEntryContainer = styled.div`

  width:258px;
  height:370px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-left: 15px;
  margin-right: 15px;
`;
