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
import ImageGalleryMain from '../overview/imageGallery/imageGalleryMain.jsx';
import { MockContext, useMockContext } from './mockContext.jsx';
import * as Context from '../Context.jsx';
import ImageGalleryThumbnails from '../overview/imageGallery/imageGallery_thumbnails.jsx';

beforeEach(() => {
  // uncomment the next func if using App to render
  // const spy = jest.spyOn(Context, 'Context').mockImplementation(({ children }) => <MockContext>{children}</MockContext>);
  const useContextSpy = jest.spyOn(Context, 'useProductsContext').mockImplementation(useMockContext);
});

describe('App tests', () => {
  it('should contain alt text in an img tag', () => {
    render(<MockContext><ImageGalleryThumbnails /></MockContext>);
    const heading = screen.getByAltText('fashion pic');
    expect(heading).toBeInTheDocument();
  });
  it('should contain alt text', () => {
    render(<MockContext><ImageGalleryMain /></MockContext>);
    const text = screen.getByAltText('should be a pic here');
    expect(text).toBeInTheDocument();
  });
  it('should contain ratings and reviews in a header', () => {
    render(<Reviews />);
    const heading = screen.getByText('RATINGS & REVIEWS');
    expect(heading).toBeInTheDocument();
  });
});
