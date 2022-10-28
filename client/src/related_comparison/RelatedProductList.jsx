import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import RelatedProductListEntry from './RelatedProductListEntry.jsx';
import { useProductsContext } from '../Context.jsx';
import { CarouselButtons, CarouselIcons } from './Carousel.style.js';

export default function RelatedProductList() {
  const {
    loading, relatedProductsInfo, productsInfo, styleDetails,
  } = useProductsContext();
  const [RelatedProductsView, setRelatedProductsView] = useState([]);
  const [LowerIndex, setLowerIndex] = useState(0);
  const [HigherIndex, setHigherIndex] = useState(4);
  useEffect(() => {
    if (relatedProductsInfo && relatedProductsInfo.length >= HigherIndex) {
      setRelatedProductsView(relatedProductsInfo.slice(LowerIndex, HigherIndex));
    } else {
      setRelatedProductsView(relatedProductsInfo || []);
    }
  }, [relatedProductsInfo, LowerIndex, HigherIndex]);

  const forwardClickHandler = () => {
    setLowerIndex(LowerIndex + 1);
    setHigherIndex(HigherIndex + 1);
  };

  const backwardClickHandler = () => {
    setLowerIndex(LowerIndex - 1);
    setHigherIndex(HigherIndex - 1);
  };
  if (loading) {
    return <div />;
  }
  return (
    <div>
      <RelatedTitleText>
        <h2>RELATED PRODUCTS</h2>
      </RelatedTitleText>

      <RelatedProductListContainer id="related-items">
        {relatedProductsInfo[LowerIndex - 1]
        && (
        <CarouselButtons onClick={backwardClickHandler}>
          <CarouselIcons className="material-symbols-outlined">
            arrow_back
          </CarouselIcons>
        </CarouselButtons>
        )}
        {RelatedProductsView.length > 0 ? RelatedProductsView.map((currProduct) => (
          <RelatedProductListEntry
            id="related-items-entry"
            name={currProduct.name}
            category={currProduct.category}
            price={currProduct.default_price}
            rating={currProduct.averageRating}
            imgs={currProduct.results}
            features={currProduct.features}
            selectedProductInfo={productsInfo}
            key={currProduct.name}
            currentProduct={currProduct}
            styleDetails={styleDetails}
          />
        ))
          : <h1> NO RELATED ITEMS </h1>}
        {relatedProductsInfo[HigherIndex]
          && (
          <CarouselButtons onClick={forwardClickHandler}>
            <CarouselIcons className="material-symbols-outlined">
              arrow_right_alt
            </CarouselIcons>
          </CarouselButtons>
          )}
      </RelatedProductListContainer>
    </div>
  );
}

const RelatedProductListContainer = styled.div`

width: 100%;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
`;

const RelatedTitleText = styled.div`
  margin: 10px;
`;
