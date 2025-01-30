import React, { useState, useEffect } from 'react';
    import { Link } from 'react-router-dom';
    import Badge from './Badge';

    function Achievements() {
      // Achievements Feature: State for awarded badges
      const [badges, setBadges] = useState(() => {
        const storedBadges = localStorage.getItem('achievementsBadges');
        return storedBadges ? JSON.parse(storedBadges) : [];
      });

      // Achievements Feature: Effect to save badges to local storage
      useEffect(() => {
        localStorage.setItem('achievementsBadges', JSON.stringify(badges));
      }, [badges]);

      // Achievements Feature: Available badges with descriptions and icons
      const availableBadges = {
        'Code Explorer': {
          description: 'Awarded for completing a certain number of coding challenges.',
          icon: '💻',
        },
        'Problem Solver': {
          description: 'Awarded for completing a certain number of debugging challenges.',
          icon: '💡',
        },
        'Project Master': {
          description: 'Awarded for completing a certain number of projects.',
          icon: '🚀',
        },
        'Community Contributor': {
          description: 'Awarded for actively participating in the community.',
          icon: '🤝',
        },
      };

      // Achievements Feature: Function to award a badge (for demonstration)
      const awardBadge = (badgeName) => {
        if (!badges.includes(badgeName)) {
          setBadges([...badges, badgeName]);
        }
      };

      // Achievements Feature: Function to check if a badge is awarded
      const isBadgeAwarded = (badgeName) => badges.includes(badgeName);

      return (
        <div className="container mx-auto py-12 px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Achievement Badges</h1>
          <p className="text-gray-400 text-center mb-8">
            Track your progress and achievements with visual badges.
          </p>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-blue-500/20 p-6">
            <div className="flex flex-wrap justify-center gap-4">
              {Object.keys(availableBadges).map((badgeName) => (
                <Badge
                  key={badgeName}
                  name={badgeName}
                  description={availableBadges[badgeName].description}
                  icon={availableBadges[badgeName].icon}
                  awarded={isBadgeAwarded(badgeName)}
                />
              ))}
            </div>
            <div className="text-center mt-6">
              <button
                onClick={() => awardBadge('Code Explorer')}
                className={`px-4 py-2 rounded-lg transition-colors duration-200 ${isBadgeAwarded('Code Explorer') ? 'bg-green-500 text-white cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
                disabled={isBadgeAwarded('Code Explorer')}
              >
                {isBadgeAwarded('Code Explorer') ? 'Code Explorer Badge Awarded' : 'Award Code Explorer Badge'}
              </button>
              <button
                onClick={() => awardBadge('Problem Solver')}
                className={`ml-4 px-4 py-2 rounded-lg transition-colors duration-200 ${isBadgeAwarded('Problem Solver') ? 'bg-green-500 text-white cursor-not-allowed' : 'bg-purple-500 text-white hover:bg-purple-600'}`}
                disabled={isBadgeAwarded('Problem Solver')}
              >
                {isBadgeAwarded('Problem Solver') ? 'Problem Solver Badge Awarded' : 'Award Problem Solver Badge'}
              </button>
              <button
                onClick={() => awardBadge('Project Master')}
                className={`ml-4 px-4 py-2 rounded-lg transition-colors duration-200 ${isBadgeAwarded('Project Master') ? 'bg-green-500 text-white cursor-not-allowed' : 'bg-yellow-500 text-white hover:bg-yellow-600'}`}
                disabled={isBadgeAwarded('Project Master')}
              >
                {isBadgeAwarded('Project Master') ? 'Project Master Badge Awarded' : 'Award Project Master Badge'}
              </button>
              <button
                onClick={() => awardBadge('Community Contributor')}
                className={`ml-4 px-4 py-2 rounded-lg transition-colors duration-200 ${isBadgeAwarded('Community Contributor') ? 'bg-green-500 text-white cursor-not-allowed' : 'bg-indigo-500 text-white hover:bg-indigo-600'}`}
                disabled={isBadgeAwarded('Community Contributor')}
              >
                {isBadgeAwarded('Community Contributor') ? 'Community Contributor Badge Awarded' : 'Award Community Contributor Badge'}
              </button>
            </div>
          </div>
          <div className="text-center mt-6">
            <p className="text-gray-400 mb-4">
              We are working to automate the badge and achievement system soon.
            </p>
            <p className="text-gray-400">
              If you want to know what's upcoming, check out our{' '}
              <Link to="/khazana" className="text-blue-500 hover:underline">
                Khazana
              </Link>
              .
            </p>
          </div>
        </div>
      );
    }

    export default Achievements;
