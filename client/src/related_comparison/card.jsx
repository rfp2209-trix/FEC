import React from 'react';

export default function Card({
  imgs, category, name, price, rating, alt,
}) {
  return (
    <aside>
      {imgs ? <img src={imgs.results[0].photos[0].thumbnail_url} alt={alt} /> : null}
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
