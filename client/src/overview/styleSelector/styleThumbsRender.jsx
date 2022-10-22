import React, { useState, useEffect } from 'react';
import * as Styled from './styleSelectorThumbs.styles.js';
import { HiOutlineCheckCircle } from 'react-icons/hi2';
import { useOverviewContext } from '../overviewContextWrapper.jsx';


export default function StyleThumbsRender({ image, id }) {
  const {
    setStyleId, setStyleName, setMainPhoto, setSideScroll,
  } = useOverviewContext();
  const [applyBadge, setApplyBadge] = useState(false);

  const resetBadges = () => {
    setApplyBadge(false);
  };

  const handleStyleClick = () => {
    resetBadges();
    setMainPhoto('');
    setStyleName('');
    setSideScroll('');
    setStyleId(id);
    setApplyBadge(true);
  };
  return (
    <Styled.ThumbImage
      photo={image}
      onClick={handleStyleClick}
      applyBadge={applyBadge}
    >
      {applyBadge ? <HiOutlineCheckCircle className="checkCircle" /> : <div /> }
    </Styled.ThumbImage>
  );
}
