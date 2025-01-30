import React from 'react';
import StepwiseComponent from './StepwiseComponent';

function ExpenseTrackerPage() {
  const steps = [
    {
      title: 'Step 1: HTML Structure',
      description: 'Create the basic HTML structure for the expense tracker.',
      code: `
        <div id="tracker-container">
          <input type="text" id="itemInput" placeholder="Enter item" />
          <input type="number" id="amountInput" placeholder="Enter amount" />
          <button id="addBtn">Add Expense</button>
          <div id="expenseList"></div>
        </div>
      `,
      demo: `
        <div style="padding: 20px; border: 1px solid #ccc; text-align: center;">
          <div id="demo-tracker-container">
            <input type="text" placeholder="Enter item" />
            <input type="number" placeholder="Enter amount" />
            <button>Add Expense</button>
            <div id="demo-expenseList"></div>
          </div>
        </div>
      `,
    },
    {
      title: 'Step 2: CSS Styling',
      description: 'Add CSS styles to make the expense tracker look good.',
      code: `
        /* CSS code for styling */
        #tracker-container { text-align: center; }
        input { padding: 10px; margin-right: 10px; }
        button { padding: 10px; }
        #expenseList { margin-top: 20px; }
      `,
      demo: `
        <div style="padding: 20px; border: 1px solid #ccc; text-align: center;">
          <div id="demo-tracker-container" style="text-align: center;">
            <input type="text" placeholder="Enter item" style="padding: 10px; margin-right: 10px;" />
            <input type="number" placeholder="Enter amount" style="padding: 10px; margin-right: 10px;" />
            <button style="padding: 10px;">Add Expense</button>
            <div id="demo-expenseList" style="margin-top: 20px;"></div>
          </div>
        </div>
      `,
    },
    {
      title: 'Step 3: JavaScript Logic',
      description: 'Write JavaScript code to add expenses to the list.',
      code: `
        // JavaScript code for expense tracker functionality
        function addExpense() {
          const item = document.getElementById('itemInput').value;
          const amount = document.getElementById('amountInput').value;
          const expenseListDiv = document.getElementById('expenseList');
          const expenseDiv = document.createElement('div');
          expenseDiv.textContent = \`\${item}: \$\${amount}\`;
          expenseListDiv.appendChild(expenseDiv);
        }
      `,
      demo: `
        <div style="padding: 20px; border: 1px solid #ccc; text-align: center;">
          <div id="demo-tracker-container">
            <input type="text" placeholder="Enter item" style="padding: 10px; margin-right: 10px;" />
            <input type="number" placeholder="Enter amount" style="padding: 10px; margin-right: 10px;" />
            <button style="padding: 10px;">Add Expense</button>
            <div id="demo-expenseList" style="margin-top: 20px;"></div>
          </div>
        </div>
      `,
    },
    {
      title: 'Step 4: Integrate Local Storage',
      description: 'Use Local Storage to persist the expenses even after page reload.',
      code: `
        // HTML
        <div id="tracker-container">
          <input type="text" id="itemInput" placeholder="Enter item" />
          <input type="number" id="amountInput" placeholder="Enter amount" />
          <button id="addBtn">Add Expense</button>
          <div id="expenseList"></div>
        </div>

        /* CSS */
        #tracker-container { text-align: center; }
        input { padding: 10px; margin-right: 10px; }
        button { padding: 10px; }
        #expenseList { margin-top: 20px; }

        // JavaScript with Local Storage
        function addExpense() {
          const item = document.getElementById('itemInput').value;
          const amount = document.getElementById('amountInput').value;

          if (!item || !amount) return;

          const expense = { item, amount };
          const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
          expenses.push(expense);
          localStorage.setItem('expenses', JSON.stringify(expenses));

          displayExpenses();
        }

        function displayExpenses() {
          const expenseListDiv = document.getElementById('expenseList');
          const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
          expenseListDiv.innerHTML = '';

          expenses.forEach(expense => {
            const expenseDiv = document.createElement('div');
            expenseDiv.textContent = \`\${expense.item}: \$\${expense.amount}\`;
            expenseListDiv.appendChild(expenseDiv);
          });
        }

        document.getElementById('addBtn').addEventListener('click', addExpense);
        window.onload = displayExpenses;
      `,
      demo: `
        <div style="padding: 20px; border: 1px solid #ccc; text-align: center;">
          <div id="demo-tracker-container">
            <input type="text" placeholder="Enter item" style="padding: 10px; margin-right: 10px;" />
            <input type="number" placeholder="Enter amount" style="padding: 10px; margin-right: 10px;" />
            <button style="padding: 10px;">Add Expense</button>
            <div id="demo-expenseList" style="margin-top: 20px;"></div>
          </div>
        </div>
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

export default ExpenseTrackerPage;
