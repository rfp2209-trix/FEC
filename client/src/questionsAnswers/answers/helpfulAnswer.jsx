import React, { useState } from 'react';
import axios from 'axios';
import { LittleButton } from '../qa-style.js';

function Helpful({ answerID, helpfulness }) {
  const [clicked, setClicked] = useState(false);
  const handleHelpfulAnswer = () => {
    console.log('You said this answer was helpful');
    axios.put(`/fec/answer/helpful/${answerID}`)
      .then(() => {
        setClicked(true);
        console.log('Server successfully registered vote');
      })
      .catch(() => {
        console.log('Server could not register vote for helpfulness');
      });
  };

  return (
    <span>
      {clicked ? <small> Thank You! </small> : <LittleButton type="submit" onClick={handleHelpfulAnswer}><small>{`Yes (${helpfulness})`}</small></LittleButton>}
    </span>
  );
}

export default Helpful;
