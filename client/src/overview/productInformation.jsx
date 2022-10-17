import React, {useContext} from 'react';
import { ProductContext, useProductsContext } from '../Context.jsx';

export default function ProductInformation() {
  const { category, name, slogan } = useProductsContext();

  return (
    <div>
      <h2>Product Information</h2>
      <h3>
        {category}
        {name}
        {slogan}
      </h3>
    </div>
  );
}
