import React from 'react';
    import { Link, useNavigate } from 'react-router-dom';

    function AchievementBadgesMessage() {
      const navigate = useNavigate();

      const handlePrev = () => {
        navigate('/khazana/messages/personalized-dashboard');
      };

      const handleNext = () => {
        navigate('/khazana/messages/skill-exchange-forum');
      };

      return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl z-0"></div>
          <div className="container mx-auto px-4 py-8 text-center relative z-10">
            <div className="flex justify-between items-center mb-4">
              <button
                onClick={handlePrev}
                className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition-all"
              >
                Previous
              </button>
              <button
                onClick={handleNext}
                className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition-all"
              >
                Next
              </button>
            </div>
            <div className="flex items-center justify-center flex-col">
              <h2 className="text-5xl font-bold mb-6 relative before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:h-1 before:w-24 before:bg-blue-500 before:rounded">
                Achievement Badges Unveiled!
              </h2>
              <p className="text-gray-300 text-xl mb-8">
                Track your progress and achievements with visual badges. This feature will allow you to earn badges for completing courses, projects, or challenges, providing a visual representation of your accomplishments.
              </p>
              <div className="flex justify-center">
                <Link to="/khazana" className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 transform hover:-translate-y-1">
                  Return to Khazana
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    }

    export default AchievementBadgesMessage;
