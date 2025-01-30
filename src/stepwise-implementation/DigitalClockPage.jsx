import React from 'react';
import StepwiseComponent from './StepwiseComponent';

function DigitalClockPage() {
  const steps = [
    {
      title: 'Step 1: HTML Structure',
      description: 'Create the basic HTML for the digital clock.',
      code: `
        <div id="clock"></div>
      `,
      demo: `
        <div style="padding: 20px; border: 1px solid #ccc; text-align: center;">
          <div id="demo-clock" style="font-size: 2em; padding: 10px; border: 2px solid #4f46e5; border-radius: 8px;"></div>
          <script>
            function demoUpdateClock() {
              const now = new Date();
              const time = now.toLocaleTimeString();
              document.getElementById("demo-clock").textContent = time;
              setTimeout(demoUpdateClock, 1000);
            }
            demoUpdateClock();
          </script>
        </div>
      `,
    },
    {
      title: 'Step 2: CSS Styling',
      description: 'Add CSS styles to make the clock look good.',
      code: `
        /* CSS code for styling */
        #clock {
          font-size: 2em;
          text-align: center;
          padding: 10px;
          border: 2px solid #4f46e5;
          border-radius: 8px;
          margin: 20px auto;
          max-width: 300px;
        }
      `,
      demo: `
        <div style="padding: 20px; border: 1px solid #ccc; text-align: center;">
          <div id="demo-clock" style="font-size: 2em; padding: 10px; border: 2px solid #4f46e5; border-radius: 8px;"></div>
          <script>
            function demoUpdateClock() {
              const now = new Date();
              const time = now.toLocaleTimeString();
              document.getElementById("demo-clock").textContent = time;
              setTimeout(demoUpdateClock, 1000);
            }
            demoUpdateClock();
          </script>
        </div>
      `,
    },
    {
      title: 'Step 3: JavaScript Logic',
      description: 'Write JavaScript code to update the clock in real-time.',
      code: `
        // JavaScript code for digital clock functionality
        function updateClock() {
          const now = new Date();
          const time = now.toLocaleTimeString();
          document.getElementById("clock").textContent = time;
        }
        setInterval(updateClock, 1000);
        updateClock();
      `,
      demo: `
        <div style="padding: 20px; border: 1px solid #ccc; text-align: center;">
          <div id="demo-clock" style="font-size: 2em; padding: 10px; border: 2px solid #4f46e5; border-radius: 8px;"></div>
          <script>
            function demoUpdateClock() {
              const now = new Date();
              const time = now.toLocaleTimeString();
              document.getElementById("demo-clock").textContent = time;
              setTimeout(demoUpdateClock, 1000);
            }
            demoUpdateClock();
          </script>
        </div>
      `,
    },
    {
      title: 'Step 4: Complete Implementation',
      description: 'Integrate all the code and run the project.',
      code: `
        <!-- HTML -->
        <div id="clock"></div>

        /* CSS */
        #clock {
          font-size: 2em;
          text-align: center;
          padding: 10px;
          border: 2px solid #4f46e5;
          border-radius: 8px;
          margin: 20px auto;
          max-width: 300px;
        }

        // JavaScript
        function updateClock() {
          const now = new Date();
          const time = now.toLocaleTimeString();
          document.getElementById("clock").textContent = time;
        }
        setInterval(updateClock, 1000);
        updateClock();
      `,
      demo: `
        <div style="padding: 20px; border: 1px solid #ccc; text-align: center;">
          <div id="demo-clock" style="font-size: 2em; padding: 10px; border: 2px solid #4f46e5; border-radius: 8px;"></div>
          <script>
            function demoUpdateClock() {
              const now = new Date();
              const time = now.toLocaleTimeString();
              document.getElementById("demo-clock").textContent = time;
              setTimeout(demoUpdateClock, 1000);
            }
            demoUpdateClock();
          </script>
        </div>
      `,
    },
  ];

  const renderDemo = (stepData) => {
    return <div dangerouslySetInnerHTML={{ __html: stepData.demo }} />;
  };

  return <StepwiseComponent steps={steps} renderDemo={renderDemo} />;
}

export default DigitalClockPage;
