import React, { useState } from 'react';
import AnswerItem from '../answers/answerItem.jsx';
import Helpful from './helpfulQuestion.jsx';
import Report from './reportQuestion.jsx';
import { objectSorter } from '../../../helpers.js';

function Question(props) {
  const { data } = props;
  const [moreAnswers, setMoreAnswers] = useState(false);
  const sortedAnswers = objectSorter(data.answers, 'helpfulness');
  const handleMoreAnswers = () => {
    setMoreAnswers(!moreAnswers);
  };

  return (
    <div>
      <b>Q: </b>
      {data.question_body}
      <Helpful questionID={data.question_id} helpVotes={data.question_helpfulness} />
      <Report questionID={data.question_id} />
      <br />
      <b>A: </b>
      { !moreAnswers ? (
        Object.values(sortedAnswers).slice(0, 2)
          .map((each) => (<AnswerItem values={each} key={each.id} />))
      ) : (
        Object.values(sortedAnswers)
          .map((each) => (<AnswerItem values={each} key={each.id} />))
      )}
      <button type="submit" onClick={handleMoreAnswers}>
        { !moreAnswers ? <span>Show More Answers</span> : <span>Collapse Answers</span> }
      </button>
    </div>
  );
}

export default Question;
