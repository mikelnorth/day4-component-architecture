// I DO: toggle a few tasks, then click Reset. Reset doesn't work. Refresh to run it again.
//
//   [...tasks] copies the array, not the objects, so toggling changed starterTasks itself.
//   Live fix: use map, and make a new object for the changed task.

import { useState } from "react";

const starterTasks = [
  { id: 1, text: "Review Day 3 notes", completed: true },
  { id: 2, text: "Draw the component tree", completed: false },
  { id: 3, text: "Refactor the messy app", completed: false },
];

export default function App() {
  const [tasks, setTasks] = useState(starterTasks);

  function handleToggle(index) {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  }

  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <li key={task.id}>
            <span className={task.completed ? "completed" : ""}>{task.text}</span>
            <button onClick={() => handleToggle(index)}>Toggle</button>
          </li>
        ))}
      </ul>
      <button onClick={() => setTasks([...starterTasks])}>Reset</button>
    </div>
  );
}
