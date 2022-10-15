import React from 'react';
import Card from './card.jsx';

export default function RelatedProductListEntry({
  name, category, price, rating, imgs,
}) {
  return (
    <Card
      name={name}
      imgs={imgs}
      category={category}
      price={price}
      rating={rating}
    />
  );
}
