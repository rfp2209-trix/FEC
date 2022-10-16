import React from 'react';
import ProductInformation from '../productInformation/productInformation.jsx';
import StyleSelector from '../styleSelector/styleSelector.jsx';
import Cart from '../cart/cart.jsx';
import * as Styled from './productsOverview.styles';
import ImageGallery from '../imageGallery/imageGallery.jsx'

export default function ProductsOverview() {
  return (
    <Styled.OverviewContent>
      <div>
        <ProductInformation />
        <ImageGallery />
        <StyleSelector />
        <Cart />
      </div>
    </Styled.OverviewContent>
  );
}
