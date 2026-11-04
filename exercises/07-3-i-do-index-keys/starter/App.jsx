// I DO: open the Notes on the first task, then delete the first task. Which row is open now?
//
//   Local state follows the key. With key={index}, the next task moves into position 0
//   and inherits the open notes. Live fix: key={task.id}.

import { useState } from "react";

const starterTasks = [
  { id: 1, text: "Review Day 3 notes" },
  { id: 2, text: "Draw the component tree" },
  { id: 3, text: "Refactor the messy app" },
];

// Each row has its own state: are the notes showing?
function TaskRow({ task, onDelete }) {
  const [showNotes, setShowNotes] = useState(false);

  return (
    <li>
      <span>
        {task.text}
        {showNotes && <small> Notes for: {task.text}</small>}
      </span>
      <span>
        <button onClick={() => setShowNotes(!showNotes)}>
          {showNotes ? "Hide" : "Notes"}
        </button>
        <button onClick={onDelete}>Delete</button>
      </span>
    </li>
  );
}

export default function App() {
  const [tasks, setTasks] = useState(starterTasks);

  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <TaskRow
            key={index}
            task={task}
            onDelete={() => setTasks(tasks.filter((t) => t.id !== task.id))}
          />
        ))}
      </ul>
      <button onClick={() => setTasks(starterTasks)}>Restore tasks</button>
    </div>
  );
}
