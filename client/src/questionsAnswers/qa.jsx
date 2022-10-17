import React, { useState } from 'react';
// import axios from 'axios';
import Question from './questions/question.jsx';
import Ask from './ask.jsx';
import QuestionForm from './questionForm.jsx';

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
  return (
    <div>
      <h3>Questions & Answers</h3>
      <input type="text" placeholder="Does this make me a better software engineer?" size="75" onChange={(e) => { setInput(e.target.value); }} onKeyDown={(e) => { handleKeyDown(e); }} />
      <button type="submit" onClick={handleSearch}>Search</button>

      <ul>
        Map all the questions for this product ID through Question component
        <Question />
      </ul>
      <button type="submit">See More Questions</button>
      <Ask />
      <QuestionForm />
    </div>
  );
}

export default QA;