import React from 'react';
import RelatedProductListEntry from './relatedProductListEntry.jsx';
import { useProductsContext } from '../Context.jsx';

export default function RelatedProductList() {
  const relatedProducts = useProductsContext();

  return (
    relatedProducts[0]
      ? relatedProducts[0].map((currProduct) => (
        <RelatedProductListEntry
          name={currProduct.name}
          category={currProduct.category}
          price={currProduct.default_price}
          rating={currProduct.averageRating}
          imgs={currProduct.results}
        />
      ))
      : null
  );
}
