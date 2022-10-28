import React, { useState } from 'react';
import styled from 'styled-components';
import AnswerItem from '../answers/answerItem.jsx';
import Helpful from './helpfulQuestion.jsx';
import Report from './reportQuestion.jsx';
import AnswerModal from '../answerQuestionForm.jsx';
import { objectSorter } from '../../../helpers.js';
import { BigButton, AnswerButton } from '../qa-style.js';

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
        <QBodyContainer><b>{data.question_body}</b></QBodyContainer>
        <AnswerButton type="submit" onClick={handleAnswerQuestion}>Answer Question</AnswerButton>
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
          <BigButton type="submit" onClick={handleMoreAnswers}>
            <small>SHOW MORE ANSWERS</small>
          </BigButton>
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
  align-items: center;
  padding: .5em;
  background: honeydew;
`;

const QContainer = styled.div`
  width: 20px;
  padding: 5px;
  font-size: 1.25em;
`;

const QBodyContainer = styled.div`
  flex-grow: 9;
  padding: 5px;
  font-size: 1.25em;
`;

const QuestionAnswerContainer = styled.div`
  display:flex;
  flex-direction: row;
`;

const AnswerListContainer = styled.div`
  flex-grow: 1;
`;

const AContainer = styled.div`
  width: 20px;
  padding: 5px 12px;
  font-size: 1.25em;
`;

const QInteractContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 20px;
`;
