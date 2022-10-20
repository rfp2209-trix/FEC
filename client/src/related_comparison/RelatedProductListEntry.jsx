import React, { useState } from 'react';
import styled from 'styled-components';
import Card from './Card.jsx';

export default function RelatedProductListEntry({
  name, category, price, rating, imgs,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const img = imgs[0].photos[0].thumbnail_url ? imgs[0].photos[0].thumbnail_url
    : 'https://cdn.discordapp.com/attachments/1029469898327466074/1031996114372665495/could_not_find_image.png';
  return (
    <RelatedProductListEntryContainer>
      <Card img={img} name={name} category={category} rating={rating} price={price} />
    </RelatedProductListEntryContainer>
  );
}

const RelatedProductListEntryContainer = styled.div`

  width:258px;
  height:385px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  border: solid;
  align-content: center;
  margin-left: 15px;
  margin-right: 15px;

`;
