import React, { useState, useEffect } from 'react';
    import { Link } from 'react-router-dom';

    function NewFeatureNotification({ feature, onClose }) {
      return (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-blue-500/20 z-50">
          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
          <p className="text-gray-300 mb-4">{feature.description}</p>
          <div className="flex justify-end space-x-2">
            <Link
              to={feature.link}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
            >
              Explore
            </Link>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
            >
              Dismiss
            </button>
          </div>
        </div>
      );
    }

    export default NewFeatureNotification;
