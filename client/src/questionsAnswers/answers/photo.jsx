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
          <PicModalContainer name="picModal" src={URL} alt={`Full-size: ${URL}`} />
        </DarkBG>
        )}
    </>
  );
}

export default Photo;

const PicModalContainer = styled.img`
display: flex;
align-items: center;
justify-content: center;
max-width: 75vw;
max-height: 80vh;
`;

const DarkBG = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: fixed;
height: 100vh;
width: 100vw;
top: 0%;
left: 0%;
background: rgba(0, 0, 0, 0.5);
z-index: 50;
`;

const PicModalContainer = styled.img`
display: flex;
align-items: center;
justify-content: center;
max-width: 75vw;
max-height: 80vh;
`;
