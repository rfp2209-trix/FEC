import React, { useState, useEffect } from 'react';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import * as Styled from './styleSelectorThumbs.styles.js';
import { useOverviewContext } from '../overviewContextWrapper.jsx';

export default function StyleThumbsRender({ image, id }) {
  const {
    setStyleId, styleId, setStyleName, setMainPhoto, setSideScroll,
  } = useOverviewContext();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(id === styleId);
  }, [styleId]);

  const handleStyleClick = () => {
    setMainPhoto('');
    setStyleName('');
    setSideScroll('');
    setStyleId(id);
  };

  return (
    <Styled.ThumbImage
      photo={image}
      onClick={handleStyleClick}
    >
      {checked ? <IoIosCheckmarkCircleOutline className="checkCircle" aria-label="check-circle" /> : <div /> }
    </Styled.ThumbImage>
  );
}
