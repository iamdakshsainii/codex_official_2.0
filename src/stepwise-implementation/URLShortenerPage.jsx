import React from 'react';
    import StepwiseComponent from './StepwiseComponent';

    function URLShortenerPage() {
      const steps = [
        {
          title: 'Step 1: HTML Structure',
          description: 'Create the basic HTML for the URL shortener.',
          code: '<!-- HTML code for URL shortener -->\n<input type="url" id="longUrl" placeholder="Enter URL" /><button id="shortenBtn">Shorten</button><div id="shortUrl"></div>',
          demo: '<div style="padding: 20px; border: 1px solid #ccc; text-align: center;"><input type="url" placeholder="Enter URL" /><button>Shorten</button><div id="shortUrl"></div></div>',
        },
        {
          title: 'Step 2: CSS Styling',
          description: 'Add CSS styles to make the URL shortener look good.',
          code: '/* CSS code for styling */\ninput { padding: 10px; margin-right: 10px; }\nbutton { padding: 10px; }',
          demo: '<div style="padding: 20px; border: 1px solid #ccc; text-align: center;"><input type="url" placeholder="Enter URL" style="padding: 10px; margin-right: 10px;" /><button style="padding: 10px;">Shorten</button><div id="shortUrl"></div></div>',
        },
        {
          title: 'Step 3: JavaScript Logic (API)',
          description: 'Write JavaScript code to shorten the URL using an API.',
          code: `// JavaScript code for URL shortener functionality using API
            async function shortenUrl() {
              const longUrl = document.getElementById('longUrl').value;
              const response = await fetch('https://api.shrtco.de/v2/shorten?url=' + longUrl);
              const data = await response.json();
              document.getElementById('shortUrl').textContent = data.result.short_link;
            }`,
          demo: '<div style="padding: 20px; border: 1px solid #ccc; text-align: center;"><input type="url" placeholder="Enter URL" style="padding: 10px; margin-right: 10px;" /><button style="padding: 10px;">Shorten</button><div id="shortUrl"></div></div>',
        },
        {
          title: 'Step 4: Complete Implementation',
          description: 'Integrate all the code and run the project.',
          code: `
            <!-- HTML -->
            <input type="url" id="longUrl" placeholder="Enter URL" />
            <button id="shortenBtn">Shorten</button>
            <div id="shortUrl"></div>

            /* CSS */
            input { padding: 10px; margin-right: 10px; }
            button { padding: 10px; }

            // JavaScript
            async function shortenUrl() {
              const longUrl = document.getElementById('longUrl').value;
              const response = await fetch('https://api.shrtco.de/v2/shorten?url=' + longUrl);
              const data = await response.json();
              document.getElementById('shortUrl').textContent = data.result.short_link;
            }
            document.getElementById('shortenBtn').addEventListener('click', shortenUrl);
          `,
          demo: '<div style="padding: 20px; border: 1px solid #ccc; text-align: center;"><input type="url" placeholder="Enter URL" style="padding: 10px; margin-right: 10px;" /><button style="padding: 10px;">Shorten</button><div id="shortUrl"></div></div>',
        },
      ];

      const renderDemo = (stepData) => {
        return <div dangerouslySetInnerHTML={{ __html: stepData.demo }} />;
      };

      return (
        <StepwiseComponent steps={steps} renderDemo={renderDemo} />
      );
    }

    export default URLShortenerPage;
