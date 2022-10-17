import React from 'react';
import RelatedProductListEntry from './relatedProductListEntry.jsx';
import { useProductsContext } from '../Context.jsx';

export default function RelatedProductList() {
  const { relatedProductsInfo } = useProductsContext();
  return (
    relatedProductsInfo
      ? relatedProductsInfo.map((currProduct) => (
        <RelatedProductListEntry
          name={currProduct.name}
          category={currProduct.category}
          price={currProduct.default_price}
          rating={currProduct.averageRating}
          imgs={currProduct.results}
          key={currProduct.name}
        />
      ))
      : null
  );
}
