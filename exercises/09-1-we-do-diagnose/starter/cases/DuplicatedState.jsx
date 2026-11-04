// WE DO: click Delete on the completed task. What's wrong? Fix it.

import { useState } from "react";

const initialTasks = [
  { id: 1, text: "Review notes", completed: true },
  { id: 2, text: "Draw the tree", completed: false },
];

export default function DuplicatedState() {
  const [tasks, setTasks] = useState(initialTasks);
  const [completedTasks] = useState(initialTasks.filter((task) => task.completed));
  const [completedCount] = useState(completedTasks.length);

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
