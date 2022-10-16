import styled from 'styled-components';
import ProductsOverview from './overview/productsOverview/productsOverview.jsx';
import Reviews from './reviews/Reviews.jsx';
import WriteReview from './reviews/WriteReview.jsx';

export const Container = styled.section`
  display: flex;
  flex-direction:column;
  height: 100%;
`;

export const Header = styled.header`
 flex: none;
 top: 0;
 position: fixed;
 background: lightgrey;
 width: 100vw;
`;

export const ContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%
  background: white;
`;

export const OverviewContainer = styled(ProductsOverview)`

  width: 100vw;
  padding: 20px;
  display: flex;
  flex-direction: row;
  background: white;

`;

export const ReviewsContainer = styled(Reviews)`

  width: 100vw;
  padding: 20px;
  display: flex;
  flex-direction: row;
  background: white;
`;

export const WriteReviewContainer = styled(WriteReview)`

  width: 100vw;
  padding: 20px;
  display: flex;
  flex-direction: row;
  background: white;
`;

export const QuestionsContainer = styled.section`

  width: 100vw;
  padding: 20px;
  display: flex;
  flex-direction: row;
  background: white;
`;

export const RelatedProductsContainer = styled.section`

  width: 100vw;
  padding: 20px;
  display: flex;
  flex-direction: row;
  background: white;
`;

export const Footer = styled.footer`
 flex:none;
 bottom: 0;
 position: fixed;
 background: lightgrey;
 width: 100vw;
`;
