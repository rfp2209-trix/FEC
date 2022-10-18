import React from 'react';

function Helpful() {
  const handleHelpfulQuestion = () => {
    console.log(`Replace me with function to iterate the helpfulness of the question. Need to insert
    the question ID as a parameter to this function once fleshed out`);
  };

  return (
    <button type="submit" onClick={handleHelpfulQuestion}>
      Helpful
      <br />
      Question
    </button>
  );
}

export default Helpful;
