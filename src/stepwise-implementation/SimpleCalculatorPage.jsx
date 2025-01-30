import React from 'react';
    import StepwiseComponent from './StepwiseComponent';

    function SimpleCalculatorPage() {
      const steps = [
        {
          title: 'Step 1: HTML Structure',
          description: 'Create the basic HTML for the calculator.',
          code: `
            <div id="calculator-container">
              <input type="text" id="display" disabled />
              <div id="buttons">
                <button>7</button><button>8</button><button>9</button><button>+</button>
                <button>4</button><button>5</button><button>6</button><button>-</button>
                <button>1</button><button>2</button><button>3</button><button>*</button>
                <button>0</button><button>.</button><button>=</button><button>/</button>
              </div>
            </div>
          `,
          demo: '<div style="padding: 20px; border: 1px solid #ccc; text-align: center;"><div id="demo-calculator-container"><input type="text" disabled /><div id="demo-buttons"> <button>7</button><button>8</button><button>9</button><button>+</button> <button>4</button><button>5</button><button>6</button><button>-</button> <button>1</button><button>2</button><button>3</button><button>*</button> <button>0</button><button>.</button><button>=</button><button>/</button> </div></div></div>',
        },
        {
          title: 'Step 2: CSS Styling',
          description: 'Add CSS styles to make the calculator look good.',
          code: `
            /* CSS code for styling */
            #calculator-container { text-align: center; }
            #buttons button { padding: 10px; margin: 2px; }
          `,
          demo: '<div style="padding: 20px; border: 1px solid #ccc; text-align: center;"><div id="demo-calculator-container" style="text-align: center;"><input type="text" disabled /><div id="demo-buttons" style="margin-top: 20px;"> <button style="padding: 10px; margin: 2px;">7</button><button style="padding: 10px; margin: 2px;">8</button><button style="padding: 10px; margin: 2px;">9</button><button style="padding: 10px; margin: 2px;">+</button> <button style="padding: 10px; margin: 2px;">4</button><button style="padding: 10px; margin: 2px;">5</button><button style="padding: 10px; margin: 2px;">6</button><button style="padding: 10px; margin: 2px;">-</button> <button style="padding: 10px; margin: 2px;">1</button><button style="padding: 10px; margin: 2px;">2</button><button style="padding: 10px; margin: 2px;">3</button><button style="padding: 10px; margin: 2px;">*</button> <button style="padding: 10px; margin: 2px;">0</button><button style="padding: 10px; margin: 2px;">.</button><button style="padding: 10px; margin: 2px;">=</button><button style="padding: 10px; margin: 2px;">/</button> </div></div></div>',
        },
        {
          title: 'Step 3: JavaScript Logic',
          description: 'Write JavaScript code to handle button clicks and calculations.',
          code: `// JavaScript code for calculator functionality
            function handleButtonClick(value) {
              const display = document.getElementById('display');
              display.value += value;
            }
          `,
          demo: '<div style="padding: 20px; border: 1px solid #ccc; text-align: center;"><div id="demo-calculator-container"><input type="text" disabled /><div id="demo-buttons"> <button>7</button><button>8</button><button>9</button><button>+</button> <button>4</button><button>5</button><button>6</button><button>-</button> <button>1</button><button>2</button><button>3</button><button>*</button> <button>0</button><button>.</button><button>=</button><button>/</button> </div></div></div>',
        },
        {
          title: 'Step 4: Complete Implementation',
          description: 'Integrate all the code and run the project.',
          code: `
            <!-- HTML -->
            <div id="calculator-container">
              <input type="text" id="display" disabled />
              <div id="buttons">
                <button onclick="handleButtonClick('7')">7</button><button onclick="handleButtonClick('8')">8</button><button onclick="handleButtonClick('9')">9</button><button onclick="handleButtonClick('+')">+</button>
                <button onclick="handleButtonClick('4')">4</button><button onclick="handleButtonClick('5')">5</button><button onclick="handleButtonClick('6')">6</button><button onclick="handleButtonClick('-')">-</button>
                <button onclick="handleButtonClick('1')">1</button><button onclick="handleButtonClick('2')">2</button><button onclick="handleButtonClick('3')">3</button><button onclick="handleButtonClick('*')">*</button>
                <button onclick="handleButtonClick('0')">0</button><button onclick="handleButtonClick('.')">.</button><button onclick="handleButtonClick('=')">=</button><button onclick="handleButtonClick('/')">/</button>
              </div>
            </div>

            /* CSS */
            #calculator-container { text-align: center; }
            #buttons button { padding: 10px; margin: 2px; }

            // JavaScript
            function handleButtonClick(value) {
              const display = document.getElementById('display');
              display.value += value;
            }
          `,
          demo: '<div style="padding: 20px; border: 1px solid #ccc; text-align: center;"><div id="demo-calculator-container"><input type="text" disabled /><div id="demo-buttons"> <button style="padding: 10px; margin: 2px;">7</button><button style="padding: 10px; margin: 2px;">8</button><button style="padding: 10px; margin: 2px;">9</button><button style="padding: 10px; margin: 2px;">+</button> <button style="padding: 10px; margin: 2px;">4</button><button style="padding: 10px; margin: 2px;">5</button><button style="padding: 10px; margin: 2px;">6</button><button style="padding: 10px; margin: 2px;">-</button> <button style="padding: 10px; margin: 2px;">1</button><button style="padding: 10px; margin: 2px;">2</button><button style="padding: 10px; margin: 2px;">3</button><button style="padding: 10px; margin: 2px;">*</button> <button style="padding: 10px; margin: 2px;">0</button><button style="padding: 10px; margin: 2px;">.</button><button style="padding: 10px; margin: 2px;">=</button><button style="padding: 10px; margin: 2px;">/</button> </div></div></div>',
        },
      ];

      const renderDemo = (stepData) => {
        return <div dangerouslySetInnerHTML={{ __html: stepData.demo }} />;
      };

      return (
        <StepwiseComponent steps={steps} renderDemo={renderDemo} />
      );
    }

    export default SimpleCalculatorPage;
