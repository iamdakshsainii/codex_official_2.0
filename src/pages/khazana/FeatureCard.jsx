import React from 'react';
    import { useNavigate } from 'react-router-dom';

    function FeatureCard({ featureName, icon, description, comingSoon, cardStyle, link, unlocked }) {
      const navigate = useNavigate();

      const handleFeatureClick = () => {
        navigate(link);
      };

      return (
        <div
          onClick={handleFeatureClick}
          className={`rounded-lg border border-blue-500/20 p-6 hover:shadow-[0_0_12px_5px_rgba(0,0,255,0.4)] hover:scale-105 transition-all duration-300 glow-card relative overflow-hidden cursor-pointer ${cardStyle}`}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-blue-500/5 opacity-20"></div>
          <div className="flex items-center mb-4 relative z-10">
            {icon}
            <h3 className="text-xl font-semibold">{featureName}</h3>
          </div>
          <p className="text-gray-400 mb-4 relative z-10">
            {description}
          </p>
          <p className="text-gray-400 relative z-10">
            <span className="font-semibold">Coming Soon:</span> {comingSoon}
          </p>
          {featureName === "Daily Challenge Widget" && unlocked && (
            <span className="absolute top-2 right-2 bg-purple-700/70 text-white text-xs px-2 py-1 rounded-full z-10">
              Unlocked
            </span>
          )}
        </div>
      );
    }

    export default FeatureCard;
