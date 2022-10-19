import React from 'react';
import * as Styled from './styleSelectorThumbs.styles.js'

export default function StyleThumbsRender({ image }) {
  return (
    <Styled.ThumbsDetail>
      <Styled.ThumbImage src={image} alt="cool scene" />
    </Styled.ThumbsDetail>
  );
}
