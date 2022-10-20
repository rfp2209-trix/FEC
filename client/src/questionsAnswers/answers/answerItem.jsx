import React from 'react';
import Helpful from './helpfulAnswer.jsx';
import Report from './reportAnswer.jsx';
import { date } from '../../../helpers.js';

function AnswerItem({ values }) {
  const { helpfulness } = values;
  // console.log('type of value date is: ', typeof (new Date(values.date).toDateString('en-us')));
  return (
    <div>
      {values.body}
      <Helpful answerID={values.id} helpfulness={helpfulness} />
      <Report answerID={values.id} />
      <div>
        <small>
          <b>
            {values.answerer_name === 'Atelier' ? <span><b>Seller </b></span> : null}
            {'     '}
            {values.answerer_name}
          </b>
          {'     '}
          {date(values.date)[0]}
        </small>
      </div>
    </div>
  );
}

export default AnswerItem;
