import React from 'react';
import Helpful from './helpfulAnswer.jsx';
import Report from './reportAnswer.jsx';

function AnswerItem() {
  const seller = true;
  return (
    <div>
      {/* extract thumbs up, extract answer, extract username,
      extract date posted, render dynamically */}
      3👍
      A: Single Answer Rendered Here via JSX
      <div>
        <small>
          {seller ? <span><b>Seller </b></span> : null}
          User 1337
          - 10/17/2022 - 3 months ago
        </small>
        <Helpful />
        <Report />
      </div>
    </div>
  );
}

export default AnswerItem;
