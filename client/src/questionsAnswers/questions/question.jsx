import React from 'react';
import AnswerItem from '../answers/answerItem.jsx';
import Helpful from './helpfulQuestion.jsx';
import Report from './reportQuestion.jsx';

function Question(props) {
  const { data } = props;

  return (
    <div key={data.question_id}>
      <b>Q: </b>
      {data.question_body}
      <Helpful questionID={data.question_id} helpVotes={data.question_helpfulness} />
      <Report questionID={data.question_id} />
      <br />
      <b>A: </b>
      {Object.values(data.answers).map((each) => (<AnswerItem values={each} />))}
    </div>
  );
}

export default Question;
