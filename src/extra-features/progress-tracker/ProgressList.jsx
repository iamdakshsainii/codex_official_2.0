import React from 'react';

    function ProgressList({ items, onRemove, onToggleComplete }) {
      return (
        <ul className="space-y-4">
          {items.map((item) => (
            <li key={item.id} className="bg-gray-700/50 backdrop-blur-sm rounded-lg p-4 border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300 flex justify-between items-center">
              <div className="flex-1">
                <span
                  onClick={() => onToggleComplete(item.id)}
                  className={`cursor-pointer ${item.completed ? 'line-through text-gray-500' : 'text-gray-300'}`}
                >
                  {item.title}
                </span>
              </div>
              <button
                onClick={() => onRemove(item.id)}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-all text-xs"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      );
    }

    export default ProgressList;
