import React, { useState, useEffect } from 'react';

    function TaskPrioritizationPage() {
      const [tasks, setTasks] = useState(() => {
        const storedTasks = localStorage.getItem('tasks');
        return storedTasks ? JSON.parse(storedTasks) : [];
      });
      const [newTask, setNewTask] = useState('');
      const [newTaskPriority, setNewTaskPriority] = useState('low');
      const [newTaskDueDate, setNewTaskDueDate] = useState('');
      const [newTaskCategory, setNewTaskCategory] = useState('');
      const [newTaskSubtasks, setNewTaskSubtasks] = useState('');
      const [newTaskEstimatedTime, setNewTaskEstimatedTime] = useState('');
      const [sortOption, setSortOption] = useState('priority');
      const [filterCategory, setFilterCategory] = useState('');
      const [priorityLevels, setPriorityLevels] = useState(['low', 'medium', 'high']);

      useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }, [tasks]);

      const generateId = () => {
        return Date.now().toString(36) + Math.random().toString(36).substring(2);
      };

      const handleAddTask = () => {
        if (newTask.trim()) {
          const newId = generateId();
          const subtasksArray = newTaskSubtasks.split(',').map(subtask => ({ id: generateId(), title: subtask.trim(), completed: false }));
          setTasks([...tasks, { id: newId, title: newTask, priority: newTaskPriority, dueDate: newTaskDueDate, category: newTaskCategory, subtasks: subtasksArray, estimatedTime: newTaskEstimatedTime, completed: false }]);
          setNewTask('');
          setNewTaskPriority('low');
          setNewTaskDueDate('');
          setNewTaskCategory('');
          setNewTaskSubtasks('');
          setNewTaskEstimatedTime('');
        }
      };

      const handleRemoveTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
      };

      const handlePriorityChange = (e) => {
        setNewTaskPriority(e.target.value);
      };

      const handleTaskChange = (e) => {
        setNewTask(e.target.value);
      };

      const handleDueDateChange = (e) => {
        setNewTaskDueDate(e.target.value);
      };

      const handleCategoryChange = (e) => {
        setNewTaskCategory(e.target.value);
      };

      const handleSubtasksChange = (e) => {
        setNewTaskSubtasks(e.target.value);
      };

      const handleEstimatedTimeChange = (e) =>
        setNewTaskEstimatedTime(e.target.value);

      const handleTaskComplete = (id) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
      };

      const handleSubtaskComplete = (taskId, subtaskId) => {
        setTasks(tasks.map(task => {
          if (task.id === taskId) {
            return {
              ...task,
              subtasks: task.subtasks.map(subtask =>
                subtask.id === subtaskId ? { ...subtask, completed: !subtask.completed } : subtask
              )
            };
          }
          return task;
        }));
      };

      const handleSortChange = (e) => {
        setSortOption(e.target.value);
      };

      const handleFilterChange = (e) => {
        setFilterCategory(e.target.value);
      };

      const handleAddPriorityLevel = () => {
        const newLevel = prompt("Enter new priority level:");
        if (newLevel && !priorityLevels.includes(newLevel)) {
          setPriorityLevels([...priorityLevels, newLevel]);
        }
      };

      const handleTaskPriorityChange = (id, newPriority) => {
        setTasks(tasks.map(task =>
          task.id === id ? { ...task, priority: newPriority } : task
        ));
      };

      const calculateTaskProgress = (task) => {
        if (!task.subtasks || task.subtasks.length === 0) {
          return task.completed ? 100 : 0;
        }
        const completedSubtasks = task.subtasks.filter(subtask => subtask.completed).length;
        return Math.round((completedSubtasks / task.subtasks.length) * 100);
      };

      const sortedTasks = [...tasks].sort((a, b) => {
        if (sortOption === 'priority') {
          const priorityOrder = priorityLevels.reduce((acc, level, index) => ({ ...acc, [level]: index + 1 }), {});
          return priorityOrder[a.priority] - priorityOrder[b.priority];
        } else if (sortOption === 'dueDate') {
          return new Date(a.dueDate) - new Date(b.dueDate);
        } else if (sortOption === 'estimatedTime') {
          return (parseInt(a.estimatedTime, 10) || 0) - (parseInt(b.estimatedTime, 10) || 0);
        }
        return 0;
      });

      const filteredTasks = sortedTasks.filter(task =>
        filterCategory === '' || task.category === filterCategory
      );

      const handleDragStart = (e, id) => {
        e.dataTransfer.setData('taskId', id);
      };

      const handleDragOver = (e) => {
        e.preventDefault();
      };

      const handleDrop = (e, targetId) => {
        const sourceId = e.dataTransfer.getData('taskId');
        if (sourceId === targetId) return;

        const sourceIndex = tasks.findIndex(task => task.id === sourceId);
        const targetIndex = tasks.findIndex(task => task.id === targetId);

        if (sourceIndex === -1 || targetIndex === -1) return;

        const newTasks = [...tasks];
        const [movedTask] = newTasks.splice(sourceIndex, 1);
        newTasks.splice(targetIndex, 0, movedTask);
        setTasks(newTasks);
      };

      return (
        <div className="container mx-auto py-12 px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-center mb-8">Task Prioritization</h1>
          <p className="text-gray-400 text-center mb-8">
            List your tasks and prioritize them based on urgency and importance.
          </p>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-blue-500/20 p-6">
            <form onSubmit={(e) => { e.preventDefault(); handleAddTask(); }} className="mb-6 flex flex-wrap gap-2">
              <input
                type="text"
                placeholder="Add a new task..."
                value={newTask}
                onChange={handleTaskChange}
                className="flex-1 p-3 bg-gray-700 rounded border border-blue-500/20 focus:outline-none focus:border-blue-500 text-white"
                required
              />
              <select
                value={newTaskPriority}
                onChange={handlePriorityChange}
                className="bg-gray-700 rounded p-3 text-white focus:outline-none border border-blue-500/20"
              >
                {priorityLevels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
              <input
                type="date"
                placeholder="Due Date"
                value={newTaskDueDate}
                onChange={handleDueDateChange}
                className="bg-gray-700 rounded p-3 text-white focus:outline-none border border-blue-500/20"
              />
              <input
                type="text"
                placeholder="Category"
                value={newTaskCategory}
                onChange={handleCategoryChange}
                className="bg-gray-700 rounded p-3 text-white focus:outline-none border border-blue-500/20"
              />
              <input
                type="text"
                placeholder="Subtasks (comma-separated)"
                value={newTaskSubtasks}
                onChange={handleSubtasksChange}
                className="bg-gray-700 rounded p-3 text-white focus:outline-none border border-blue-500/20"
              />
              <input
                type="number"
                placeholder="Estimated Time (min)"
                value={newTaskEstimatedTime}
                onChange={handleEstimatedTimeChange}
                className="bg-gray-700 rounded p-3 text-white focus:outline-none border border-blue-500/20"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
              >
                Add
              </button>
            </form>
            <div className="flex justify-between items-center mb-4">
              <div className="flex space-x-2">
                <select
                  value={sortOption}
                  onChange={handleSortChange}
                  className="bg-gray-700 rounded p-2 text-white focus:outline-none border border-blue-500/20"
                >
                  <option value="priority">Sort by Priority</option>
                  <option value="dueDate">Sort by Due Date</option>
                  <option value="estimatedTime">Sort by Estimated Time</option>
                </select>
                <select
                  value={filterCategory}
                  onChange={handleFilterChange}
                  className="bg-gray-700 rounded p-2 text-white focus:outline-none border border-blue-500/20"
                >
                  <option value="">All Categories</option>
                  {[...new Set(tasks.map(task => task.category).filter(Boolean))].map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              <button
                onClick={handleAddPriorityLevel}
                className="px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700 transition-all text-xs"
              >
                Add Priority Level
              </button>
            </div>
            <ul className="space-y-4">
              {filteredTasks.map((task) => (
                <li
                  key={task.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, task.id)}
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, task.id)}
                  className="bg-gray-700/50 backdrop-blur-sm rounded-lg p-4 border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300 flex flex-col max-w-xl"
                >
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex-1">
                      <span
                        onClick={() => handleTaskComplete(task.id)}
                        className={`cursor-pointer ${task.completed ? 'line-through text-gray-500' : 'text-gray-300'}`}
                      >
                        {task.title}
                      </span>
                      {task.dueDate && (
                        <span className="text-gray-400 text-sm ml-2">Due: {new Date(task.dueDate).toLocaleDateString()}</span>
                      )}
                      {task.estimatedTime && (
                        <span className="text-gray-400 text-sm ml-2">Est: {task.estimatedTime} min</span>
                      )}
                      {task.category && (
                        <span className="text-gray-400 text-sm ml-2">Category: {task.category}</span>
                      )}
                    </div>
                    <select
                      value={task.priority}
                      onChange={(e) => handleTaskPriorityChange(task.id, e.target.value)}
                      className="bg-gray-700 rounded p-1 text-white focus:outline-none border border-blue-500/20 text-xs"
                    >
                      {priorityLevels.map(level => (
                        <option key={level} value={level}>{level}</option>
                      ))}
                    </select>
                    <button
                      onClick={() => handleRemoveTask(task.id)}
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-all text-xs"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-full h-3 overflow-hidden border border-blue-500/20 mt-2">
                    <div
                      className="bg-blue-500 h-full rounded-full transition-all duration-500"
                      style={{ width: `${calculateTaskProgress(task)}%` }}
                    >
                      <span className="text-white text-center block h-full leading-3 text-[10px]">{calculateTaskProgress(task)}%</span>
                    </div>
                  </div>
                  {task.subtasks && task.subtasks.length > 0 && (
                    <ul className="ml-4 space-y-1">
                      {task.subtasks.map(subtask => (
                        <li key={subtask.id} className="flex items-center justify-between">
                          <span
                            onClick={() => handleSubtaskComplete(task.id, subtask.id)}
                            className={`text-gray-400 text-sm cursor-pointer ${subtask.completed ? 'line-through text-gray-500' : ''}`}
                          >
                            {subtask.title}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    }

    export default TaskPrioritizationPage;
