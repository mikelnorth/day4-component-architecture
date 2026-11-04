// DIAGNOSIS: duplicated state. Only tasks is real. The other two can be calculated.

import { useState } from "react";

const initialTasks = [
  { id: 1, text: "Review notes", completed: true },
  { id: 2, text: "Draw the tree", completed: false },
];

export default function DuplicatedState() {
  const [tasks, setTasks] = useState(initialTasks);
  const completedCount = tasks.filter((task) => task.completed).length;

  return (
    <div>
      <strong>{completedCount} completed</strong>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span className={task.completed ? "completed" : ""}>{task.text}</span>
            <button onClick={() => setTasks(tasks.filter((t) => t.id !== task.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
