/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
// import axios from 'axios';
import Question from './questions/question.jsx';
import Ask from './ask.jsx';
import QuestionForm from './questionForm.jsx';
import { useProductsContext } from '../Context.jsx';

function QA() {
  const [input, setInput] = useState('');
  const handleSearch = () => {
    console.log(`You tried to search for ${input}`);
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const { questionsData, loading } = useProductsContext();
  if (loading) {
    return <span />;
  }
  console.log('question data: ', questionsData);
  return (
    <div>
      <h3>Questions & Answers</h3>
      <input type="text" placeholder="Does this make me a better software engineer?" size="75" onChange={(e) => { setInput(e.target.value); }} onKeyDown={(e) => { handleKeyDown(e); }} />
      <button type="submit" onClick={handleSearch}>Search</button>

      <ul>
        { questionsData.results.map((each, index) => (<Question data={each} key={index} />))}
      </ul>
      <button type="submit">See More Questions</button>
      <Ask />
      <QuestionForm />
    </div>
  );
}

export default QA;
