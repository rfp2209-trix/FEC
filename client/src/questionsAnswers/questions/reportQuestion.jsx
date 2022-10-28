import React, { useState } from 'react';
import axios from 'axios';
import { ReportButton } from '../qa-style.js';

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
        <ReportButton type="submit" height="120px" onClick={handleReportQuestion}>
          <small>
            Report Question
          </small>
        </ReportButton>
      ) : <span>Reported</span> }
    </span>
  );
}

export default Report;
