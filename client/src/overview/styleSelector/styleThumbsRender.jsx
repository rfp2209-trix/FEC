import React from 'react';
import * as Styled from './styleSelectorThumbs.styles.js';
import { useOverviewContext } from '../overviewContextWrapper.jsx';

export default function StyleThumbsRender({ image, id, setStyleName }) {
  const { styleId, setStyleId } = useOverviewContext();

  const handleStyleClick = () => {
    console.log('image clicked in styleThumbsRender');
    setStyleName('');
    setStyleId(id);
    console.log(id)
  };
  return (
    <Styled.ThumbsDetail>
      <Styled.ThumbImage
        src={image}
        alt="cool scene"
        onClick={handleStyleClick}
      />
    </Styled.ThumbsDetail>
  );
}
