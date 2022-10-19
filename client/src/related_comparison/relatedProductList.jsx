import React from 'react';
import styled from 'styled-components';
import RelatedProductListEntry from './RelatedProductListEntry.jsx';
import { useProductsContext } from '../Context.jsx';

export default function RelatedProductList() {
  const { loading, relatedProductsInfo } = useProductsContext();
  console.log(relatedProductsInfo);
  if (loading) {
    return <div />;
  }
  return (
    <RelatedProductListContainer>
      {relatedProductsInfo.map((currProduct) => (
        <RelatedProductListEntry
          name={currProduct.name}
          category={currProduct.category}
          price={currProduct.default_price}
          rating={currProduct.averageRating}
          imgs={currProduct.results}
          key={currProduct.name}
        />
      ))}
    </RelatedProductListContainer>
  );
}

const RelatedProductListContainer = styled.div`

width: 100%;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
background: pink;

`;
