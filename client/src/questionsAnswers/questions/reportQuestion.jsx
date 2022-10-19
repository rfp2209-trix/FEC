import React from 'react';

function Report() {
  const handleReportQuestion = () => {
    console.log('You just tried to report this question');
  };

  return (
    <button type="submit" onClick={handleReportQuestion}>
      Report
      <br />
      Question
    </button>
  );
}

export default Report;
