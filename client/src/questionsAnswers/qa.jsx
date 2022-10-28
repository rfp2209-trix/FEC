/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
// import axios from 'axios';
import styled from 'styled-components';
import Question from './questions/question.jsx';
import { useProductsContext } from '../Context.jsx';
import { BigButton } from './qa-style.js';

function QA({ setCurrentForm, setCurrentQData }) {
  const [searching, setSearching] = useState(false);
  const [moreQuestions, setMoreQuestions] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const { questionsData, loading } = useProductsContext();

  if (loading) {
    return <span />;
  }
  console.log('questiosn Data: ', questionsData);

  const handleQueryResults = (results) => {
    console.log('searching? : ', searching);
    setSearchResults(results);
  };

  const handleMoreQuestions = () => {
    setMoreQuestions(!moreQuestions);
    console.log(`The user wants to see more questions: ${moreQuestions}`);
  };

  const mapTarget = searching ? searchResults : questionsData.results;

  const handleSearch = (query) => {
    if (query.length >= 3) {
      setSearching(true);
      const queryResults = questionsData.results.filter((each) => {
        const answerList = each.answers;
        return each.question_body.indexOf(query) !== -1
        || Object.values(answerList).some((answer) => answer.body.indexOf(query) !== -1);
      });
      console.log('query results: ', queryResults);
      handleQueryResults(queryResults);
    } else {
      setSearching(false);
    }
  };
  const handleAsk = (e) => {
    e.stopPropagation();
    setCurrentForm('new question');
  };

  return (
    <div>
      <h3>Questions & Answers</h3>
      <input
        type="text"
        placeholder="Does this make me a better software engineer?"
        size="75"
        onChange={(e) => { handleSearch(e.target.value); }}
      />
      <br />
      <QAContainer>
        { !moreQuestions
          ? (mapTarget.slice(0, 4)
            .map((each) => (
              <Question
                data={each}
                key={each.question_id}
                setCurrentForm={setCurrentForm}
                setCurrentQData={setCurrentQData}
              />
            ))) : (
            mapTarget.map((each) => (
              <Question
                data={each}
                key={each.question_id}
                setCurrentQData={setCurrentQData}
                setCurrentForm={setCurrentForm}
              />
            ))
          )}
      </QAContainer>

      {questionsData.results.length > 4 ? (
        <BigButton type="submit" onClick={handleMoreQuestions}>
          { moreQuestions ? (<span>Collapse</span>)
            : (<span>SEE MORE QUESTIONS</span>) }
        </BigButton>
      ) : null }
      <br />
      <BigButton type="submit" onClick={handleAsk} width="50"><small>ASK A QUESTION</small></BigButton>
    </div>
  );
}

export default QA;

const QAContainer = styled.div`
  width: 75vw;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
