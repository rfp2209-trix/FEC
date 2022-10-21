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
    <span>
      {!reported ? (
        <button type="submit" onClick={handleReportQuestion}>
          <small>
            Report Question
          </small>
        </button>
      ) : <span>Reported</span> }
    </span>
  );
}

export default Report;
