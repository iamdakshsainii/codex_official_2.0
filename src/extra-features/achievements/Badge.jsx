import React from 'react';

    function Badge({ name, description, icon, awarded }) {
      return (
        <div className="flex flex-col items-center">
          <span className={`text-4xl mb-2 ${awarded ? 'text-green-500' : 'text-blue-400'}`}>
            {icon}
          </span>
          <span className="text-lg font-semibold">{name}</span>
          <p className="text-gray-400 text-sm text-center">{description}</p>
        </div>
      );
    }

    export default Badge;
