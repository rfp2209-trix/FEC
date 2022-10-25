/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/self-closing-comp */
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import axios from 'axios';
import { expect, jest, test } from '@jest/globals';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';
import App from '../app.jsx';
import Reviews from '../reviews/Reviews.jsx';
import RatingsBreakdown from '../reviews/RatingsBreakdown.jsx';
import ProductBreakdown from '../reviews/ProductBreakdown.jsx';
import ReviewsList from '../reviews/ReviewsList.jsx';
import ImageGalleryMain from '../overview/imageGallery/imageGalleryMain.jsx';
import { MockContext, useMockContext, MockTestContext } from './mockContext.jsx';
import * as Context from '../Context.jsx';
import * as mockData from './mockContextData.js';
import ImageGalleryThumbnails from '../overview/imageGallery/imageGallery_thumbnails.jsx';
import RelatedProductList from '../related_comparison/RelatedProductList.jsx';
import QA from '../questionsAnswers/qa.jsx';

jest.mock('axios');
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
  it('should only render the characteristics in the data and nothing more', () => {
    const mockCopy = { ...mockData };
    mockCopy.reviewsMeta.characteristics = {
      Size: {
        id: 135244,
        value: 3.122,
      },
      Width: {
        id: 135245,
        value: 3.097,
      },
    };
    render(<MockTestContext.Provider value={mockCopy}><ProductBreakdown /></MockTestContext.Provider>);
    const charsDisplayed = screen.getAllByText(/((\bSize\b)|(\bWidth\b)|(\bFit\b)|(\bComfort\b)|(\bLength\b)|(\bQualityconst { getByTestId, getAllByTestId } = \b))/);
    expect(charsDisplayed.length).toBe(2);
  });
  it('should use the API to sort the reviews', () => {
    axios.get.mockResolvedValueOnce({
      product: '40346',
      page: 0,
      count: 5,
      results: [
        {
          review_id: 1275724,
          rating: 5,
          summary: 'fdsad',
          recommend: true,
          response: null,
          body: 'fdsadfdsadfdsadfdsadfdsadfdsadfdsadfdsadfdsadvfdsad',
          date: '2022-07-20T00:00:00.000Z',
          reviewer_name: 'fdsad',
          helpfulness: 2,
          photos: [
            {
              id: 2455562,
              url: 'https://res.cloudinary.com/vfdf56s/image/upload/v1658279894/zdkvjpbdntlzqytmvw2l.jpg',
            },
            {
              id: 2455563,
              url: 'https://res.cloudinary.com/vfdf56s/image/upload/v1658279889/dt0yf0qu7rx7croyhmh6.jpg',
            },
          ],
        },
        {
          review_id: 1275829,
          rating: 5,
          summary: 'Testing1',
          recommend: true,
          response: null,
          body: 'Testing1Testing1Testing1Testing1Testing1Testing1Testing1',
          date: '2022-07-22T00:00:00.000Z',
          reviewer_name: 'Testing1',
          helpfulness: 0,
          photos: [],
        },
        {
          review_id: 1275730,
          rating: 4,
          summary: 'fdsfsdf',
          recommend: true,
          response: null,
          body: 'fefsdfsf',
          date: '2022-07-20T00:00:00.000Z',
          reviewer_name: 'groot',
          helpfulness: 1,
          photos: [
            {
              id: 2455566,
              url: 'http://res.cloudinary.com/space-invaders/image/upload/v1658285388/bsyngcpw9gtqlcejuocu.jpg',
            },
          ],
        },
        {
          review_id: 1275817,
          rating: 5,
          summary: '',
          recommend: true,
          response: null,
          body: '',
          date: '2022-07-21T00:00:00.000Z',
          reviewer_name: 'asdasdfasd',
          helpfulness: 0,
          photos: [],
        },
        {
          review_id: 1274432,
          rating: 5,
          summary: 'Storm',
          recommend: false,
          response: null,
          body: 'Storm',
          date: '2022-05-24T00:00:00.000Z',
          reviewer_name: 'Storm',
          helpfulness: 2,
          photos: [],
        },
      ],
    });
    const { getByTestId, getAllByTestId } = render(<MockContext><ReviewsList /></MockContext>);
    expect(axios.get).toHaveBeenCalledTimes(0);
    fireEvent.change(getByTestId('sort-select'), { target: { value: 'newest' } });
    expect(axios.get).toHaveBeenCalledWith(`/fec/reviews?product_id=${mockData.reviews.product}&count=161&sort=newest`);
  });
  it('should initially render 2 reviews to the screen', () => {
    const { queryByTestId, getByTestId, getAllByTestId } = render(<MockContext><ReviewsList /></MockContext>);
    const renderedReviews = getAllByTestId('review-tile');
    expect(renderedReviews.length).toBe(2);
  });
  it('should not render a \'More Reviews\' button if there are no more reviews to render', () => {
    const mockCopy = { ...mockData };
    mockCopy.reviews.results = [
      {
        review_id: 1275724,
        rating: 5,
        summary: 'fdsad',
        recommend: true,
        response: null,
        body: 'fdsadfdsadfdsadfdsadfdsadfdsadfdsadfdsadfdsadvfdsad',
        date: '2022-07-20T00:00:00.000Z',
        reviewer_name: 'fdsad',
        helpfulness: 2,
        photos: [
          {
            id: 2455562,
            url: 'https://res.cloudinary.com/vfdf56s/image/upload/v1658279894/zdkvjpbdntlzqytmvw2l.jpg',
          },
          {
            id: 2455563,
            url: 'https://res.cloudinary.com/vfdf56s/image/upload/v1658279889/dt0yf0qu7rx7croyhmh6.jpg',
          },
        ],
      },
      {
        review_id: 1275829,
        rating: 5,
        summary: 'Testing1',
        recommend: true,
        response: null,
        body: 'Testing1Testing1Testing1Testing1Testing1Testing1Testing1',
        date: '2022-07-22T00:00:00.000Z',
        reviewer_name: 'Testing1',
        helpfulness: 0,
        photos: [],
      },
    ];
    render(<MockTestContext.Provider value={mockCopy}><ReviewsList /></MockTestContext.Provider>);
    const moreReviewsButton = screen.queryByRole('button', { Name: 'More Reviews' });
    console.log(moreReviewsButton);
    expect(moreReviewsButton).toBeNull();
  });
  it('should render more reviews when \'More Reviews\' button is clicked', () => {
    render(<MockContext><ReviewsList /></MockContext>);
    userEvent.click(screen.getByRole('button', { Name: 'More Reviews' }));
    const renderedReviews = screen.getAllByTestId('review-tile');
    expect(renderedReviews.length).toBe(4);
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
  // })
});
