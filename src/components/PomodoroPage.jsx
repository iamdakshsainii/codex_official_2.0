import React from 'react';
    import PomodoroTimer from './PomodoroTimer';

    function PomodoroPage() {
      return (
        <div className="container mx-auto py-12 px-4 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
          <h1 className="text-4xl font-bold text-center mb-4">Pomodoro Timer</h1>
          <p className="text-gray-400 text-center mb-8 max-w-2xl">
            The Pomodoro Technique is a time management method that can help you focus and be more productive. It involves breaking down work into intervals, traditionally 25 minutes in length, separated by short breaks.
          </p>
          <div className="w-full max-w-md">
            <PomodoroTimer />
            <div className="mt-8 text-center">
              <h3 className="text-2xl font-semibold mb-4">Mindful Break Prompts</h3>
              <ul className="text-gray-300 space-y-2">
                <li>Stretch for 2 minutes.</li>
                <li>Take a deep breath.</li>
                <li>Look away from the screen.</li>
                <li>Drink some water.</li>
                <li>Do a quick meditation.</li>
              </ul>
            </div>
          </div>
        </div>
      );
    }

    export default PomodoroPage;
