// SOLUTION: one copy of tasks in the closest common parent. Data down, events up.

import { useState } from "react";

const starterTasks = ["Read the docs"];

function TaskInput({ tasks, onAddTask }) {
  return (
    <div>
      <p>TaskInput: tasks has {tasks.length}</p>
      <button onClick={() => onAddTask(`Task ${tasks.length + 1}`)}>
        Add a task
      </button>
    </div>
  );
}

function TaskList({ tasks }) {
  return (
    <div>
      <p>TaskList: tasks has {tasks.length}</p>
      <ul>
        {tasks.map((task) => (
          <li key={task}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default function App() {
  const [tasks, setTasks] = useState(starterTasks);

  function handleAddTask(task) {
    setTasks([...tasks, task]);
  }

  return (
    <div>
      <TaskInput tasks={tasks} onAddTask={handleAddTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}
