import React, { useState } from 'react';
import StepwiseComponent from './StepwiseComponent';

function PomodoroTimerPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const steps = [
    {
      title: 'Step 1: HTML Structure',
      description: 'Create the basic HTML for the Pomodoro timer.',
      code: `
        <div id="pomodoro-container">
          <div id="timer">25:00</div>
          <button id="startBtn">Start</button>
          <button id="pauseBtn">Pause</button>
          <button id="resetBtn">Reset</button>
        </div>
      `,
      demo: '<div style="padding: 20px; border: 1px solid #ccc; text-align: center;"><div id="demo-pomodoro-container"><div id="demo-timer">25:00</div><button id="demo-startBtn">Start</button><button id="demo-pauseBtn">Pause</button><button id="demo-resetBtn">Reset</button></div></div>',
    },
    {
      title: 'Step 2: CSS Styling',
      description: 'Add CSS styles to make the Pomodoro timer look good.',
      code: `
        /* CSS code for styling */
        #pomodoro-container { text-align: center; }
        #timer { font-size: 3em; margin-bottom: 10px; }
        button { padding: 10px; margin: 5px; }
      `,
      demo: '<div style="padding: 20px; border: 1px solid #ccc; text-align: center;"><div id="demo-pomodoro-container" style="text-align: center;"><div id="demo-timer" style="font-size: 3em; margin-bottom: 10px;">25:00</div><button id="demo-startBtn" style="padding: 10px; margin: 5px;">Start</button><button id="demo-pauseBtn" style="padding: 10px; margin: 5px;">Pause</button><button id="demo-resetBtn" style="padding: 10px; margin: 5px;">Reset</button></div></div>',
    },
    {
      title: 'Step 3: JavaScript Logic',
      description: 'Write JavaScript code to implement the Pomodoro timer functionality.',
      code: `
        // JavaScript code for Pomodoro timer functionality
        let timerInterval;
        let timeLeft = 25 * 60;
        let isRunning = false;

        function startTimer() {
          if (!isRunning) {
            isRunning = true;
            timerInterval = setInterval(updateTimer, 1000);
          }
        }

        function pauseTimer() {
          clearInterval(timerInterval);
          isRunning = false;
        }

        function resetTimer() {
          clearInterval(timerInterval);
          timeLeft = 25 * 60;
          isRunning = false;
          updateDisplay();
        }

        function updateTimer() {
          timeLeft--;
          if (timeLeft < 0) {
            clearInterval(timerInterval);
            isRunning = false;
            timeLeft = 25 * 60;
          }
          updateDisplay();
        }

        function updateDisplay() {
          const minutes = Math.floor(timeLeft / 60);
          const seconds = timeLeft % 60;
          document.getElementById('timer').textContent = \`\${String(minutes).padStart(2, '0')}:\${String(seconds).padStart(2, '0')}\`;
        }
      `,
      demo: '<div style="padding: 20px; border: 1px solid #ccc; text-align: center;"><div id="demo-pomodoro-container"><div id="demo-timer">25:00</div><button id="demo-startBtn">Start</button><button id="demo-pauseBtn">Pause</button><button id="demo-resetBtn">Reset</button></div></div>',
    },
    {
      title: 'Step 4: Complete Implementation',
      description: 'Integrate all the code and run the project.',
      code: `
        <!-- HTML -->
        <div id="pomodoro-container">
          <div id="timer">25:00</div>
          <button id="startBtn">Start</button>
          <button id="pauseBtn">Pause</button>
          <button id="resetBtn">Reset</button>
        </div>

        /* CSS */
        #pomodoro-container { text-align: center; }
        #timer { font-size: 3em; margin-bottom: 10px; }
        button { padding: 10px; margin: 5px; }

        // JavaScript
        let timerInterval;
        let timeLeft = 25 * 60;
        let isRunning = false;

        function startTimer() {
          if (!isRunning) {
            isRunning = true;
            timerInterval = setInterval(updateTimer, 1000);
          }
        }

        function pauseTimer() {
          clearInterval(timerInterval);
          isRunning = false;
        }

        function resetTimer() {
          clearInterval(timerInterval);
          timeLeft = 25 * 60;
          isRunning = false;
          updateDisplay();
        }

        function updateTimer() {
          timeLeft--;
          if (timeLeft < 0) {
            clearInterval(timerInterval);
            isRunning = false;
            timeLeft = 25 * 60;
          }
          updateDisplay();
        }

        function updateDisplay() {
          const minutes = Math.floor(timeLeft / 60);
          const seconds = timeLeft % 60;
          document.getElementById('timer').textContent = \`\${String(minutes).padStart(2, '0')}:\${String(seconds).padStart(2, '0')}\`;
        }

        document.getElementById('startBtn').addEventListener('click', startTimer);
        document.getElementById('pauseBtn').addEventListener('click', pauseTimer);
        document.getElementById('resetBtn').addEventListener('click', resetTimer);
        updateDisplay();
      `,
      demo: '<div style="padding: 20px; border: 1px solid #ccc; text-align: center;"><div id="demo-pomodoro-container"><div id="demo-timer">25:00</div><button id="demo-startBtn">Start</button><button id="demo-pauseBtn">Pause</button><button id="demo-resetBtn">Reset</button></div><script>let demoTimerInterval; let demoTimeLeft = 25 * 60; let demoIsRunning = false; function demoStartTimer() { if (!demoIsRunning) { demoIsRunning = true; demoTimerInterval = setInterval(demoUpdateTimer, 1000); } } function demoPauseTimer() { clearInterval(demoTimerInterval); demoIsRunning = false; } function demoResetTimer() { clearInterval(demoTimerInterval); demoTimeLeft = 25 * 60; demoIsRunning = false; demoUpdateDisplay(); } function demoUpdateTimer() { demoTimeLeft--; if (demoTimeLeft < 0) { clearInterval(demoTimerInterval); demoIsRunning = false; demoTimeLeft = 25 * 60; } demoUpdateDisplay(); } function demoUpdateDisplay() { const minutes = Math.floor(demoTimeLeft / 60); const seconds = demoTimeLeft % 60; document.getElementById("demo-timer").textContent = \`\${String(minutes).padStart(2, "0")}:\${String(seconds).padStart(2, "0")}\`; } document.getElementById("demo-startBtn").addEventListener("click", demoStartTimer); document.getElementById("demo-pauseBtn").addEventListener("click", demoPauseTimer); document.getElementById("demo-resetBtn").addEventListener("click", demoResetTimer); demoUpdateDisplay();</script></div>',
    },
  ];

  const renderDemo = (stepData) => {
    return <div dangerouslySetInnerHTML={{ __html: stepData.demo }} />;
  };

  return (
    <StepwiseComponent steps={steps} renderDemo={renderDemo} />
  );
}
export default PomodoroTimerPage;
