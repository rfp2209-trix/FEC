import React, { useState } from 'react';

function Helpful() {
  const [clicked, setClicked] = useState(false);
  const handleHelpfulAnswer = () => {
    console.log('You said this answer was helpful');
    setClicked(true);
  };

  return (
    <span>
      {clicked ? <small> Thank You! </small> : <button type="submit" onClick={handleHelpfulAnswer}>Helpful</button>}
    </span>
  );
}

export default Helpful;
