/* eslint-disable import/extensions */
import React, {useContext} from 'react';
import ProductsOverview from './overview/productsOverview.jsx';
import ProductProvider from './Context.js';



function App() {
  return (
    <ProductProvider>
      <div className="App">
        <h1>Hello World</h1>
        <ProductsOverview />
      </div>
    </ProductProvider>

  );
}

export default App;
