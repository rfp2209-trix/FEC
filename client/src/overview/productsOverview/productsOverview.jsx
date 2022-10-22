/* eslint-disable import/no-named-as-default */
import React from 'react';
import ProductInformation from '../productInformation/productInformation.jsx';
import StyleSelector from '../styleSelector/styleSelector.jsx';
import Cart from '../cart/cart.jsx';
// import { StarContainer } from '../starRating/starRating.styles.js';
import StarRating from '../starRating/starRating.jsx';
import AddInformation from '../addInformation/addInformation.jsx';
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
        <br style={{ width: '25px' }} />
        <Styled.ProductActivityContainer>
          <StarRating />
          <ProductInformation />
          <StyleSelector />
          <br />
          <Cart />
        </Styled.ProductActivityContainer>
      </Styled.OverviewColumns>
      <Styled.AddInformationContainer>
        <AddInformation />
      </Styled.AddInformationContainer>
    </Styled.OverviewContent>
  );
}
