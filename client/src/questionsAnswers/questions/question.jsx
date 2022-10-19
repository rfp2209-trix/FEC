import React, { useState } from 'react';
import AnswerItem from '../answers/answerItem.jsx';
import Helpful from './helpfulQuestion.jsx';
import Report from './reportQuestion.jsx';

function Question(props) {
  const { data } = props;
  const [moreAnswers, setMoreAnswers] = useState(false);
  const handleMoreAnswers = () => {
    setMoreAnswers(!moreAnswers);
  };
  console.log('data answers: ', Object.values(data.answers).slice(0, 2));

  return (
    <div key={data.question_id}>
      <b>Q: </b>
      {data.question_body}
      <Helpful questionID={data.question_id} helpVotes={data.question_helpfulness} />
      <Report questionID={data.question_id} />
      <br />
      <b>A: </b>
      { !moreAnswers ? (
        Object.values(data.answers).slice(0, 1).map((each) => (<AnswerItem values={each} />))
      ) : (
        Object.values(data.answers).map((each) => (<AnswerItem values={each} />))
      )}
      {Object.values(data.answers).map((each) => (<AnswerItem values={each} />))}
      <button type="submit" onClick={handleMoreAnswers}>
        { !moreAnswers ? <span>Show More Answers</span> : <span>Collapse Answers</span> }
      </button>
    </div>
  );
}

export default Question;
