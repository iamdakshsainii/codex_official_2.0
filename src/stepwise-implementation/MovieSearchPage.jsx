import React from 'react';
    import StepwiseComponent from './StepwiseComponent';

    function MovieSearchPage() {
      const steps = [
        {
          title: 'Step 1: HTML Structure',
          description: 'Create the basic HTML for the movie search app.',
          code: '<!-- HTML code for movie search app -->\n<input type="text" id="movieTitle" placeholder="Enter Movie Title" /><button id="searchBtn">Search</button><div id="movieResults"></div>',
          demo: '<div style="padding: 20px; border: 1px solid #ccc; text-align: center;"><input type="text" placeholder="Enter Movie Title" /><button>Search</button><div id="demo-movieResults"></div></div>',
        },
        {
          title: 'Step 2: CSS Styling',
          description: 'Add CSS styles to make the movie search app look good.',
          code: '/* CSS code for styling */\ninput { padding: 10px; margin-right: 10px; }\nbutton { padding: 10px; }',
          demo: '<div style="padding: 20px; border: 1px solid #ccc; text-align: center;"><input type="text" placeholder="Enter Movie Title" style="padding: 10px; margin-right: 10px;" /><button style="padding: 10px;">Search</button><div id="demo-movieResults"></div></div>',
        },
        {
          title: 'Step 3: JavaScript Logic (API)',
          description: 'Write JavaScript code to fetch movie data using an API.',
          code: `// JavaScript code for movie search app functionality using API
            async function searchMovie() {
              const movieTitle = document.getElementById('movieTitle').value;
              const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
              const response = await fetch(\`https://www.omdbapi.com/?apikey=\${apiKey}&s=\${movieTitle}\`);
              const data = await response.json();
              if (data.Search) {
                const results = data.Search.map(movie => \`<div>\${movie.Title} (\${movie.Year})</div>\`).join('');
                document.getElementById('movieResults').innerHTML = results;
              } else {
                document.getElementById('movieResults').textContent = 'No movies found.';
              }
            }`,
          demo: '<div style="padding: 20px; border: 1px solid #ccc; text-align: center;"><input type="text" placeholder="Enter Movie Title" style="padding: 10px; margin-right: 10px;" /><button style="padding: 10px;">Search</button><div id="demo-movieResults"></div></div>',
        },
        {
          title: 'Step 4: Complete Implementation',
          description: 'Integrate all the code and run the project.',
          code: `
            <!-- HTML -->
            <input type="text" id="movieTitle" placeholder="Enter Movie Title" />
            <button id="searchBtn">Search</button>
            <div id="movieResults"></div>

            /* CSS */
            input { padding: 10px; margin-right: 10px; }
            button { padding: 10px; }

            // JavaScript
            async function searchMovie() {
              const movieTitle = document.getElementById('movieTitle').value;
              const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
              const response = await fetch(\`https://www.omdbapi.com/?apikey=\${apiKey}&s=\${movieTitle}\`);
              const data = await response.json();
              if (data.Search) {
                const results = data.Search.map(movie => \`<div>\${movie.Title} (\${movie.Year})</div>\`).join('');
                document.getElementById('movieResults').innerHTML = results;
              } else {
                document.getElementById('movieResults').textContent = 'No movies found.';
              }
            }
            document.getElementById('searchBtn').addEventListener('click', searchMovie);
          `,
          demo: '<div style="padding: 20px; border: 1px solid #ccc; text-align: center;"><input type="text" placeholder="Enter Movie Title" style="padding: 10px; margin-right: 10px;" /><button style="padding: 10px;">Search</button><div id="demo-movieResults"></div></div>',
        },
      ];

      const renderDemo = (stepData) => {
        return <div dangerouslySetInnerHTML={{ __html: stepData.demo }} />;
      };

      return (
        <StepwiseComponent steps={steps} renderDemo={renderDemo} />
      );
    }

    export default MovieSearchPage;
