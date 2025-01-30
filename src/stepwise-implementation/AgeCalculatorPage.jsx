import React from 'react';
import StepwiseComponent from './StepwiseComponent';

function AgeCalculatorPage() {
  const steps = [
    {
      title: 'Step 1: HTML Structure',
      description: 'Create the basic HTML for the age calculator.',
      code: `
<input type="date" id="birthdate" />
<button id="calculate">Calculate Age</button>
<div id="result"></div>`,
      demo: `
<div style="padding: 20px; border: 1px solid #ccc; text-align: center;">
  <input type="date" id="birthdate" />
  <button id="calculate">Calculate Age</button>
  <div id="result"></div>
</div>`,
    },
    {
      title: 'Step 2: CSS Styling',
      description: 'Add CSS styles to make the age calculator look good.',
      code: `
/* CSS Styling */
input {
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

#result {
  margin-top: 10px;
  font-size: 18px;
  font-weight: bold;
}`,
      demo: `
<div style="padding: 20px; border: 1px solid #ccc; text-align: center;">
  <input type="date" id="birthdate" style="padding: 10px; margin-right: 10px; border: 1px solid #ccc; border-radius: 4px;" />
  <button style="padding: 10px 15px; background-color: #007bff; color: white; border: none; border-radius: 4px;">Calculate Age</button>
  <div id="result" style="margin-top: 10px; font-size: 18px; font-weight: bold;"></div>
</div>`,
    },
    {
      title: 'Step 3: JavaScript Logic',
      description: 'Write JavaScript code to calculate the age.',
      code: `
// JavaScript Logic
function calculateAge() {
  const birthdate = new Date(document.getElementById('birthdate').value);
  const today = new Date();
  let age = today.getFullYear() - birthdate.getFullYear();
  const month = today.getMonth() - birthdate.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < birthdate.getDate())) {
    age--;
  }
  document.getElementById('result').textContent = 'Your age is: ' + age + ' years';
}

document.getElementById('calculate').addEventListener('click', calculateAge);`,
      demo: `
<div style="padding: 20px; border: 1px solid #ccc; text-align: center;">
  <input type="date" id="birthdate" style="padding: 10px; margin-right: 10px; border: 1px solid #ccc; border-radius: 4px;" />
  <button id="calculate" style="padding: 10px 15px; background-color: #007bff; color: white; border: none; border-radius: 4px;">Calculate Age</button>
  <div id="result" style="margin-top: 10px; font-size: 18px; font-weight: bold;"></div>
</div>`,
    },
    {
      title: 'Step 4: Complete Implementation',
      description: 'Integrate all the code and run the project.',
      code: `
<!-- HTML -->
<input type="date" id="birthdate" />
<button id="calculate">Calculate Age</button>
<div id="result"></div>

/* CSS */
input {
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

#result {
  margin-top: 10px;
  font-size: 18px;
  font-weight: bold;
}

// JavaScript
function calculateAge() {
  const birthdate = new Date(document.getElementById('birthdate').value);
  const today = new Date();
  let age = today.getFullYear() - birthdate.getFullYear();
  const month = today.getMonth() - birthdate.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < birthdate.getDate())) {
    age--;
  }
  document.getElementById('result').textContent = 'Your age is: ' + age + ' years';
}

document.getElementById('calculate').addEventListener('click', calculateAge);`,
      demo: `
<div style="padding: 20px; border: 1px solid #ccc; text-align: center;">
  <input type="date" id="birthdate" style="padding: 10px; margin-right: 10px; border: 1px solid #ccc; border-radius: 4px;" />
  <button id="calculate" style="padding: 10px 15px; background-color: #007bff; color: white; border: none; border-radius: 4px;">Calculate Age</button>
  <div id="result" style="margin-top: 10px; font-size: 18px; font-weight: bold;"></div>
</div>`,
    },
  ];

  const renderDemo = (stepData) => {
    return <div dangerouslySetInnerHTML={{ __html: stepData.demo }} />;
  };

  return <StepwiseComponent steps={steps} renderDemo={renderDemo} />;
}

export default AgeCalculatorPage;
