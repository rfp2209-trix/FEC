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
    <AnswerContainer>
      <TopRowContainer>
        <AnswerTextContainer>{values.body}</AnswerTextContainer>
        Helpful?
        <Helpful answerID={values.id} helpfulness={helpfulness} />
      </TopRowContainer>
      <div>
        <small>
          <b>
            {values.answerer_name === 'Atelier' ? <small><b>Seller </b></small> : null}
          </b>
          <UserDetailsRowContainer>
            <UserDetailsContainer>{`${values.answerer_name}  |  ${date(values.date)[0]}`}</UserDetailsContainer>
            <Report answerID={values.id} />
          </UserDetailsRowContainer>
        </small>
      </div>
      { photos ? photos.map((each) => (
        <PhotoContainer value={each} key={`photoKey: ${each}`}>
          <Photo URL={each} />
        </PhotoContainer>
      )) : null }
    </AnswerContainer>
  );
}

export default AnswerItem;

const PhotoContainer = styled.div`
  display: table-cell;
  padding: 2px;
`;

const UserDetailsRowContainer = styled.div`
  display: flex;
`;

const UserDetailsContainer = styled.div`
  flex-grow: 1;
  padding: 5px;
`;

const AnswerContainer = styled.div`
  padding: 8px;
  border: 1px solid #D3D3D3;
`;

const TopRowContainer = styled.div`
  display: flex;
`;

const AnswerTextContainer = styled.div`
  flex-grow: 1;
  padding: 5px;
`;
