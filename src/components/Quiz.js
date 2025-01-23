import React, { useState } from "react";

const Quiz = ({ questions, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(score + 1);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
      onComplete(score + (isCorrect ? 1 : 0));
    }
  };

  if (showResult) {
    return (
      <div className="quiz-result">
        <h2>Quiz Completed!</h2>
        <p>Your score: {score} / {questions.length}</p>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <h3>{questions[currentQuestion].question}</h3>
      <ul>
        {questions[currentQuestion].options.map((option, index) => (
          <li key={index}>
            <button onClick={() => handleAnswer(option.isCorrect)}>
              {option.text}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Quiz;
