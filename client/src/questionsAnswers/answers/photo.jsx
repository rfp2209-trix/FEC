import React, { useState } from 'react';
import styled from 'styled-components';
// import { BackgroundOpacityDiv } from '../background.style.js';

function Photo({ URL }) {
  const [clicked, setClicked] = useState(false);
  const handleClick = (input) => {
    console.log(`set state to ${input}`);
    setClicked(input);
  };

  return (
    <>
      <div role="button" tabIndex="0" onClick={() => { handleClick(true); }}>
        <img src={URL} alt={URL} height="75" width="75" />
      </div>
      { !!clicked
        && (
        <DarkBG onClick={() => { handleClick(false); }}>
          <PicModalContainer onClick={() => { handleClick(false); }}>
            <img name="picModal" src={URL} alt={`Full-size: ${URL}`} />
          </PicModalContainer>
        </DarkBG>
        )}
    </>
  );
}

export default Photo;

const PicModalContainer = styled.div`
position: fixed;
z-index: 999;
top: 50%;
left: 50%;
`;

const DarkBG = styled.div`
position: fixed;
height: 100vh;
width: 100vw;
top: 0%;
left: 0%;
background: rgba(0, 0, 0, 0.5);
z-index: 50;
`;
