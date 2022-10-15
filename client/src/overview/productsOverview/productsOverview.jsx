import React from 'react';
import ProductInformation from '../productInformation/productInformation.jsx';
import ImageGallery from '../imageGallery/imageGallery.jsx';
import StyleSelector from '../styleSelector/styleSelector.jsx';
import Cart from '../cart/cart.jsx';
import * as Styled from './productsOverview.styles';

export default function ProductsOverview() {
  return (
    <Styled.OverviewContent>
      <div>
        <h1 id="products-overview">Products Overview</h1>
        <ProductInformation />
        <ImageGallery />
        <StyleSelector />
        <Cart />
      </div>
    </Styled.OverviewContent>
  );
}
