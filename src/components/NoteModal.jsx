import React, { useState, useEffect, useRef } from 'react';

    function NoteModal({ isOpen, onClose, onSave, initialNote, itemName, initialResources }) {
      const [noteText, setNoteText] = useState(initialNote);
      const [wordCount, setWordCount] = useState(0);
      const textareaRef = useRef(null);
      const [resources, setResources] = useState(initialResources || []);

      useEffect(() => {
        setWordCount(noteText.trim().split(/\s+/).filter(Boolean).length);
      }, [noteText]);

      useEffect(() => {
        if (isOpen && textareaRef.current) {
          textareaRef.current.focus();
        }
      }, [isOpen]);

      const handleNoteChange = (e) => {
        setNoteText(e.target.value);
      };

      const handleSave = () => {
        onSave(itemName, noteText, resources);
      };

      if (!isOpen) return null;

      return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-gray-800 p-8 rounded-lg max-w-md w-full">
            <h3 className="text-2xl font-semibold text-center mb-4">Edit Note: {itemName}</h3>
            <textarea
              ref={textareaRef}
              placeholder="Enter your notes here..."
              value={noteText}
              onChange={handleNoteChange}
              className="w-full p-3 bg-gray-700 rounded border border-blue-500/20 focus:outline-none focus:border-blue-500 text-white mb-4"
              rows="6"
              maxLength="500"
            />
            <p className="text-gray-400 text-sm text-right mb-4">
              {wordCount}/500 words
            </p>
            {resources && Array.isArray(resources) && resources.length > 0 && (
              <div className="mb-4">
                <h4 className="text-xl font-semibold mb-2">Resources</h4>
                <ul className="space-y-2">
                  {resources.map((resource, index) => (
                    <li key={index} className="text-gray-300 text-left">
                      <a href={resource.url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                        {resource.title} ({resource.type})
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="text-center">
              <button
                onClick={handleSave}
                disabled={wordCount > 500}
                className={`px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 ${wordCount > 500 ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                Save Note
              </button>
              <button
                onClick={onClose}
                className="ml-4 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      );
    }

    export default NoteModal;
