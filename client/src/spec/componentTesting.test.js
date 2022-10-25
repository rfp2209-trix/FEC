/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/self-closing-comp */
import { render, screen } from '@testing-library/react';
import React from 'react';
import { expect, jest, test } from '@jest/globals';
import renderer from 'react-test-renderer';
import App from '../app.jsx';
import Reviews from '../reviews/Reviews.jsx';
import RatingsBreakdown from '../reviews/RatingsBreakdown.jsx';
import ImageGalleryMain from '../overview/imageGallery/imageGalleryMain.jsx';
import { MockContext, useMockContext, MockTestContext } from './mockContext.jsx';
import * as Context from '../Context.jsx';
import * as mockData from './mockContextData.js';
import ImageGalleryThumbnails from '../overview/imageGallery/imageGallery_thumbnails.jsx';
import RelatedProductList from '../related_comparison/RelatedProductList.jsx';
import QA from '../questionsAnswers/qa.jsx';

console.log(mockData);
beforeEach(() => {
  // uncomment the next func if using App to render
  // const spy = jest.spyOn(Context, 'Context').mockImplementation(({ children }) => <MockContext>{children}</MockContext>);
  const useContextSpy = jest.spyOn(Context, 'useProductsContext').mockImplementation(useMockContext);
});

// describe('App tests', () => {
//   it('should contain alt text in an img tag', () => {
//     render(<MockContext><ImageGalleryThumbnails /></MockContext>);
//     const heading = screen.getByAltText('fashion pic');
//     expect(heading).toBeInTheDocument();
//   });
//   it('should contain alt text', () => {
//     render(<MockContext><ImageGalleryMain /></MockContext>);
//     const text = screen.getByAltText('should be a pic here');
//     expect(text).toBeInTheDocument();
//   });
// });

describe('Ratings & Reviews tests', () => {
  it('should contain ratings and reviews in a header', () => {
    render(<MockContext><Reviews /></MockContext>);
    const heading = screen.getByText('RATINGS & REVIEWS');
    expect(heading).toBeInTheDocument();
  });
  it('should render average review score', () => {
    const mockCopy = { ...mockData };
    mockCopy.avgReview = 3.6;
    render(<MockTestContext.Provider value={mockCopy}><RatingsBreakdown /></MockTestContext.Provider>);
    const avgReview = screen.getByText('3.6');
    expect(avgReview).toBeInTheDocument();
  });
});

describe('Questions & Answers Tests', () => {
  it('should exist on the page', () => {
    render(<MockContext><QA /></MockContext>);
    const heading = screen.getByText('Questions & Answers');
    expect(heading).toBeInTheDocument();
  });
  // it('should display only 2 questions on render', () => {
  //   render(<MockContext><QA /></MockContext>);
});
describe('Related & Comparison tests', () => {
  it('should contain related and comparison in a header', () => {
    const mockCopy = { ...mockData };
    mockCopy.relatedProductsInfo = [mockData.relatedProductsInfo];
    console.log(mockCopy.relatedProductsInfo);
    render(<MockTestContext.Provider value={mockCopy}><RelatedProductList /></MockTestContext.Provider>);
    const heading = screen.getByText('Related Products');
    expect(heading).toBeInTheDocument();
  });
  it('should contain related product cards', () => {
    const mockCopy = { ...mockData };
    mockCopy.relatedProductsInfo = [mockCopy.relatedProductsInfo];
    const Sandbox = render(<MockTestContext.Provider value={mockCopy}><RelatedProductList /></MockTestContext.Provider>);
    const relatedItems = Sandbox.container.querySelector('#related-items');
    expect(relatedItems).toBeInTheDocument();
  });

  // test adding to outfit and removing from outfit

  // test adding to outfit from related items

  // test local storage???
});
