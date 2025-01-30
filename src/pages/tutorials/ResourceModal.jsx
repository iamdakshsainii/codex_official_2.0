import React from 'react';

    function ResourceModal({ isOpen, onClose, note, resources }) {
      if (!isOpen) return null;

      return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-gray-800 p-8 rounded-lg max-w-md w-full">
            <h2 className="text-2xl font-semibold text-center mb-4">Resources for {note.title}</h2>
            {resources && resources.length > 0 ? (
              <ul className="space-y-2">
                {resources.slice(0, 4).map((resource, index) => (
                  <li key={index} className="text-gray-300 text-left flex justify-between items-center">
                    <span>{resource.title}</span>
                    <a
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all text-xs"
                    >
                      Download
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-400 text-center">No resources available for this note.</p>
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

    export default ResourceModal;
