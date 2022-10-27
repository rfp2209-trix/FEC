import React from 'react';
import { useProductsContext } from '../../Context.jsx';
import * as Styled from './addInformation.styles.js';
export default function AddInformation() {
  const { productsInfo } = useProductsContext();

  const productSlogan = (productsInfo) ? productsInfo.slogan : '';
  const productDescription = (productsInfo) ? productsInfo.description : '';

  return (

    <Styled.AdditionalInfoContainer data-testid="add-info-exists">
      <h1>Additional Product Information</h1>
      <div className="rows">
        <div />
        <p className="basic-text">
          {productSlogan}
          <br />
          {productDescription}
        </p>
      </div>
    </Styled.AdditionalInfoContainer>
  );
}
