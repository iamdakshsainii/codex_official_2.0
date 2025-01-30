import React from 'react';
import StepwiseComponent from './StepwiseComponent';

function WeatherDashboardPage() {
  const steps = [
    {
      title: 'Step 1: HTML Structure',
      description: 'Create the basic HTML for the weather dashboard.',
      code: `
        <div id="weather-container">
          <input type="text" id="cityInput" placeholder="Enter City" />
          <button id="searchBtn">Search</button>
          <div id="weatherInfo"></div>
        </div>
      `,
      demo: `
        <div id="weather-container">
          <input type="text" placeholder="Enter City" />
          <button>Search</button>
          <div id="weatherInfo"></div>
        </div>
      `,
    },
    {
      title: 'Step 2: CSS Styling (Tailwind CSS)',
      description: 'Add CSS styles using Tailwind CSS to make the weather dashboard look good.',
      code: `
        <!-- Tailwind CSS -->
        <div class="text-center">
          <input type="text" placeholder="Enter City" class="p-2 border border-gray-300 rounded mr-2" />
          <button class="p-2 bg-blue-500 text-white rounded">Search</button>
          <div class="mt-4" id="weatherInfo"></div>
        </div>
      `,
      demo: `
        <div style="padding: 20px; border: 1px solid #ccc; text-align: center;">
          <input type="text" placeholder="Enter City" style="padding: 10px; margin-right: 10px;" />
          <button style="padding: 10px; background-color: #007bff; color: white; border-radius: 5px;">Search</button>
          <div id="weatherInfo" style="margin-top: 20px;"></div>
        </div>
      `,
    },
    {
      title: 'Step 3: JavaScript Logic (API)',
      description: 'Write JavaScript code to fetch weather data using an API.',
      code: `
        // JavaScript code for weather dashboard functionality using API
        async function fetchWeather() {
          const city = document.getElementById('cityInput').value;
          const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
          const response = await fetch(\`https://api.openweathermap.org/data/2.5/weather?q=\${city}&appid=\${apiKey}&units=metric\`);
          const data = await response.json();
          if (data.main) {
            document.getElementById('weatherInfo').innerHTML = \`
              <p>Temperature: \${data.main.temp}°C</p>
              <p>Description: \${data.weather[0].description}</p>
            \`;
          } else {
            document.getElementById('weatherInfo').textContent = 'City not found.';
          }
        }
      `,
      demo: `
        <div style="padding: 20px; border: 1px solid #ccc; text-align: center;">
          <input type="text" placeholder="Enter City" style="padding: 10px; margin-right: 10px;" />
          <button style="padding: 10px; background-color: #007bff; color: white; border-radius: 5px;" onclick="fetchWeather()">Search</button>
          <div id="weatherInfo" style="margin-top: 20px;"></div>
        </div>
        <script>
          async function fetchWeather() {
            const city = document.querySelector('input').value;
            const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
            const response = await fetch(\`https://api.openweathermap.org/data/2.5/weather?q=\${city}&appid=\${apiKey}&units=metric\`);
            const data = await response.json();
            const weatherInfo = document.getElementById('weatherInfo');
            if (data.main) {
              weatherInfo.innerHTML = \`
                <p>Temperature: \${data.main.temp}°C</p>
                <p>Description: \${data.weather[0].description}</p>
              \`;
            } else {
              weatherInfo.textContent = 'City not found.';
            }
          }
        </script>
      `,
    },
    {
      title: 'Step 4: Complete Implementation',
      description: 'Integrate all the code and run the project.',
      code: `
        <!-- HTML -->
        <div id="weather-container">
          <input type="text" id="cityInput" placeholder="Enter City" />
          <button id="searchBtn">Search</button>
          <div id="weatherInfo"></div>
        </div>

        <!-- Tailwind CSS -->
        <div class="text-center">
          <input type="text" placeholder="Enter City" class="p-2 border border-gray-300 rounded mr-2" />
          <button class="p-2 bg-blue-500 text-white rounded">Search</button>
          <div class="mt-4" id="weatherInfo"></div>
        </div>

        <!-- JavaScript -->
        <script>
          async function fetchWeather() {
            const city = document.getElementById('cityInput').value;
            const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
            const response = await fetch(\`https://api.openweathermap.org/data/2.5/weather?q=\${city}&appid=\${apiKey}&units=metric\`);
            const data = await response.json();
            if (data.main) {
              document.getElementById('weatherInfo').innerHTML = \`
                <p>Temperature: \${data.main.temp}°C</p>
                <p>Description: \${data.weather[0].description}</p>
              \`;
            } else {
              document.getElementById('weatherInfo').textContent = 'City not found.';
            }
          }

          document.getElementById('searchBtn').addEventListener('click', fetchWeather);
        </script>
      `,
      demo: `
        <div style="padding: 20px; border: 1px solid #ccc; text-align: center;">
          <input type="text" placeholder="Enter City" style="padding: 10px; margin-right: 10px;" />
          <button style="padding: 10px; background-color: #007bff; color: white; border-radius: 5px;" onclick="fetchWeather()">Search</button>
          <div id="weatherInfo" style="margin-top: 20px;"></div>
        </div>
        <script>
          async function fetchWeather() {
            const city = document.querySelector('input').value;
            const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
            const response = await fetch(\`https://api.openweathermap.org/data/2.5/weather?q=\${city}&appid=\${apiKey}&units=metric\`);
            const data = await response.json();
            const weatherInfo = document.getElementById('weatherInfo');
            if (data.main) {
              weatherInfo.innerHTML = \`
                <p>Temperature: \${data.main.temp}°C</p>
                <p>Description: \${data.weather[0].description}</p>
              \`;
            } else {
              weatherInfo.textContent = 'City not found.';
            }
          }
        </script>
      `,
    },
  ];

  const renderDemo = (stepData) => {
    return <div dangerouslySetInnerHTML={{ __html: stepData.demo }} />;
  };

  return (
    <StepwiseComponent steps={steps} renderDemo={renderDemo} />
  );
}

export default WeatherDashboardPage;
