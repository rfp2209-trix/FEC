import React from 'react';
import * as Styled from './cart.styles.js';
// import CartForm from './cartForm.jsx';

export default function Cart() {
  const handleSubmit = () => {

  }
  return (
    <Styled.CartContainer>

      <div className="cart-title">
        Checkout Cart
      </div>
      <div />
      <div className="frm-container">
        <select name="size">
          <option label="---Select-Size---" value="--SelectSize--" />
          <option label="big" value="big" />
        </select>
        <select name="quantity">
          <option label="---Select-Quantity---" value="--SelectQuantity--" />
          <option label="1" value="1" />
        </select>
        <div className="btn-container">
          <button className="addCart" type="button">Add to Cart</button>
        </div>
      </div>
    </Styled.CartContainer>
  );
}
