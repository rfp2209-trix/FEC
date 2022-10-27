/* eslint-disable import/no-named-as-default */
import React, { lazy, Suspense } from 'react';
import ProductInformation from '../productInformation/productInformation.jsx';
import AddInformation from '../addInformation/addInformation.jsx';
import * as Styled from './productsOverview.styles';

const StarRating = lazy(() => import('../starRating/starRating.jsx'));
const ImageGalleryMain = lazy(() => import('../imageGallery/imageGalleryMain.jsx'));
const StyleSelector = lazy(() => import('../styleSelector/styleSelector.jsx'));
const Cart = lazy(() => import('../cart/cart.jsx'));
const ImageGalleryThumbnailScroll = lazy(() => import('../imageGallery/imageGallery_thumbnailScroll.jsx'));
const renderLoader = () => <div>Loading...</div>;

export default function ProductsOverview() {
  return (
    <Suspense fallback={renderLoader()}>
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
    </Suspense>
  );
}
