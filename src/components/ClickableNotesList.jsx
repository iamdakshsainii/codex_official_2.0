import React from 'react';

    function ClickableNotesList({ notes, onItemClick }) {
      return (
        <ul className="space-y-4">
          {notes.map((note, index) => (
            <li key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-blue-500/20 p-6 hover:shadow-[0_0_12px_5px_rgba(0,0,255,0.4)] hover:scale-105 transition-all duration-300 glow-card cursor-pointer transform hover:-translate-y-1 flex items-center justify-between">
              <span className="text-xl font-semibold text-gray-300">
                {note.title}
              </span>
              {onItemClick ? (
                <button
                  onClick={() => onItemClick(note)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
                >
                  Click Here
                </button>
              ) : (
                <a
                  href={note.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
                >
                  Click Here
                </a>
              )}
            </li>
          ))}
        </ul>
      );
    }

    export default ClickableNotesList;
