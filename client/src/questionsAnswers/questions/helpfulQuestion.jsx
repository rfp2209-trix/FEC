import React, { useState } from 'react';
import axios from 'axios';
// import useProductsContext from '../../Context.jsx';

function Helpful(props) {
  const [clicked, setClicked] = useState(false);
  const { questionID } = props;
  const { helpVotes } = props;

  const handleHelpfulQuestion = () => {
    console.log('You tried to say this question was helpful');
    axios.put(`/fec/question/helpful/${questionID}`)
      .then(() => {
        console.log('Successfully Submitted');
        setClicked(!clicked);
      })
      .catch(() => {
        console.log('Could not submit vote to server');
      });
  };

  return (
    <span>
      {' Helpful?'}
      { !clicked ? (
        <button type="submit" onClick={handleHelpfulQuestion}>
          Yes
          {' '}
          {` (${helpVotes})`}
        </button>
      )
        : <span>Thank you!</span> }
    </span>
  );
}

export default Helpful;
