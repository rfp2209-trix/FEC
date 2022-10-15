import React from 'react';
import { useProductsContext } from '../../Context.jsx';

export default function ProductInformation() {
  const { category, name, slogan } = useProductsContext();


  return (
    <div>
      <h1>Product Information</h1>
      <h2>{name}</h2>
      <p>{category}</p>
      <p>{slogan}</p>
    </div>
  );
}
