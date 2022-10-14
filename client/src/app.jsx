/* eslint-disable import/extensions */
import React, {useContext, useState, useEffect} from 'react';
import axios from 'axios';
import ProductsOverview from './overview/productsOverview.jsx';
import {ProductContext, Context} from './Context.js';

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
