import styled from 'styled-components';
import ProductsOverview from './overview/productsOverview/productsOverview.jsx';
import Reviews from './reviews/Reviews.jsx';
import WriteReview from './reviews/WriteReview.jsx';

export const Container = styled.section`
  display: flex;
  height: 100%;
  margin: 10px;

`;

export const Header = styled.header`

  top: 0;
  position: fixed;
  background: lightgrey;
  width: 100vw;
  padding: 10px;



`;

export const ContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  border-style: solid;
  border-color: lightgrey;
  border-radius: 12px;
  height: 100%
  background: white;
  padding: 20px;
`;

export const OverviewContainer = styled(ProductsOverview)`

  // width: 100vw;
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
 padding: 10px;
`;
