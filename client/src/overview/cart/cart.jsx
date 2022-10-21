import React from 'react';
import * as Styled from './cart.styles.js';
// import CartForm from './cartForm.jsx';

export default function Cart() {
  const handleSubmit = () => {

  }
  return (
    <Styled.CartContainer>
      <form onSubmit={handleSubmit}>
        <select name="size">
          <option label="---Select-Size---" value="--SelectSize--" />
          <option label="big" value="big" />
        </select>
        <select name="quantity">
          <option label="---Select-Quantity---" value="--SelectQuantity--" />
          <option label="1" value="1" />
        </select>
        <button type="submit">Add to Cart</button>
      </form>
    </Styled.CartContainer>
  );
}
