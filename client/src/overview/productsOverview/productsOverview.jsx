import React from 'react';
import ProductInformation from '../productInformation/productInformation.jsx';
import ImageGallery from '../imageGallery/imageGallery.jsx';
import StyleSelector from '../styleSelector/styleSelector.jsx';
import Cart from '../cart/cart.jsx';

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
