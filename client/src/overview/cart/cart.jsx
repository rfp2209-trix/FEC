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
  const [userSize, setUserSize] = useState(null);
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

  // console.log(skuMap);

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
      if (quantityList.length < 15) {
        quantityList.push(i);
      }
    }
    setSelectQuantityArray(quantityList);
  }, [selectQuantity]);

  // TODO: disable quantity if not selected size;
  // TODO: display user message above size if user
  //       tries to sel quantity w/o selecting a size
  // TODO: disable add to cart until user makes valid selections

  return (
    <Styled.CartContainer>
      <div className="cart-title">
        Add Item
      </div>
      <div className="sel-container">
        <div className="row">
          <div>Select Size</div>
          <select className="selSize" onChange={handleSizeSelect} name="size">
            <option label="Size" value="--SelectSize--" />
            {skuMap?.map((sku) => {return (<option value={sku.skuKey} key={sku.skuKey}>{sku.details.size}</option>);})}
          </select>
        </div>
        <div className="row">
          <div>Select Quantity</div>
          <select className="selQual" name="quantity">
            <option label="Quantity" value="--SelectQuantity--" />
            {selectQuantityArray?.map((num, index) => {return (<option value={num} key={index}>{num}</option>);})}
          </select>
        </div>
        <div className="btn-container">
          <button className="addCart" type="button">Add to Cart</button>
        </div>
      </div>

    </Styled.CartContainer>
  );
}
