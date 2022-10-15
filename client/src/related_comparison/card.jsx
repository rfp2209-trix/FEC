import React from 'react';

export default function Card({
  imgs, category, name, price, rating, alt,
}) {
  return (
    <aside>
      {imgs ? <img src={imgs.results[0].photos[0].thumbnail_url} width="350" height="350" alt={alt} /> : null}
      <h2>{category}</h2>
      <small>{name}</small>
      <p>{price}</p>
      <p>{rating}</p>
    </aside>
  );
}
