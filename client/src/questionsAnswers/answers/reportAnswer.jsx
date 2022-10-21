import React, { useState } from 'react';
import axios from 'axios';

function Report({ answerID }) {
  const [reported, setReported] = useState(false);
  const handleReportAnswer = () => {
    console.log('You just tried to report something');
    axios.put(`/fec/answer/report/${answerID}`)
      .then(() => {
        setReported(!reported);
        console.log('Successfully Reported to Server');
      })
      .catch(() => {
        console.log('Could not report to server');
      });
    setReported(true);
  };
  return (
    <span>
      {reported ? <small> Reported </small> : <button type="submit" onClick={handleReportAnswer}><small>Report</small></button> }
    </span>
  );
}

export default Report;
