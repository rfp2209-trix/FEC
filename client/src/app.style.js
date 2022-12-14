import styled from 'styled-components';
import ProductsOverview from './overview/productsOverview/productsOverview.jsx';
// import Reviews from './reviews/Reviews.jsx';
// import WriteReview from './reviews/WriteReview.jsx';
import RelatedProductList from './related_comparison/RelatedProductList.jsx';
import OutfitList from './related_comparison/OutfitList.jsx';
import QA from './questionsAnswers/qa.jsx';

export const Container = styled.section`
  @media (max-width: 601px) {
    display: flex;
    flex-direction: row;
  }
  left: 0;
  display: flex;
  height: 100%;
  flex-direction: column;
  // flex-wrap: wrap;
  width:100%;
  font-family: 'Roboto Condensed', sans-serif;
  background-color: white;
`;

export const Header = styled.header`
  z-index: 100;
  padding-left: 20px;
  top: 0;
  left: 0;
  position: fixed;
  background: white;
  width: 100vw;
  min-height: 50px;
  border-bottom: solid;
  border-color: gray;

`;

export const OverviewContainer = styled(ProductsOverview)`
  left:0;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: white;
`;

// export const SectionBreakOne = styled.div`
//   flex-basis: 100%
//   height: 0;
// `;

export const RelatedProductListContainer = styled(RelatedProductList)`

  width: 100%;
  display: flex;
  flex-direction: column;

`;

export const OutfitListContainer = styled(OutfitList)`

  width: 100%;
  display: flex;
  flex-direction: column;

`;

// export const ReviewsContainer = styled(Reviews)`

// //   width: 100vw;
// //   padding: 20px;
// //   display: flex;
// //   flex-direction: column;
// //   background: white;
// //   flex: 1;
// // `;

// export const WriteReviewContainer = styled.div`

//   width: 100vw;
//   padding: 20px;
//   display: flex;
//   flex-direction: row;
//   background: white;
//   flex: 1;
// `;

export const QuestionsContainer = styled(QA)`
  justify-content: center;
  width: 100vw;
  padding: 20px;
  display: flex;
  flex-direction: row;
  background: white;
  align-items: center;
`;

// export const Footer = styled.footer`
//  display: flex;
//  left: 0;
//  bottom: 0;
//  position: fixed;
//  background: lightgrey;
//  width: 100vw;
//  padding: 10px;
// `;
