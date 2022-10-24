import React from 'react';
import styled from 'styled-components';
import RelatedProductListEntry from './RelatedProductListEntry.jsx';
import { useProductsContext } from '../Context.jsx';

export default function RelatedProductList() {
  const { loading, relatedProductsInfo, productsInfo } = useProductsContext();
  if (loading) {
    return <div />;
  }
  return (
    <div>
      <RelatedTitleText>
        Related Products
      </RelatedTitleText>

      <RelatedProductListContainer>
        {relatedProductsInfo.map((currProduct) => (
          <RelatedProductListEntry
            name={currProduct.name}
            category={currProduct.category}
            price={currProduct.default_price}
            rating={currProduct.averageRating}
            imgs={currProduct.results}
            features={currProduct.features}
            selectedProductInfo={productsInfo}
            key={currProduct.name}
            currentProduct={currProduct}
          />
        ))}
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
  font-size: 20px;
  margin: 10px;
`;
