import React, { useState } from 'react';
import styled from 'styled-components';
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
  };

  return (
    <BigQuestionContainer>
      <QuestionContainer>
        <QContainer><b>Q: </b></QContainer>
        <QBodyContainer>{data.question_body}</QBodyContainer>
        <button type="submit" onClick={handleAnswerQuestion}><small>Answer Question</small></button>
        <Helpful questionID={data.question_id} helpVotes={data.question_helpfulness} />
      </QuestionContainer>
      <br />
      <QuestionAnswerContainer>
        <AContainer><b>A: </b></AContainer>
        <AnswerListContainer>
          {currAnswers.map((each) => <AnswerItem values={each} key={each.id} />)}
        </AnswerListContainer>
      </QuestionAnswerContainer>
      <QInteractContainer>
        {Object.keys(data.answers).length > answerCount ? (
          <button type="submit" onClick={handleMoreAnswers}>
            <small>Show More Answers</small>
          </button>
        ) : null }
        <Report questionID={data.question_id} />
      </QInteractContainer>
      {answerQuestion
        ? (
          <AnswerModal
            currentQData={[data.question_id, data.question_body]}
            setAnswerQuestion={setAnswerQuestion}
          />
        ) : null }
    </BigQuestionContainer>
  );
}

export default Question;

const BigQuestionContainer = styled.div`
  border: 1px solid grey;
  border-radius: 5px;
`;

const QuestionContainer = styled.div`
  display: flex;
  padding: .5em;
  background: honeydew;
`;

const QContainer = styled.div`
  width: 20px;
  padding: 5px;
  font-size: 1em;
`;

const QBodyContainer = styled.div`
  flex-grow: 9;
  padding: 5px;
  font-size: 1em;
`;

const QuestionAnswerContainer = styled.div`
  display:flex;
  flex-direction: row;
`;

const AnswerListContainer = styled.div`
  flex-grow: 1;
`;

const AContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 20px;
  padding: 5px;
  font-size: 1em;
`;

const QInteractContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 30px;
`;
