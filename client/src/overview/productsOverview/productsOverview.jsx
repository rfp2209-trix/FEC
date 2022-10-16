import React from 'react';
import ProductInformation from '../productInformation/productInformation.jsx';
import StyleSelector from '../styleSelector/styleSelector.jsx';
import Cart from '../cart/cart.jsx';
import * as Styled from './productsOverview.styles';
import { ImageGalleryContainer } from '../imageGallery/imageGallery.styles';

export default function ProductsOverview() {
  return (
    <Styled.OverviewContent>
      <div>
        <ProductInformation />
        <ImageGalleryContainer />
        <StyleSelector />
        <Cart />
      </div>
    </Styled.OverviewContent>
  );
}
