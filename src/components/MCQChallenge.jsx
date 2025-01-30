import React, { useState, useEffect } from 'react';

    function MCQChallenge({ onClose }) {
      const [challenge, setChallenge] = useState(null);
      const [selectedAnswer, setSelectedAnswer] = useState(null);
      const [feedback, setFeedback] = useState(null);
      const [loading, setLoading] = useState(true);

      useEffect(() => {
        const fetchChallenge = async () => {
          setLoading(true);
          try {
            const response = await fetch('/data/challenges.json');
            if (response.ok) {
              const challenges = await response.json();
              const now = new Date().getTime();
              const storedChallenge = localStorage.getItem('dailyMCQChallenge');
              const storedTimestamp = localStorage.getItem('dailyMCQChallengeTimestamp');

              let selectedChallenge;
              if (storedChallenge && storedTimestamp && (now - parseInt(storedTimestamp, 10) < 24 * 60 * 60 * 1000)) {
                selectedChallenge = JSON.parse(storedChallenge);
              } else {
                const challengeIndex = new Date().getDate() % challenges.length;
                selectedChallenge = challenges[challengeIndex];
                localStorage.setItem('dailyMCQChallenge', JSON.stringify(selectedChallenge));
                localStorage.setItem('dailyMCQChallengeTimestamp', now.toString());
              }
              setChallenge(selectedChallenge);
              setSelectedAnswer(null);
              setFeedback(null);
            }
          } catch (error) {
            console.error('Error fetching challenges:', error);
          } finally {
            setLoading(false);
          }
        };
        fetchChallenge();
      }, []);

      const handleAnswerSelect = (answer) => {
        setSelectedAnswer(answer);
        if (challenge && answer === challenge.correctAnswer) {
          setFeedback('Correct! 🎉');
        } else {
          setFeedback(`Incorrect! You need to strengthen your concepts in ${challenge.topic}.`);
        }
      };

      if (loading) {
        return (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-gray-800 p-8 rounded-lg max-w-md w-full text-center">
              Loading daily challenge...
            </div>
          </div>
        );
      }

      return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-gray-800 p-8 rounded-lg max-w-md w-full">
            <h2 className="text-2xl font-semibold text-center mb-4">Daily Challenge</h2>
            <h3 className="text-xl font-semibold mb-2">{challenge.topic}</h3>
            <p className="text-gray-300 mb-4">{challenge.question}</p>
            <div className="space-y-2">
              {challenge.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(option)}
                  className={`w-full p-3 rounded-lg text-left transition-colors duration-200 relative overflow-hidden
                    ${selectedAnswer === option
                      ? (option === challenge.correctAnswer
                        ? 'bg-green-500 text-white'
                        : 'bg-red-500 text-white'
                      )
                      : 'bg-gray-700 text-white hover:bg-purple-600'
                    }`}
                  disabled={selectedAnswer !== null}
                >
                  <span className="relative z-10">{option}</span>
                </button>
              ))}
            </div>
            {feedback && (
              <p className={`text-center mt-4 ${selectedAnswer === challenge.correctAnswer ? 'text-green-500' : 'text-red-500'}`}>
                {feedback}
              </p>
            )}
            <div className="text-center mt-6">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      );
    }

    export default MCQChallenge;
