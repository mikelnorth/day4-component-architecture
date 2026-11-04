// I DO: click Add a task. The input's count goes up, but the list never changes.
//
//   Each component has its own tasks, so they are two copies, not one shared list.
//   Live fix: move tasks to App, then pass it down with an onAddTask function.

import { useState } from "react";

const starterTasks = ["Read the docs"];

function TaskInput() {
  const [tasks, setTasks] = useState(starterTasks);
  return (
    <div>
      <p>TaskInput: tasks has {tasks.length}</p>
      <button onClick={() => setTasks([...tasks, `Task ${tasks.length + 1}`])}>
        Add a task
      </button>
    </div>
  );
}

function TaskList() {
  const [tasks] = useState(starterTasks);
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
  return (
    <div>
      <TaskInput />
      <TaskList />
    </div>
  );
}
