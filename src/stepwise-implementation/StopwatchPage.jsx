import React from 'react';
    import StepwiseComponent from './StepwiseComponent';

    function StopwatchPage() {
      const steps = [
        {
          title: 'Step 1: HTML Structure',
          description: 'Create the basic HTML for the stopwatch.',
          code: `
            <div id="stopwatch-container">
              <div id="display">00:00:00</div>
              <button id="startBtn">Start</button>
              <button id="stopBtn">Stop</button>
              <button id="resetBtn">Reset</button>
            </div>
          `,
          demo: '<div style="padding: 20px; border: 1px solid #ccc; text-align: center;"><div id="demo-stopwatch-container"><div id="demo-display">00:00:00</div><button id="demo-startBtn">Start</button><button id="demo-stopBtn">Stop</button><button id="demo-resetBtn">Reset</button></div></div>',
        },
        {
          title: 'Step 2: CSS Styling',
          description: 'Add CSS styles to make the stopwatch look good.',
          code: `
            /* CSS code for styling */
            #stopwatch-container { text-align: center; }
            #display { font-size: 2em; margin-bottom: 10px; }
            button { padding: 10px; margin: 5px; }
          `,
          demo: '<div style="padding: 20px; border: 1px solid #ccc; text-align: center;"><div id="demo-stopwatch-container" style="text-align: center;"><div id="demo-display" style="font-size: 2em; margin-bottom: 10px;">00:00:00</div><button id="demo-startBtn" style="padding: 10px; margin: 5px;">Start</button><button id="demo-stopBtn" style="padding: 10px; margin: 5px;">Stop</button><button id="demo-resetBtn" style="padding: 10px; margin: 5px;">Reset</button></div></div>',
        },
        {
          title: 'Step 3: JavaScript Logic',
          description: 'Write JavaScript code to implement the stopwatch functionality.',
          code: `
            // JavaScript code for stopwatch functionality
            let timerInterval;
            let startTime;
            let elapsedTime = 0;

            function startStopwatch() {
              startTime = Date.now() - elapsedTime;
              timerInterval = setInterval(updateDisplay, 10);
            }

            function stopStopwatch() {
              clearInterval(timerInterval);
            }

            function resetStopwatch() {
              clearInterval(timerInterval);
              elapsedTime = 0;
              updateDisplay();
            }

            function updateDisplay() {
              elapsedTime = Date.now() - startTime;
              const time = new Date(elapsedTime);
              const formattedTime = time.toISOString().slice(14, 22);
              document.getElementById('display').textContent = formattedTime;
            }
          `,
          demo: '<div style="padding: 20px; border: 1px solid #ccc; text-align: center;"><div id="demo-stopwatch-container"><div id="demo-display">00:00:00</div><button id="demo-startBtn">Start</button><button id="demo-stopBtn">Stop</button><button id="demo-resetBtn">Reset</button></div></div>',
        },
        {
          title: 'Step 4: Complete Implementation',
          description: 'Integrate all the code and run the project.',
          code: `
            <!-- HTML -->
            <div id="stopwatch-container">
              <div id="display">00:00:00</div>
              <button id="startBtn">Start</button>
              <button id="stopBtn">Stop</button>
              <button id="resetBtn">Reset</button>
            </div>

            /* CSS */
            #stopwatch-container { text-align: center; }
            #display { font-size: 2em; margin-bottom: 10px; }
            button { padding: 10px; margin: 5px; }

            // JavaScript
            let timerInterval;
            let startTime;
            let elapsedTime = 0;

            function startStopwatch() {
              startTime = Date.now() - elapsedTime;
              timerInterval = setInterval(updateDisplay, 10);
            }

            function stopStopwatch() {
              clearInterval(timerInterval);
            }

            function resetStopwatch() {
              clearInterval(timerInterval);
              elapsedTime = 0;
              updateDisplay();
            }

            function updateDisplay() {
              elapsedTime = Date.now() - startTime;
              const time = new Date(elapsedTime);
              const formattedTime = time.toISOString().slice(14, 22);
              document.getElementById('display').textContent = formattedTime;
            }

            document.getElementById('startBtn').addEventListener('click', startStopwatch);
            document.getElementById('stopBtn').addEventListener('click', stopStopwatch);
            document.getElementById('resetBtn').addEventListener('click', resetStopwatch);
          `,
          demo: '<div style="padding: 20px; border: 1px solid #ccc; text-align: center;"><div id="demo-stopwatch-container"><div id="demo-display">00:00:00</div><button id="demo-startBtn">Start</button><button id="demo-stopBtn">Stop</button><button id="demo-resetBtn">Reset</button></div><script>let demoTimerInterval; let demoStartTime; let demoElapsedTime = 0; function demoStartStopwatch() { demoStartTime = Date.now() - demoElapsedTime; demoTimerInterval = setInterval(demoUpdateDisplay, 10); } function demoStopStopwatch() { clearInterval(demoTimerInterval); } function demoResetStopwatch() { clearInterval(demoTimerInterval); demoElapsedTime = 0; demoUpdateDisplay(); } function demoUpdateDisplay() { demoElapsedTime = Date.now() - demoStartTime; const time = new Date(demoElapsedTime); const formattedTime = time.toISOString().slice(14, 22); document.getElementById("demo-display").textContent = formattedTime; } document.getElementById("demo-startBtn").addEventListener("click", demoStartStopwatch); document.getElementById("demo-stopBtn").addEventListener("click", demoStopStopwatch); document.getElementById("demo-resetBtn").addEventListener("click", demoResetStopwatch);</script></div>',
        },
      ];

      const renderDemo = (stepData) => {
        return <div dangerouslySetInnerHTML={{ __html: stepData.demo }} />;
      };

      return (
        <StepwiseComponent steps={steps} renderDemo={renderDemo} />
      );
    }

    export default StopwatchPage;
