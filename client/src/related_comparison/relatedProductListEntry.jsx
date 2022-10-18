import React from 'react';
import styled from 'styled-components';

export default function RelatedProductListEntry({
  name, category, price, rating, imgs,
}) {
  return (
    <RelatedProductListEntryContainer>
      <aside>
        {imgs[0].photos[0].url ? <img src={imgs[0].photos[0].url} width="270x" height="337.5px" alt="product img" />
          : (
            <img
              src="https://cdn.discordapp.com/attachments/1029469898327466074/1031996114372665495/could_not_find_image.png"
              width="270x"
              height="337.5px"
              alt="not found"
            />
          )}
        <h2>
          {name}
        </h2>
        <small>
          {category}
        </small>
        <p>
          $
          {price}
        </p>
        <div className="Stars" style={{ '--rating': rating }} aria-label={rating}>
          {rating}
          {' '}
        </div>
      </aside>
    </RelatedProductListEntryContainer>
  );
}

const RelatedProductListEntryContainer = styled.div`

  width:270px;
  height:500px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  background: pink;
  border: solid;
  align-content: center;
`;
