import React, { useState } from 'react';

function Report() {
  const [clicked, setClicked] = useState(false);
  const handleReportAnswer = () => {
    console.log('You just tried to report something');
    setClicked(true);
  };
  return (
    <span>
      {clicked ? <small> Reported </small> : <button type="submit" onClick={handleReportAnswer}>Report</button> }
    </span>
  );
}

export default Report;
