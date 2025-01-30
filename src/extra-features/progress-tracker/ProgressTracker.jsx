import React, { useState, useEffect } from 'react';
    import ProgressList from './ProgressList';

    function ProgressTracker() {
      // Progress Tracker Feature: State for progress items
      const [progressItems, setProgressItems] = useState(() => {
        const storedProgress = localStorage.getItem('progressItems');
        return storedProgress ? JSON.parse(storedProgress) : [];
      });
      // Progress Tracker Feature: State for new progress item
      const [newProgressItem, setNewProgressItem] = useState('');

      // Progress Tracker Feature: Effect to save progress items to local storage
      useEffect(() => {
        localStorage.setItem('progressItems', JSON.stringify(progressItems));
      }, [progressItems]);

      // Progress Tracker Feature: Function to add a new progress item
      const handleAddProgressItem = (e) => {
        e.preventDefault();
        if (newProgressItem.trim()) {
          const newId = Date.now().toString();
          setProgressItems([...progressItems, { id: newId, title: newProgressItem, completed: false }]);
          setNewProgressItem('');
        }
      };

      // Progress Tracker Feature: Function to remove a progress item
      const handleRemoveProgressItem = (id) => {
        setProgressItems(progressItems.filter(item => item.id !== id));
      };

      // Progress Tracker Feature: Function to toggle completion status
      const handleToggleComplete = (id) => {
        setProgressItems(progressItems.map(item =>
          item.id === id ? { ...item, completed: !item.completed } : item
        ));
      };

      return (
        <div className="container mx-auto py-12 px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Progress Tracker</h1>
          <p className="text-gray-400 text-center mb-8">
            Track your learning progress by marking courses, projects, or challenges as complete.
          </p>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-blue-500/20 p-6">
            <form onSubmit={handleAddProgressItem} className="mb-6 flex space-x-2">
              <input
                type="text"
                placeholder="Add a new item..."
                value={newProgressItem}
                onChange={(e) => setNewProgressItem(e.target.value)}
                className="flex-1 p-3 bg-gray-700 rounded border border-blue-500/20 focus:outline-none focus:border-blue-500 text-white"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
              >
                Add
              </button>
            </form>
            <ProgressList
              items={progressItems}
              onRemove={handleRemoveProgressItem}
              onToggleComplete={handleToggleComplete}
            />
          </div>
        </div>
      );
    }

    export default ProgressTracker;
