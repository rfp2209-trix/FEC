import React, {useContext} from 'react';
import {ProductContext} from '../Context.js'


export default function ProductInformation() {

  const GlobalState = useContext(ProductContext)
  // console.log('global state', GlobalState)

  return (
    <div>
      <h2>Product Information</h2>
      <h3>

      </h3>
    </div>
  );
}
