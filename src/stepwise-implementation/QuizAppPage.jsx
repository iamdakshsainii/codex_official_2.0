import React from 'react';
import StepwiseComponent from './StepwiseComponent';

function QuizAppPage() {
  const steps = [
    {
      title: 'Step 1: HTML Structure',
      description: 'Create the basic HTML for the quiz app.',
      code: `
        <div id="quiz-container">
          <div id="question"></div>
          <div id="options"></div>
          <button id="nextBtn">Next</button>
        </div>
      `,
      demo: `
        <div id="quiz-container">
          <div id="question">What is 2 + 2?</div>
          <div id="options">
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
          </div>
          <button id="nextBtn">Next</button>
        </div>
      `,
    },
    {
      title: 'Step 2: CSS Styling',
      description: 'Add CSS styles to make the quiz app look good.',
      code: `
        /* CSS for styling */
        #quiz-container { text-align: center; }
        #options button { padding: 10px; margin: 5px; }
      `,
      demo: `
        <style>
          #quiz-container { text-align: center; }
          #options button { padding: 10px; margin: 5px; }
        </style>
        <div id="quiz-container">
          <div id="question">What is 2 + 2?</div>
          <div id="options">
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
          </div>
          <button id="nextBtn">Next</button>
        </div>
      `,
    },
    {
      title: 'Step 3: JavaScript Logic (React)',
      description: 'Write React code to implement the quiz functionality.',
      code: `
        import React, { useState } from 'react';

        function QuizApp() {
          const [currentQuestion, setCurrentQuestion] = useState(0);
          const questions = [
            { question: 'What is 2 + 2?', options: ['3', '4', '5', '6'], correctAnswer: '4' },
            { question: 'What is the capital of France?', options: ['London', 'Paris', 'Berlin', 'Rome'], correctAnswer: 'Paris' }
          ];

          const handleAnswerSelect = (selectedOption) => {
            if (selectedOption === questions[currentQuestion].correctAnswer) {
              alert('Correct!');
            } else {
              alert('Incorrect!');
            }
            setCurrentQuestion(currentQuestion + 1);
            if (currentQuestion === questions.length - 1) {
              alert('Quiz completed!');
            }
          };

          return (
            <div id="quiz-container">
              <div id="question">{questions[currentQuestion].question}</div>
              <div id="options">
                {questions[currentQuestion].options.map(option => (
                  <button key={option} onClick={() => handleAnswerSelect(option)}>{option}</button>
                ))}
              </div>
            </div>
          );
        }
      `,
      demo: `
        <script src="https://cdn.jsdelivr.net/npm/react@17.0.2/umd/react.development.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/react-dom@17.0.2/umd/react-dom.development.js"></script>
        <div id="quiz-container">
          <div id="question">What is 2 + 2?</div>
          <div id="options">
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
          </div>
          <button id="nextBtn">Next</button>
        </div>
        <script>
          function handleAnswerSelect(selectedOption) {
            const currentQuestion = 0;
            const questions = [
              { question: 'What is 2 + 2?', correctAnswer: '4' },
              { question: 'What is the capital of France?', correctAnswer: 'Paris' }
            ];

            if (selectedOption === questions[currentQuestion].correctAnswer) {
              alert('Correct!');
            } else {
              alert('Incorrect!');
            }
          }
        </script>
      `,
    },
    {
      title: 'Step 4: Complete Implementation',
      description: 'Integrate all the code and run the project.',
      code: `
        <!-- HTML -->
        <div id="quiz-container">
          <div id="question"></div>
          <div id="options"></div>
          <button id="nextBtn">Next</button>
        </div>

        /* CSS */
        #quiz-container { text-align: center; }
        #options button { padding: 10px; margin: 5px; }

        // React Code
        import React, { useState } from 'react';

        function QuizApp() {
          const [currentQuestion, setCurrentQuestion] = useState(0);
          const questions = [
            { question: 'What is 2 + 2?', options: ['3', '4', '5', '6'], correctAnswer: '4' },
            { question: 'What is the capital of France?', options: ['London', 'Paris', 'Berlin', 'Rome'], correctAnswer: 'Paris' }
          ];

          const handleAnswerSelect = (selectedOption) => {
            if (selectedOption === questions[currentQuestion].correctAnswer) {
              alert('Correct!');
            } else {
              alert('Incorrect!');
            }
            setCurrentQuestion(currentQuestion + 1);
            if (currentQuestion === questions.length - 1) {
              alert('Quiz completed!');
            }
          };

          return (
            <div id="quiz-container">
              <div id="question">{questions[currentQuestion].question}</div>
              <div id="options">
                {questions[currentQuestion].options.map(option => (
                  <button key={option} onClick={() => handleAnswerSelect(option)}>{option}</button>
                ))}
              </div>
            </div>
          );
        }
      `,
      demo: `
        <div id="quiz-container">
          <div id="question">What is 2 + 2?</div>
          <div id="options">
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
          </div>
          <button id="nextBtn">Next</button>
        </div>
      `,
    },
  ];

  const renderDemo = (stepData) => {
    return <div dangerouslySetInnerHTML={{ __html: stepData.demo }} />;
  };

  return (
    <StepwiseComponent steps={steps} renderDemo={renderDemo} />
  );
}

export default QuizAppPage;
