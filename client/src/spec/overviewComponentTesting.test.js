/* eslint-disable react/jsx-boolean-value */
/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/self-closing-comp */
import { render, screen, fireEvent } from '@testing-library/react';
import React, { useContext, useEffect, useState, createContext } from 'react';
import axios from 'axios';
import { expect, jest, test } from '@jest/globals';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';
import App from '../app.jsx';
import ImageGalleryMain from '../overview/imageGallery/imageGalleryMain.jsx';
import ImageGalleryThumbnails from '../overview/imageGallery/imageGallery_thumbnails.jsx';
import Cart from '../overview/cart/cart.jsx';
import AddInformation from '../overview/addInformation/addInformation.jsx';
import ProductInformation from '../overview/productInformation/productInformation.jsx';
import StarRating from '../overview/starRating/starRating.jsx';
import StyleSelector from '../overview/styleSelector/styleSelector.jsx';
import { MockContext, useMockContext, MockTestContext } from './mockContext.jsx';
import { MockOverviewContextWrapper, MockOverviewContext, useMockOverviewContext } from './mockOverviewContext.jsx';
import { useOverviewContext } from '../overview/overviewContextWrapper';
import * as OverviewContext from '../overview/overviewContextWrapper.jsx';
import * as Context from '../Context.jsx';
import * as mockData from './mockContextData.js';


jest.mock('axios');

beforeEach(() => {
  // uncomment the next func if using App to render
  // const spy = jest.spyOn(Context, 'Context').mockImplementation(({ children }) => <MockContext>{children}</MockContext>);
  const useContextSpy = jest.spyOn(Context, 'useProductsContext').mockImplementation(useMockContext);
  // const useOverviewSpy = jest.spyOn(OverviewContext, 'useOverviewContext').mockImplementation(({ children }) => <OverviewMockContext>{children}</OverviewMockContext>);
  const useOverviewSpy = jest.spyOn(OverviewContext, 'useOverviewContext').mockImplementation(useMockOverviewContext);
});

describe('Thumbnails', () => {
  beforeEach(() => {
    render(
      <MockContext>
        <MockOverviewContextWrapper>
          <ImageGalleryThumbnails photoIdx={2} id={42} />
        </MockOverviewContextWrapper>
      </MockContext>,
    );
  });

  it('should render the thumbnail image div', () => {
    const heading = screen.getByTestId('thumb-image');
    expect(heading).toBeInTheDocument();
  });

  it('should not render the checkmark if not clicked', () => {
    const check = screen.queryByTestId('thumb-check');
    expect(check).not.toBeInTheDocument();
  });
});

describe('Thumbnail scroll images', () => {
  beforeEach(() => {
    render(
      <MockContext>
        <MockOverviewContextWrapper>
          <ImageGalleryThumbnails photoIdx={0} />
        </MockOverviewContextWrapper>
      </MockContext>,
    );
  });

  it('should render a checkmark if the current thumbnail is the main image', () => {
    const check = screen.getByTestId('thumb-check');
    expect(check).toBeInTheDocument();
  });
});
// TODO: construct tests that can account for an event listener
// describe('Main Photo Image', () => {
//   it('should render a main image', () => {
//     render(
//       <MockContext>
//         <MockOverviewContextWrapper>
//           <ImageGalleryMain />
//         </MockOverviewContextWrapper>
//       </MockContext>,
//     );
//     const testZoom = screen.queryByTestId('main-photo-default');
//     expect(testZoom).toBeInTheDocument();
//   });
// });

describe('Cart ', () => {
  beforeEach(() => {
    render(
      <MockContext>
        <MockOverviewContextWrapper>
          <Cart />
        </MockOverviewContextWrapper>
      </MockContext>,
    );
  });

  it('should exist', () => {
    const check = screen.getByTestId('cart-exists');
    expect(check).toBeInTheDocument();
  });

  it('Should have a Select Size Element', () => {
    const check = screen.getByTestId('size-exists');
    expect(check).toBeInTheDocument();
  });

  it('Should have a Select Quantity Element', () => {
    const check = screen.getByTestId('quantity-exists');
    expect(check).toBeInTheDocument();
  });

  it('Should have an add to Cart Button', () => {
    const check = screen.getByTestId('button-exists');
    expect(check).toBeInTheDocument();
  });
});

describe('Additional Information ', () => {
  beforeEach(() => {
    render(
      <MockContext>
        <MockOverviewContextWrapper>
          <AddInformation />
        </MockOverviewContextWrapper>
      </MockContext>,
    );
  });

  it('should exist', () => {
    const check = screen.getByTestId('add-info-exists');
    expect(check).toBeInTheDocument();
  });
});

describe('Product Information ', () => {
  beforeEach(() => {
    render(
      <MockContext>
        <MockOverviewContextWrapper>
          <ProductInformation />
        </MockOverviewContextWrapper>
      </MockContext>,
    );
  });

  it('should exist', () => {
    const check = screen.getByTestId('product-info-exists');
    expect(check).toBeInTheDocument();
  });
});

describe('Overview Star-Rating ', () => {
  beforeEach(() => {
    render(
      <MockContext>
        <MockOverviewContextWrapper>
          <StarRating />
        </MockOverviewContextWrapper>
      </MockContext>,
    );
  });

  it('should exist', () => {
    const check = screen.getByTestId('star-rating-exists');
    expect(check).toBeInTheDocument();
  });
});

describe('Style Selector ', () => {
  beforeEach(() => {
    render(
      <MockContext>
        <MockOverviewContextWrapper>
          <StyleSelector />
        </MockOverviewContextWrapper>
      </MockContext>,
    );
  });

  it('should exist', () => {
    const check = screen.getByTestId('style-selector-exists');
    expect(check).toBeInTheDocument();
  });
  it('should display images', () => {
    const check = screen.getByTestId('images-exist');
    expect(check).toBeInTheDocument();
  });
});
