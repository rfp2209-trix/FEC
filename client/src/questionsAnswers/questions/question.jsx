import React, { useState } from 'react';
import AnswerItem from '../answers/answerItem.jsx';
import Helpful from './helpfulQuestion.jsx';
import Report from './reportQuestion.jsx';
import AnswerModal from '../answerQuestionForm.jsx';
import { objectSorter } from '../../../helpers.js';

function Question(props) {
  const { data } = props;
  const [moreAnswers, setMoreAnswers] = useState(false);
  const [answerQuestion, setAnswerQuestion] = useState(false);
  const sortedAnswers = objectSorter(data.answers, 'helpfulness');
  const currAnswers = moreAnswers ? Object.values(sortedAnswers)
    : Object.values(sortedAnswers).slice(0, 2);
  const handleMoreAnswers = () => {
    setMoreAnswers(!moreAnswers);
  };
  const handleAnswerQuestion = (e) => {
    e.stopPropagation();
    setAnswerQuestion(true);
    console.log('answer question was clicked');
  };
  console.log('data keys', Object.keys(data.answers));

  return (
    <div>
      <b>Q: </b>
      {data.question_body}
      <Helpful questionID={data.question_id} helpVotes={data.question_helpfulness} />
      <Report questionID={data.question_id} />
      <br />
      <b>A: </b>
      {currAnswers.map((each) => <AnswerItem values={each} key={each.id} />)}
      {Object.keys(data.answers).length > 2 ? (
        <button type="submit" onClick={handleMoreAnswers}>
          { !moreAnswers ? <small>Show More Answers</small> : <small>Collapse Answers</small> }
        </button>
      ) : null }
      <button type="submit" onClick={handleAnswerQuestion}><small>Answer Question</small></button>
      {answerQuestion
        ? (
          <AnswerModal
            currentQData={[data.question_id, data.question_body]}
            setAnswerQuestion={setAnswerQuestion}
          />
        ) : null }
    </div>
  );
}

export default Question;
