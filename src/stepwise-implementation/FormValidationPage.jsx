import React from 'react';
    import StepwiseComponent from './StepwiseComponent';

    function FormValidationPage() {
      const steps = [
        {
          title: 'Step 1: HTML Structure',
          description: 'Create the basic HTML form with input fields.',
          code: `
            <form id="myForm">
              <input type="text" id="name" placeholder="Name" required />
              <input type="email" id="email" placeholder="Email" required />
              <input type="password" id="password" placeholder="Password" required />
              <button type="submit">Submit</button>
            </form>
          `,
          demo: '<div style="padding: 20px; border: 1px solid #ccc; text-align: center;"><form id="demo-myForm"><input type="text" placeholder="Name" required /><input type="email" placeholder="Email" required /><input type="password" placeholder="Password" required /><button type="submit">Submit</button></form></div>',
        },
        {
          title: 'Step 2: CSS Styling (Tailwind CSS)',
          description: 'Add CSS styles using Tailwind CSS to make the form look good.',
          code: `
            /* CSS code for styling using Tailwind CSS */
            <form class="flex flex-col w-80 mx-auto space-y-4">
              <input type="text" placeholder="Name" required class="p-2 border border-gray-300 rounded" />
              <input type="email" placeholder="Email" required class="p-2 border border-gray-300 rounded" />
              <input type="password" placeholder="Password" required class="p-2 border border-gray-300 rounded" />
              <button type="submit" class="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">Submit</button>
            </form>
          `,
          demo: '<div style="padding: 20px; border: 1px solid #ccc; text-align: center;"><form id="demo-myForm" style="display: flex; flex-direction: column; width: 300px; margin: 0 auto;"><input type="text" placeholder="Name" required style="padding: 10px; margin-bottom: 10px;" /><input type="email" placeholder="Email" required style="padding: 10px; margin-bottom: 10px;" /><input type="password" placeholder="Password" required style="padding: 10px; margin-bottom: 10px;" /><button type="submit" style="padding: 10px;">Submit</button></form></div>',
        },
        {
          title: 'Step 3: JavaScript Logic',
          description: 'Write JavaScript code to validate the form inputs.',
          code: `
            // JavaScript code for form validation
            document.getElementById('myForm').addEventListener('submit', function(event) {
              event.preventDefault();
              const name = document.getElementById('name').value;
              const email = document.getElementById('email').value;
              const password = document.getElementById('password').value;
              if (name && email && password) {
                alert('Form submitted successfully!');
              } else {
                alert('Please fill in all fields.');
              }
            });
          `,
          demo: '<div style="padding: 20px; border: 1px solid #ccc; text-align: center;"><form id="demo-myForm" style="display: flex; flex-direction: column; width: 300px; margin: 0 auto;"><input type="text" placeholder="Name" required style="padding: 10px; margin-bottom: 10px;" /><input type="email" placeholder="Email" required style="padding: 10px; margin-bottom: 10px;" /><input type="password" placeholder="Password" required style="padding: 10px; margin-bottom: 10px;" /><button type="submit" style="padding: 10px;">Submit</button></form></div>',
        },
        {
          title: 'Step 4: Complete Implementation',
          description: 'Integrate all the code and run the project.',
          code: `
            <!-- HTML -->
            <form id="myForm">
              <input type="text" id="name" placeholder="Name" required />
              <input type="email" id="email" placeholder="Email" required />
              <input type="password" id="password" placeholder="Password" required />
              <button type="submit">Submit</button>
            </form>

            /* CSS */
            form { display: flex; flex-direction: column; width: 300px; margin: 0 auto; }
            input { padding: 10px; margin-bottom: 10px; }
            button { padding: 10px; }

            // JavaScript
            document.getElementById('myForm').addEventListener('submit', function(event) {
              event.preventDefault();
              const name = document.getElementById('name').value;
              const email = document.getElementById('email').value;
              const password = document.getElementById('password').value;
              if (name && email && password) {
                alert('Form submitted successfully!');
              } else {
                alert('Please fill in all fields.');
              }
            });
          `,
          demo: '<div style="padding: 20px; border: 1px solid #ccc; text-align: center;"><form id="demo-myForm" style="display: flex; flex-direction: column; width: 300px; margin: 0 auto;"><input type="text" placeholder="Name" required style="padding: 10px; margin-bottom: 10px;" /><input type="email" placeholder="Email" required style="padding: 10px; margin-bottom: 10px;" /><input type="password" placeholder="Password" required style="padding: 10px; margin-bottom: 10px;" /><button type="submit" style="padding: 10px;">Submit</button></form></div>',
        },
      ];

      const renderDemo = (stepData) => {
        return <div dangerouslySetInnerHTML={{ __html: stepData.demo }} />;
      };

      return (
        <StepwiseComponent steps={steps} renderDemo={renderDemo} />
      );
    }

    export default FormValidationPage;
