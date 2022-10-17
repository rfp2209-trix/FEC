import React from 'react';
import ProductInformation from '../productInformation/productInformation.jsx';
import StyleSelector from '../styleSelector/styleSelector.jsx';
import Cart from '../cart/cart.jsx';
import * as Styled from './productsOverview.styles';
import ImageGalleryThumbnailScroll from '../imageGallery/imageGallery_thumbnailScroll.jsx';
import ImageGalleryMain from '../imageGallery/imageGalleryMain.jsx';

export default function ProductsOverview() {
  return (
    <Styled.OverviewContent>
      <Styled.OverviewColumns>
        <Styled.ImageContainer>
          <ImageGalleryThumbnailScroll />
          <ImageGalleryMain />
        </Styled.ImageContainer>
        <Styled.ProductActivityContainer>
          <ProductInformation />
          <StyleSelector />
          <Cart />
        </Styled.ProductActivityContainer>
      </Styled.OverviewColumns>
    </Styled.OverviewContent>
  );
}
