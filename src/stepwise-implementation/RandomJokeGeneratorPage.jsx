import React, { useState, useEffect } from 'react';
    import StepwiseComponent from './StepwiseComponent';

    function RandomJokeGeneratorPage() {
      const [joke, setJoke] = useState(null);

      const steps = [
        {
          title: 'Step 1: HTML Structure',
          description: 'Create the basic HTML for the joke generator.',
          code: '<div id="joke-container"> <button id="joke-button">Get Joke</button> <p id="joke-text"></p> </div>',
          demo: '<div style="padding: 20px; border: 1px solid #ccc; text-align: center;"><div id="demo-joke-container"><button id="demo-joke-button" style="padding: 10px; background-color: #4f46e5; color: white; border-radius: 8px;">Get Joke</button><p id="demo-joke-text"></p></div></div>',
        },
        {
          title: 'Step 2: CSS Styling',
          description: 'Add CSS to style the joke generator.',
          code: '#joke-container { text-align: center; } #joke-button { padding: 10px; }',
          demo: '<div style="padding: 20px; border: 1px solid #ccc; text-align: center;"><div id="demo-joke-container" style="text-align: center;"><button id="demo-joke-button" style="padding: 10px; background-color: #4f46e5; color: white; border-radius: 8px;">Get Joke</button><p id="demo-joke-text"></p></div></div>',
        },
        {
          title: 'Step 3: JavaScript Logic (API)',
          description: 'Add JavaScript to fetch and display a random joke using an API.',
          code: `async function fetchJoke() {
            const response = await fetch('https://official-joke-api.appspot.com/random_joke');
            const data = await response.json();
            document.getElementById('joke-text').textContent = data.setup + ' ' + data.punchline;
          }`,
          demo: '<div style="padding: 20px; border: 1px solid #ccc; text-align: center;"><div id="demo-joke-container"><button id="demo-joke-button" style="padding: 10px; background-color: #4f46e5; color: white; border-radius: 8px;">Get Joke</button><p id="demo-joke-text"></p></div><script>async function demoFetchJoke() { const response = await fetch("https://official-joke-api.appspot.com/random_joke"); const data = await response.json(); document.getElementById("demo-joke-text").textContent = data.setup + " " + data.punchline; } document.getElementById("demo-joke-button").addEventListener("click", demoFetchJoke);</script></div>',
        },
        {
          title: 'Step 4: Complete Implementation',
          description: 'Integrate all the code and run the project.',
          code: `
            <!-- HTML -->
            <div id="joke-container">
              <button id="joke-button">Get Joke</button>
              <p id="joke-text"></p>
            </div>

            /* CSS */
            #joke-container { text-align: center; }
            #joke-button { padding: 10px; }

            // JavaScript
            async function fetchJoke() {
              const response = await fetch('https://official-joke-api.appspot.com/random_joke');
              const data = await response.json();
              document.getElementById('joke-text').textContent = data.setup + ' ' + data.punchline;
            }
            document.getElementById('joke-button').addEventListener('click', fetchJoke);
          `,
          demo: '<div style="padding: 20px; border: 1px solid #ccc; text-align: center;"><div id="demo-joke-container"><button id="demo-joke-button" style="padding: 10px; background-color: #4f46e5; color: white; border-radius: 8px;">Get Joke</button><p id="demo-joke-text"></p></div><script>async function demoFetchJoke() { const response = await fetch("https://official-joke-api.appspot.com/random_joke"); const data = await response.json(); document.getElementById("demo-joke-text").textContent = data.setup + " " + data.punchline; } document.getElementById("demo-joke-button").addEventListener("click", demoFetchJoke);</script></div>',
        },
      ];

      const renderDemo = (stepData) => {
        return <div dangerouslySetInnerHTML={{ __html: stepData.demo }} />;
      };

      return (
        <StepwiseComponent steps={steps} renderDemo={renderDemo} />
      );
    }

    export default RandomJokeGeneratorPage;
