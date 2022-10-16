/* eslint-disable import/extensions */
import React from 'react';
import Reviews from './reviews/Reviews.jsx';
import WriteReview from './reviews/WriteReview.jsx';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <ProductsOverview />
      <Reviews />
      <WriteReview />
    </div>
  );
}

export default App;