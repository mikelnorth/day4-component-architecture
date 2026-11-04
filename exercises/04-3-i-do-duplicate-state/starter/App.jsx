// I DO: delete "Review Day 3 notes", the completed task. The count now says
// a task is done that no longer exists.
//
//   Every handler has to remember every count, and handleDelete forgot one.
//   Live fix: delete total and done from state, and calculate them from tasks.

import { useState } from "react";

const initialTasks = [
  { id: 1, text: "Review Day 3 notes", completed: true },
  { id: 2, text: "Draw the component tree", completed: false },
  { id: 3, text: "Refactor the messy app", completed: false },
];

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [total, setTotal] = useState(3);
  const [done, setDone] = useState(1);

  function handleToggle(task) {
    setDone(task.completed ? done - 1 : done + 1);
    setTasks(
      tasks.map((t) => (t.id === task.id ? { ...t, completed: !t.completed } : t))
    );
  }

  function handleDelete(task) {
    setTotal(total - 1);
    setTasks(tasks.filter((t) => t.id !== task.id));
  }

  return (
    <div>
      <h1>{done} of {total} done</h1>
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
