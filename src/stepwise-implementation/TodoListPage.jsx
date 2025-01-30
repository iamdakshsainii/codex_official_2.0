import React from 'react';
    import StepwiseComponent from './StepwiseComponent';

    function TodoListPage() {
      const steps = [
        {
          title: 'Step 1: HTML Structure',
          description: 'Create the basic HTML for the to-do list.',
          code: `
            <div id="todo-container">
              <input type="text" id="taskInput" placeholder="Enter task" />
              <button id="addBtn">Add Task</button>
              <ul id="taskList"></ul>
            </div>
          `,
          demo: '<div style="padding: 20px; border: 1px solid #ccc; text-align: center;"><div id="demo-todo-container"><input type="text" placeholder="Enter task" /><button>Add Task</button><ul id="demo-taskList"></ul></div></div>',
        },
        {
          title: 'Step 2: CSS Styling',
          description: 'Add CSS styles to make the to-do list look good.',
          code: `
            /* CSS code for styling */
            #todo-container { text-align: center; }
            #taskList { margin-top: 20px; }
            #taskList li { list-style-type: none; }
          `,
          demo: '<div style="padding: 20px; border: 1px solid #ccc; text-align: center;"><div id="demo-todo-container" style="text-align: center;"><input type="text" placeholder="Enter task" /><button>Add Task</button><ul id="demo-taskList" style="margin-top: 20px; list-style-type: none;"></ul></div></div>',
        },
        {
          title: 'Step 3: JavaScript Logic (Vanilla JS)',
          description: 'Write JavaScript code to add tasks to the list.',
          code: `
            // JavaScript code for to-do list functionality
            function addTask() {
              const task = document.getElementById('taskInput').value;
              const taskList = document.getElementById('taskList');
              const listItem = document.createElement('li');
              listItem.textContent = task;
              taskList.appendChild(listItem);
            }
          `,
          demo: '<div style="padding: 20px; border: 1px solid #ccc; text-align: center;"><div id="demo-todo-container"><input type="text" placeholder="Enter task" /><button>Add Task</button><ul id="demo-taskList"></ul></div></div>',
        },
        {
          title: 'Step 4: Complete Implementation',
          description: 'Integrate all the code and run the project.',
          code: `
            <!-- HTML -->
            <div id="todo-container">
              <input type="text" id="taskInput" placeholder="Enter task" />
              <button id="addBtn">Add Task</button>
              <ul id="taskList"></ul>
            </div>

            /* CSS */
            #todo-container { text-align: center; }
            #taskList { margin-top: 20px; }
            #taskList li { list-style-type: none; }

            // JavaScript
            function addTask() {
              const task = document.getElementById('taskInput').value;
              const taskList = document.getElementById('taskList');
              const listItem = document.createElement('li');
              listItem.textContent = task;
              taskList.appendChild(listItem);
            }
            document.getElementById('addBtn').addEventListener('click', addTask);
          `,
          demo: '<div style="padding: 20px; border: 1px solid #ccc; text-align: center;"><div id="demo-todo-container"><input type="text" placeholder="Enter task" /><button>Add Task</button><ul id="demo-taskList"></ul></div></div>',
        },
      ];

      const renderDemo = (stepData) => {
        return <div dangerouslySetInnerHTML={{ __html: stepData.demo }} />;
      };

      return (
        <StepwiseComponent steps={steps} renderDemo={renderDemo} />
      );
    }

    export default TodoListPage;
