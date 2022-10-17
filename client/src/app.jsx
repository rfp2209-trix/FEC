import React from 'react';
import ProductsOverview from './overview/productsOverview.jsx';
import Reviews from './reviews/Reviews.jsx';
import WriteReview from './reviews/WriteReview.jsx';
import QA from './questionsAnswers/qa.jsx';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <ProductsOverview />
      <Reviews />
      <WriteReview />
      <QA />
    </div>
  );
}

export default App;
