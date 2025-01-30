import React from 'react';
    import PomodoroTimer from './PomodoroTimer';

    function PomodoroPopup({ onClose }) {
      return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-gray-800 p-8 rounded-lg max-w-md w-full">
            <h2 className="text-2xl font-semibold text-center mb-4">Pomodoro Timer</h2>
            <p className="text-gray-400 text-center mb-8">
              The Pomodoro Technique is a time management method that can help you focus and be more productive. It involves breaking down work into intervals, traditionally 25 minutes in length, separated by short breaks.
            </p>
            <div className="w-full max-w-md">
              <PomodoroTimer />
            </div>
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

    export default PomodoroPopup;
