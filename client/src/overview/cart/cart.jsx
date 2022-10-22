/* eslint-disable react/no-array-index-key */
/* eslint-disable no-plusplus */
/* eslint-disable max-len */
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
  const [userSKU, setUserSKU] = useState('');
  const [userSize, setUserSize] = useState('');
  const [selectQuantity, setSelectQuantity] = useState(0);
  const [selectQuantityArray, setSelectQuantityArray] = useState([]);

  const results = (!loading && styleDetails) ? styleDetails.results : [];
  const skus = (!loading && styleDetails) ? results[0].skus : [];
  // console.log('skus', skus);

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

  const handleSizeSelect = (event) => {
    const sku = event.target.value;
    const { size } = skus[sku].size;
    const totalQuantity = skus[sku].quantity;
    setUserSKU(sku);
    setUserSize(size);
    setSelectQuantity(totalQuantity);
  };
  const quantityList = [];
  useEffect(() => {
    for (let i = 1; i < selectQuantity + 1; i++) {
      quantityList.push(i);
    }
    setSelectQuantityArray(quantityList);
    // console.log('quantityList', quantityList);
  }, [selectQuantity]);

  return (
    <Styled.CartContainer>

      <div className="cart-title">
        Checkout Cart
      </div>
      <div />
      <div className="frm-container">
        <select onChange={handleSizeSelect} name="size">
          <option label="Size" value="--SelectSize--" />
          {skuMap?.map((sku) => {return (<option value={sku.skuKey} key={sku.skuKey}>{sku.details.size}</option>);})}
        </select>
        <select name="quantity">
          <option label="Quantity" value="--SelectQuantity--" />
          {selectQuantityArray?.map((num, index) => {return (<option value={num} key={index}>{num}</option>);})}
        </select>
        <div className="btn-container">
          <button className="addCart" type="button">Add to Cart</button>
        </div>
      </div>
    </Styled.CartContainer>
  );
}
