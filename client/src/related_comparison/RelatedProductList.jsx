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
      <div style={{ margin: '10px', 'font-size': '20px' }}>
        Related Products
      </div>
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
