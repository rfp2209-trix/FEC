/* eslint-disable import/prefer-default-export */
/* eslint-disable max-len */
import React, {useContext, createContext} from 'react';
import {
  productsInfo, styleDetails, relatedProductsInfo, totalReviews, avgReview, questionsData, reviewsMeta, reviews,
} from './mockContextData';

const mockValues = {
  productsInfo,
  styleDetails,
  reviewsMeta,
  reviews,
  avgReview,
  totalReviews,
  relatedProductsInfo,
  questionsData,
};

const MockTestContext = createContext(mockValues);

export function MockContext({ children }) {
  return <MockTestContext.Provider value={mockValues}>{children}</MockTestContext.Provider>;
}

export function useMockContext() {
  const context = useContext(MockTestContext);
  return context;
}
