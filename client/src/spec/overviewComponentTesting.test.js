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
import { OverviewMockContextWrapper, OverviewMockContext, useMockOverviewContext } from './mockOverviewContext.jsx';
import * as Context from '../Context.jsx';
import * as mockData from './mockContextData.js';
import ImageGalleryThumbnails from '../overview/imageGallery/imageGallery_thumbnails.jsx';

jest.mock('axios');
console.log(mockData);
beforeEach(() => {
  // uncomment the next func if using App to render
  // const spy = jest.spyOn(Context, 'Context').mockImplementation(({ children }) => <MockContext>{children}</MockContext>);
  const useContextSpy = jest.spyOn(Context, 'useProductsContext').mockImplementation(useMockContext);
  const useOverviewSpy =
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