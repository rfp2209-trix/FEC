import React, { useState } from 'react';
import AnswerItem from '../answers/answerItem.jsx';
import Helpful from './helpfulQuestion.jsx';
import Report from './reportQuestion.jsx';
import AnswerModal from '../answerQuestionForm.jsx';
import { objectSorter } from '../../../helpers.js';

function Question(props) {
  const { data } = props;
  const [answerCount, setAnswerCount] = useState(2);
  // const [moreAnswers, setMoreAnswers] = useState(false);
  const [answerQuestion, setAnswerQuestion] = useState(false);
  const sortedAnswers = objectSorter(data.answers, 'helpfulness');
  const currAnswers = Object.values(sortedAnswers).slice(0, answerCount);
  const handleMoreAnswers = () => {
    let currCount = answerCount;
    setAnswerCount(currCount += 2);
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
      {Object.keys(data.answers).length > answerCount ? (
        <button type="submit" onClick={handleMoreAnswers}>
          <small>Show More Answers</small>
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
