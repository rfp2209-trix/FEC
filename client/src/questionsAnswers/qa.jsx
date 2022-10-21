/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
// import axios from 'axios';
import Question from './questions/question.jsx';
import { useProductsContext } from '../Context.jsx';

function QA({ setCurrentForm, setCurrentQData }) {
  const [input, setInput] = useState('');
  const [moreQuestions, setMoreQuestions] = useState(false);
  const handleMoreQuestions = () => {
    setMoreQuestions(!moreQuestions);
  };
  const handleSearch = () => {
    console.log(`You tried to search for ${input}`);
  };
  const handleAsk = (e) => {
    e.stopPropagation();
    console.log('CLICKED!');
    setCurrentForm('new question');
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };
  const { questionsData, loading } = useProductsContext();
  if (loading) {
    return <small />;
  }

  return (
    <div>
      <h3>Questions & Answers</h3>
      <input
        type="text"
        placeholder="Does this make me a better software engineer?"
        size="75"
        onChange={(e) => { setInput(e.target.value); }}
        onKeyDown={(e) => { handleKeyDown(e); }}
      />
      <button type="submit" onClick={handleSearch}>Search</button>

      <ul>
        { !moreQuestions ? (
          questionsData.results.slice(0, 4)
            .map((each) => (
              <Question
                data={each}
                key={each.question_id}
                setCurrentForm={setCurrentForm}
                setCurrentQData={setCurrentQData}
              />
            ))
        ) : (
          questionsData.results.map((each) => (
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
