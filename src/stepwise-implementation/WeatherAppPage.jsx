import React from 'react';
import StepwiseComponent from './StepwiseComponent';

function WeatherAppPage() {
    const steps = [
        {
            title: 'Step 1: HTML Structure',
            description: 'Create the basic HTML for the weather app.',
            code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather App</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body>
    <div id="root"></div>
    <script src="index.js" type="text/javascript"></script>
</body>
</html>
            `,
            demo: `
<div>
    <p>This is the basic structure of the Weather App. Rendered content will be injected into the <code>#root</code> element.</p>
</div>
            `,
        },
        {
            title: 'Step 2: CSS Styling (Tailwind CSS)',
            description: 'Add CSS styles using Tailwind CSS to make the weather app look good.',
            code: `
<div class="text-center">
    <input type="text" id="cityInput" placeholder="Enter City" class="p-2 border border-gray-300 rounded mr-2" />
    <button id="searchBtn" class="p-2 bg-blue-500 text-white rounded">Search</button>
    <div class="mt-4" id="weatherInfo"></div>
</div>
            `,
            demo: `
<div class="text-center" style="padding: 20px; border: 1px solid #ccc;">
    <input type="text" id="cityInput" placeholder="Enter City" style="padding: 10px; border: 1px solid #ccc; border-radius: 4px; margin-right: 10px;" />
    <button id="searchBtn" style="padding: 10px; background-color: #1d4ed8; color: white; border-radius: 4px;">Search</button>
    <div id="weatherInfo" style="margin-top: 20px;"></div>
</div>
            `,
        },
        {
            title: 'Step 3: JavaScript Logic (API)',
            description: 'Write JavaScript code to fetch weather data using an API.',
            code: `
// JavaScript code for weather app functionality using API
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
            `,
            demo: `
<div class="text-center" style="padding: 20px; border: 1px solid #ccc;">
    <input type="text" id="cityInput" placeholder="Enter City" style="padding: 10px; border: 1px solid #ccc; border-radius: 4px; margin-right: 10px;" />
    <button id="searchBtn" style="padding: 10px; background-color: #1d4ed8; color: white; border-radius: 4px;">Search</button>
    <div id="weatherInfo" style="margin-top: 20px;">(Results will be displayed here after fetching data.)</div>
</div>
            `,
        },
        {
            title: 'Step 4: Complete Implementation',
            description: 'Integrate all the code and run the project.',
            code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather App</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <style>
        body {
            background-color: #f4f4f4;
            margin: 0;
            padding: 20px;
        }
        #weather-container {
            max-width: 600px;
            margin: auto;
            background: white;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
    </style>
</head>
<body>
    <div id="weather-container" class="text-center">
        <h1 class="text-2xl font-bold mb-4">Weather App</h1>
        <input type="text" id="cityInput" placeholder="Enter City" class="p-2 border border-gray-300 rounded mr-2" />
        <button id="searchBtn" class="p-2 bg-blue-500 text-white rounded">Search</button>
        <div id="weatherInfo" class="mt-4"></div>
    </div>

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
</body>
</html>
            `,
            demo: `
<div class="text-center" style="padding: 20px; max-width: 600px; margin: auto; border: 1px solid #ccc; border-radius: 10px; background: white;">
    <h1 style="font-size: 24px; margin-bottom: 20px;">Weather App</h1>
    <input type="text" id="cityInput" placeholder="Enter City" style="padding: 10px; border: 1px solid #ccc; border-radius: 4px; margin-right: 10px;" />
    <button id="searchBtn" style="padding: 10px; background-color: #1d4ed8; color: white; border-radius: 4px;">Search</button>
    <div id="weatherInfo" style="margin-top: 20px;">(Results will be displayed here after fetching data.)</div>
</div>
            `,
        },
    ];

    const renderDemo = (stepData) => {
        return <div dangerouslySetInnerHTML={{ __html: stepData.demo }} />;
    };

    return <StepwiseComponent steps={steps} renderDemo={renderDemo} />;
}

export default WeatherAppPage;
