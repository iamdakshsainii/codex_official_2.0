import React from 'react';
    import { Link } from 'react-router-dom';

    function ReactNotesModal({ isOpen, onClose, note }) {
      if (!isOpen) return null;

      const resources = [
        { title: '50 Project Ideas', link: 'https://drive.google.com/file/d/1ZF4tNvrlx9JWhUPGTn0_o-spi1-lu9un/view?usp=drive_link' },
        { title: 'ReactNative (For App)', link: 'https://drive.google.com/file/d/1jOz0VYPUwV7SuF_vz6TIDvXEc1LqWM0u/view?usp=drive_link' },
        { title: 'React Interview Questions', link: 'https://drive.google.com/file/d/1aVce31wNDh_5eFeD_V3NDxn6u43kfjcX/view?usp=drive_link' },
        { title: 'React Handbook', link: 'https://drive.google.com/file/d/12KFTQTFrZEjTbVC1s336mGX2NSFOAZQD/view?usp=drive_link' },
        { title: 'React Roadmap', link: 'https://drive.google.com/file/d/1jI5UyJYsT9zBTJSd7_sVW0mhbCFqOsC8/view?usp=drive_link' },
        { title: 'Bonus 1', link: 'https://drive.google.com/file/d/1sRqtbSi1km9lW0Rizf0PbvArx7Wl18DU/view?usp=drive_link' },
        { title: 'Bonus 2', link: 'https://drive.google.com/file/d/1xOh7h4DJEW93bNoVoa4V5GZXEHCBJYDj/view?usp=drive_link' },
      ];

      return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-gray-800 p-8 rounded-lg max-w-md w-full">
            <h2 className="text-2xl font-semibold text-center mb-4">React Resources</h2>
            <ul className="space-y-2">
              {resources.map((resource, index) => (
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

    export default ReactNotesModal;
