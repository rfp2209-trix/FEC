import React from 'react';
import Card from './card.jsx';

export default function RelatedProductListEntry({
  name, category, price, rating, imgs,
}) {
  return (
    <aside>
      {imgs[0].photos[0].thumbnail_url ? <img src={imgs[0].photos[0].thumbnail_url} alt="product img" /> : <img src="https://cdn.discordapp.com/attachments/1029469898327466074/1031695356129443850/unknown.png" alt="not found" />}
      <h2>
        category:
        {' '}
        {category}
      </h2>
      <small>
        name:
        {' '}
        {name}
      </small>
      <p>
        price:
        {' '}
        {price}
      </p>
      <p>
        rating:
        {' '}
        {rating}
      </p>
    </aside>
  );
}
