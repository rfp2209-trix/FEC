/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/self-closing-comp */
import { render, screen } from '@testing-library/react';
import React from 'react';
import jest from 'jest';
import renderer from 'react-test-renderer';
import App from '../app.jsx';

describe('App tests', () => {
  it('should contain hello world in a header', () => {
    render(<App />);
    const heading = screen.getByText('Hello World');
    expect(heading).toBeInTheDocument();
  });

  it('should contain ratings and reviews in a header', () => {
    render(<app />);
    const heading = screen.getByText('RATINGS & REVIEWS');
    expect(heading).toBeInTheDocument();
  });
});
