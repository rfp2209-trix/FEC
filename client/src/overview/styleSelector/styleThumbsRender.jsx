import React, { useState, useEffect } from 'react';
import * as Styled from './styleSelectorThumbs.styles.js';
import { HiOutlineCheckCircle } from 'react-icons/hi2';
import { useOverviewContext } from '../overviewContextWrapper.jsx';


export default function StyleThumbsRender({ image, id }) {
  const {
    setStyleId, styleId, setStyleName, setMainPhoto, setSideScroll,
  } = useOverviewContext();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(id === styleId)
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
      {checked ? <HiOutlineCheckCircle className="checkCircle" /> : <div /> }
    </Styled.ThumbImage>
  );
}
