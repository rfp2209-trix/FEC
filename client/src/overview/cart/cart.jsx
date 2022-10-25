/* eslint-disable react/no-array-index-key */
/* eslint-disable no-plusplus */
/* eslint-disable max-len */
/* eslint-disable arrow-body-style */
/* eslint-disable block-spacing */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as Styled from './cart.styles.js';
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
  const [selectQuantity, setSelectQuantity] = useState(null);
  const [selectQuantityArray, setSelectQuantityArray] = useState([]);
  const [showNoSizeWarning, setShowNoSizeWarning] = useState(false);
  const [userQuantity, setUserQuantity] = useState(0);

  const results = (!loading && styleDetails) ? styleDetails.results : [];
  const skus = (!loading && styleDetails) ? results[0].skus : [];
  // console.log('skus', skus);

  const skuArrayKeys = Object.keys(skus);
  const skuMap = skuArrayKeys.map((key) => {
    return {
      skuKey: key,
      details: skus[key],
    };
  });

  const handleClick = () => {
    const queryData = {
      sku_id: userSKU,
      count: userQuantity,
    };
    axios.post('/fec/cart', queryData)
      .then(() => {
      })
      .catch(console.log);
  };

  const handleSizeSelect = (event) => {
    const sku = event.target.value;
    const { size } = skus[sku].size;
    const totalQuantity = skus[sku].quantity;
    setUserSKU(sku);
    setUserSize(size);
    setSelectQuantity(totalQuantity);
    setShowNoSizeWarning(false);
  };
  const handleQuanChange = (event) => {
    setUserQuantity(event.target.value);
  };

  const handleQuanFocus = (event) => {
    if (userSize === null) {
      setShowNoSizeWarning(true)
    }
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


  return (
    <Styled.CartContainer>
      <div className="cart-title" data-testid="cart-exists">
        Add Item
      </div>
      <div className="sel-container">
        <div className="row">
          {showNoSizeWarning ? <span className="user-warning">Please Enter a Size</span> : null}
          <div>Select Size</div>
          <select defaultValue="DEFAULT" data-testid="size-exists" className="selSize" onChange={handleSizeSelect} name="size">
            <option value="DEFAULT" disabled hidden>Select Size</option>
            {skuMap?.map((sku) => {return (<option value={sku.skuKey} key={sku.skuKey}>{sku.details.size}</option>);})}
          </select>
        </div>
        <div className="row">
          <div>Select Quantity</div>
          <select aria-disabled={userSize === null} data-testid="quantity-exists" className="selQuan" data-isdimmed={userSize === null} name="quantity" onChange={handleQuanChange} onClick={handleQuanFocus}>
            {selectQuantityArray?.map((num, index) => {return (<option value={num} key={index}>{num}</option>);})}
          </select>
        </div>
        <div className="btn-container">
          <button data-testid="button-exists" disabled={userQuantity === null || userSize === null} onClick={handleClick} className="addCart" type="button">Add to Cart</button>
        </div>
      </div>

    </Styled.CartContainer>
  );
}
