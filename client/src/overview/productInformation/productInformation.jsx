import React from 'react';
import { useProductsContext } from '../../Context.jsx';
import * as Styled from './productInformation.styles.js';

export default function ProductInformation() {
  const { productsInfo, loading } = useProductsContext();

  if (loading && !productsInfo) {
    return <div>Loading</div>;
  }

  return (

    <Styled.ProductInformationContainer data-testid="product-info-exists">
      <h2>{productsInfo.category}</h2>
      <h1>{productsInfo.name}</h1>
    </Styled.ProductInformationContainer>
  );
}
