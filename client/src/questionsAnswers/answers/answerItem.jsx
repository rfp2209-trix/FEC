import React from 'react';
import styled from 'styled-components';
import Helpful from './helpfulAnswer.jsx';
import Report from './reportAnswer.jsx';
import { date } from '../../../helpers.js';
import Photo from './photo.jsx';

function AnswerItem({ values }) {
  const { helpfulness } = values;
  const { photos } = values; // returns an array with URLs

  return (
    <div>
      {values.body}
      <Helpful answerID={values.id} helpfulness={helpfulness} />
      <Report answerID={values.id} />
      <div>
        <small>
          <b>
            {values.answerer_name === 'Atelier' ? <small><b>Seller </b></small> : null}
            {values.answerer_name}
          </b>
          {date(values.date)[0]}
        </small>
      </div>
      { photos ? photos.map((each) => (
        <PhotoContainer value={each} key={`photoKey: ${each}`}>
          <Photo URL={each} />
        </PhotoContainer>
      )) : null }
    </div>
  );
}

export default AnswerItem;

const PhotoContainer = styled.div`
  display: table-cell;
  padding: 2px;
  `;
