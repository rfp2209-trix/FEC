import React, { useState } from 'react';
import axios from 'axios';

function Report({ questionID }) {
  const [reported, setReported] = useState(false);
  const handleReportQuestion = () => {
    axios.put(`/fec/question/report/${questionID}`)
      .then(() => {
        setReported(!reported);
        console.log('Reported to Server!');
      })
      .catch(() => {
        console.log('Could not report to server');
      });
  };

  return (
    <div>
      {!reported ? (
        <button type="submit" onClick={handleReportQuestion}>
          Report
          <br />
          Question
        </button>
      ) : <span>Reported</span> }
    </div>
  );
}

export default Report;
