import React from 'react';

function Ask() {
  const handleAsk = () => {
    console.log('A modal window should pop-up, with form for question');
  };

  return (
    <button type="submit" onClick={handleAsk} width="50">Ask A Question</button>
  );
}

export default Ask;
