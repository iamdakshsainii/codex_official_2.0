import React, { useState, useEffect, useRef } from 'react';

    function PomodoroTimer() {
      const [workTime, setWorkTime] = useState(25);
      const [breakTime, setBreakTime] = useState(5);
      const [seconds, setSeconds] = useState(0);
      const [isWork, setIsWork] = useState(true);
      const [isRunning, setIsRunning] = useState(false);
      const timerRef = useRef(null);

      useEffect(() => {
        let interval = null;
        if (isRunning) {
          interval = setInterval(() => {
            setSeconds((prevSeconds) => {
              if (prevSeconds === 0) {
                clearInterval(interval);
                setIsRunning(false);
                setIsWork(!isWork);
                setSeconds(0);
                return 0;
              }
              return prevSeconds - 1;
            });
          }, 1000);
        } else if (!isRunning && seconds !== 0) {
          clearInterval(interval);
        }
        return () => clearInterval(interval);
      }, [isRunning, isWork, seconds]);

      useEffect(() => {
        setSeconds(isWork ? workTime * 60 : breakTime * 60);
      }, [isWork, workTime, breakTime]);

      const handleStartStop = () => {
        setIsRunning(!isRunning);
      };

      const handleReset = () => {
        setIsRunning(false);
        setSeconds(isWork ? workTime * 60 : breakTime * 60);
      };

      const handleWorkTimeChange = (e) => {
        setWorkTime(parseInt(e.target.value, 10));
      };

      const handleBreakTimeChange = (e) => {
        setBreakTime(parseInt(e.target.value, 10));
      };

      const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      };

      return (
        <div className="p-2">
          <div className="flex justify-center items-center mb-2">
            <span className="text-2xl font-bold mr-2">{formatTime(seconds)}</span>
            <span className="text-gray-400 text-sm">{isWork ? 'Work' : 'Break'}</span>
          </div>
          <div className="flex justify-center space-x-2 mb-2">
            <button
              onClick={handleStartStop}
              className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 text-xs"
            >
              {isRunning ? 'Stop' : 'Start'}
            </button>
            <button
              onClick={handleReset}
              className="px-3 py-1 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 text-xs"
            >
              Reset
            </button>
          </div>
          <div className="flex justify-center space-x-2">
            <div className="flex flex-col items-center">
              <label htmlFor="workTime" className="text-gray-400 text-xs">Work (min)</label>
              <input
                type="number"
                id="workTime"
                value={workTime}
                onChange={handleWorkTimeChange}
                className="bg-gray-700 rounded p-1 text-white focus:outline-none border border-blue-500/20 w-16 text-center text-xs"
              />
            </div>
            <div className="flex flex-col items-center">
              <label htmlFor="breakTime" className="text-gray-400 text-xs">Break (min)</label>
              <input
                type="number"
                id="breakTime"
                value={breakTime}
                onChange={handleBreakTimeChange}
                className="bg-gray-700 rounded p-1 text-white focus:outline-none border border-blue-500/20 w-16 text-center text-xs"
              />
            </div>
          </div>
        </div>
      );
    }

    export default PomodoroTimer;
