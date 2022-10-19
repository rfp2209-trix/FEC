import React from 'react';
import Helpful from './helpfulAnswer.jsx';
import Report from './reportAnswer.jsx';

function AnswerItem({ values }) {
  const { helpfulness } = values;
  return (
    <div>
      {/* extract thumbs up, extract answer, extract username,
      extract date posted, render dynamically */}
      {values.body}
      <div>
        <small>
          <b>
            {values.answerer_name === 'Atelier' ? <span><b>Seller </b></span> : null}
            {'     '}
            {values.answerer_name}
          </b>
          {'     '}
          {values.date}
        </small>
        <Helpful answerID={values.id} helpfulness={helpfulness} />
        <Report answerID={values.id} />
      </div>
    </div>
  );
}

export default AnswerItem;
