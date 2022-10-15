import React from 'react';
import ProductsOverview from './overview/productsOverview.jsx';
import Reviews from './reviews/Reviews.jsx';
import WriteReview from './reviews/WriteReview.jsx';
import RelatedProductList from './related_comparison/relatedProductList.jsx';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <ProductsOverview />
      <RelatedProductList />
      <Reviews />
      <WriteReview />
    </div>
  );
}

export default App;
