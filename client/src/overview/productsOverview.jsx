import React from 'react';
import ProductInformation from './productInformation.jsx';
import ImageGallery from './imageGallery.jsx';
import StyleSelector from './styleSelector.jsx';
import Cart from './cart.jsx';

export default function ProductsOverview() {
  return (
    <div>
      <h1 id="products-overview">Products Overview</h1>
      <ProductInformation />
      <ImageGallery />
      <StyleSelector />
      <Cart />
    </div>
  );
}
