/* eslint-disable import/extensions */
import React, {useContext, useState, useEffect} from 'react';
import axios from 'axios';
import ProductsOverview from './overview/productsOverview.jsx';
import {ProductContext, Context} from './Context.js';



function App() {


  return (

      <div className="App">
        <h1>Hello World</h1>
        <ProductsOverview />
      </div>


  );
}

export default App;
