import React, { useState, useEffect } from 'react';

    function DailyChallengeWidget() {
      const [challenge, setChallenge] = useState(null);
      const [showSolution, setShowSolution] = useState(false);

      useEffect(() => {
        const fetchChallenge = async () => {
          try {
            const response = await fetch('/data/challenges.json');
            if (response.ok) {
              const challenges = await response.json();
              const today = new Date().toLocaleDateString();
              const storedChallenge = localStorage.getItem('dailyChallenge');
              const storedDate = localStorage.getItem('dailyChallengeDate');

              let selectedChallenge;
              if (storedChallenge && storedDate === today) {
                selectedChallenge = JSON.parse(storedChallenge);
              } else {
                const challengeIndex = new Date().getDate() % challenges.length;
                selectedChallenge = challenges[challengeIndex];
                localStorage.setItem('dailyChallenge', JSON.stringify(selectedChallenge));
                localStorage.setItem('dailyChallengeDate', today);
              }
              setChallenge(selectedChallenge);
              setShowSolution(false);
            }
          } catch (error) {
            console.error('Error fetching challenges:', error);
          }
        };
        fetchChallenge();
      }, []);

      useEffect(() => {
        if (challenge) {
          const timer = setTimeout(() => {
            setShowSolution(true);
          }, 10 * 60 * 1000); // Show solution after 10 minutes

          return () => clearTimeout(timer);
        }
      }, [challenge]);

      if (!challenge) {
        return <div>Loading daily challenge...</div>;
      }

      return (
        <div className="container mx-auto py-12 px-4">
          <h2 className="text-2xl font-semibold mb-4">Daily Challenge</h2>
          <h3 className="text-xl font-semibold mb-2">{challenge.title}</h3>
          <p className="text-gray-400 mb-4">{challenge.description}</p>
          {challenge.codeSnippet && (
            <pre className="bg-gray-700 p-4 rounded-md mb-4">
              <code className="text-white whitespace-pre-wrap">{challenge.codeSnippet}</code>
            </pre>
          )}
          {showSolution && challenge.solutionLink && (
            <div className="text-center">
              <a
                href={challenge.solutionLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
              >
                View Solution
              </a>
            </div>
          )}
        </div>
      );
    }

    export default DailyChallengeWidget;
