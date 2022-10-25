/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
// import axios from 'axios';
import Question from './questions/question.jsx';
import { useProductsContext } from '../Context.jsx';

function QA({ setCurrentForm, setCurrentQData }) {
  const [searching, setSearching] = useState(false);
  const [moreQuestions, setMoreQuestions] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const { questionsData, loading } = useProductsContext();

  if (loading) {
    return <span />;
  }

  const handleQueryResults = (results) => {
    console.log('searching? : ', searching);
    setSearchResults(results);
  };

  const handleMoreQuestions = () => {
    setMoreQuestions(!moreQuestions);
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
  console.log('map target slice 4', mapTarget.slice(0, 4));
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
      <ul>
        { !moreQuestions
          ? mapTarget.slice(0, 4)
            .map((each) => (
              <Question
                data={each}
                key={each.question_id}
                setCurrentForm={setCurrentForm}
                setCurrentQData={setCurrentQData}
              />
            )) : (
            mapTarget.map((each) => (
              <Question
                data={each}
                setCurrentQData={setCurrentQData}
                setCurrentForm={setCurrentForm}
                key={each.question_id}
              />
            ))
          )}
      </ul>

      <button type="submit" onClick={handleMoreQuestions}>
        { moreQuestions ? (<small>Collapse</small>)
          : (<small>See More Questions</small>) }
      </button>
      <button type="submit" onClick={handleAsk} width="50"><small>Ask A Question</small></button>
    </div>
  );
}

export default QA;
