// SOLUTION: one source of truth. Counts are calculated on every render, so they can't drift.
// Don't store what you can calculate. Less code, and the bug is gone.

import { useState } from "react";

const initialTasks = [
  { id: 1, text: "Review Day 3 notes", completed: true },
  { id: 2, text: "Draw the component tree", completed: false },
  { id: 3, text: "Refactor the messy app", completed: false },
];

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const done = tasks.filter((task) => task.completed).length;

  function handleToggle(task) {
    setTasks(
      tasks.map((t) => (t.id === task.id ? { ...t, completed: !t.completed } : t))
    );
  }

  function handleDelete(task) {
    setTasks(tasks.filter((t) => t.id !== task.id));
  }

  return (
    <div>
      <h1>{done} of {tasks.length} done</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span className={task.completed ? "completed" : ""}>{task.text}</span>
            <span>
              <button onClick={() => handleToggle(task)}>Toggle</button>
              <button onClick={() => handleDelete(task)}>Delete</button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
