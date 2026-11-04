// SOLUTION: only change objects you just created. starterTasks is never touched, so Reset works.

import { useState } from "react";

const starterTasks = [
  { id: 1, text: "Review Day 3 notes", completed: true },
  { id: 2, text: "Draw the component tree", completed: false },
  { id: 3, text: "Refactor the messy app", completed: false },
];

export default function App() {
  const [tasks, setTasks] = useState(starterTasks);

  function handleToggle(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span className={task.completed ? "completed" : ""}>{task.text}</span>
            <button onClick={() => handleToggle(task.id)}>Toggle</button>
          </li>
        ))}
      </ul>
      <button onClick={() => setTasks(starterTasks)}>Reset</button>
    </div>
  );
}
