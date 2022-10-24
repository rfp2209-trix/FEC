import React from 'react';
import { useProductsContext } from '../../Context.jsx';

export default function AddInformation() {
  const { productsInfo } = useProductsContext();

  const productSlogan = (productsInfo) ? productsInfo.slogan : '';
  const productDescription = (productsInfo) ? productsInfo.description : '';

  return (
    <div>
      <h1>Additional Product Information</h1>
      <h2>{productSlogan}</h2>
      <h2>{productDescription}</h2>
    </div>
  );
}
