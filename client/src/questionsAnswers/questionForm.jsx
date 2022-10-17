import React from 'react';

function QuestionForm() {
  const handleSubmit = () => {
    console.log('Replace this with an axios post request');
  };

  return (
    <form>
      <em>Form for Submitting Questions</em>
      <br />
      Your Nickname
      <br />
      <input size="100" placeholder="Example: Boaty McBoatFace" required />
      <br />
      <br />
      Your Email
      <br />
      <input size="100" placeholder="boatymcboatface@google.com" required />
      <br />
      <br />
      Your Question
      <br />
      <input size="100" placeholder="How long does it take to put together this product?" required />
      <br />
      <button type="submit" onClick={handleSubmit}>Submit Question</button>
    </form>
  );
}

export default QuestionForm;
