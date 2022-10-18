import React from 'react';
import AnswerItem from '../answers/answerItem.jsx';
import Helpful from './helpfulQuestion.jsx';
import Report from './reportQuestion.jsx';

function Question() {
  return (
    <div>
      7👍
      Q: Single Question Component, Raw Question Text Here
      <Helpful />
      <Report />
      <br />
      <AnswerItem />
    </div>
  );
}

export default Question;
