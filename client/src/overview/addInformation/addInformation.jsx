import React from 'react';
import { useProductsContext } from '../../Context.jsx';

export default function AddInformation() {
  const { slogan } = useProductsContext;

  return (
    <div>
      <h1>Additional Product Information</h1>
      <h2>{slogan}</h2>
    </div>
  );
}
