/* eslint-disable arrow-body-style */
/* eslint-disable block-spacing */
import React, { useState, useEffect } from 'react';
import * as Styled from './cart.styles.js';
// import CartForm from './cartForm.jsx';
import { useOverviewContext } from '../overviewContextWrapper.jsx';
import { useProductsContext } from '../../Context.jsx';

const defaultValues = {
  name: '',
  quantity: 0,
};

export default function Cart() {
  const [cartState, setCartState] = useState(defaultValues);
  const { styleDetails, loading } = useProductsContext();
  const { styleId } = useOverviewContext();

  const results = (!loading && styleDetails) ? styleDetails.results : [];
  const skus = (!loading && styleDetails) ? results[0].skus : [];
  console.log('skus', skus);

  const skuArrayKeys = Object.keys(skus);
  // console.log(skuArrayKeys);
  // console.log(skus[skuArrayKeys[0]]);
  const skuMap = skuArrayKeys.map((key) => {
    return {
      skuKey: key,
      details: skus[key],
    };
  });

  console.log(skuMap);

  const handleSubmit = () => {
  };
  return (
    <Styled.CartContainer>

      <div className="cart-title">
        Checkout Cart
      </div>
      <div />
      <div className="frm-container">
        <select name="size">
          <option label="Size" value="--SelectSize--" />
          {skuMap?.map((sku) => {return (<option key={sku.skuKey}>{sku.details.size}</option>);})}
        </select>
        <select name="quantity">
          <option label="Quantity" value="--SelectQuantity--" />
          <option label="1" value="1" />
        </select>
        <div className="btn-container">
          <button className="addCart" type="button">Add to Cart</button>
        </div>
      </div>
    </Styled.CartContainer>
  );
}

