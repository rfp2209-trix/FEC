import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RelatedProductListEntry from './relatedProductListEntry.jsx';

export default function RelatedProductList() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/fec/related/40366')
      .then((relatedProductData) => {
        setProductData(relatedProductData.data);
      })
      .catch((err) => {
        console.log('err', err);
      });
  }, []);
  console.log(productData);
  return (
    productData
      ? productData.map((currProduct) => (
        <RelatedProductListEntry
          name={currProduct.name}
          category={currProduct.category}
          price={currProduct.default_price}
          rating={currProduct.averageRating}
          imgs={currProduct.styles}
        />
      ))
      : null
  );
}
