import React from 'react';
    import { Edit, Trash } from 'lucide-react';

    function NoteCard({ itemName, noteText, resources, onClick, onEdit, onDelete }) {
      return (
        <div
          className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 flex flex-col"
        >
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xl font-semibold flex-1 cursor-pointer" onClick={() => onClick(itemName, noteText, resources)}>
              {itemName}
            </h3>
            <div className="flex space-x-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onEdit(itemName, noteText, resources);
                }}
                className="text-gray-400 hover:text-blue-500 focus:outline-none transition-colors duration-200"
              >
                <Edit className="h-4 w-4" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete(itemName);
                }}
                className="text-gray-400 hover:text-red-500 focus:outline-none transition-colors duration-200"
              >
                <Trash className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="mt-2">
            <p className="text-gray-300 whitespace-pre-wrap">{noteText.substring(0, 100)}...</p>
          </div>
        </div>
      );
    }

    export default NoteCard;
