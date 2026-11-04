// SOLUTION: the same app, with its jobs marked. Nothing is fixed yet. That is Exercise 1.
//
// One function does five jobs, so any change means reading past the other four.
// The button title change touched 3 places. A Button component would make it 1.

import { useState } from "react";

export default function App() {
  // JOB 1: hold the data.
  const [tasks, setTasks] = useState([
    { id: 1, text: "Review Day 3 notes", completed: true },
    { id: 2, text: "Draw the component tree", completed: false },
    { id: 3, text: "Refactor the messy app", completed: false },
  ]);
  // BUG: a second copy of the count. Delete never updates it.
  const [taskCount, setTaskCount] = useState(3);
  const [text, setText] = useState("");

  return (
    <div>
      {/* JOB 2: show the header. */}
      <h1>Task Manager</h1>
      <p>Total: {taskCount}</p>

      {/* JOB 3: collect and validate new tasks. */}
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a task"
      />
      <button
        title="Add this task"
        onClick={() => {
          if (!text.trim()) return;
          setTasks([
            ...tasks,
            { id: crypto.randomUUID(), text, completed: false },
          ]);
          setTaskCount(taskCount + 1);
          setText("");
        }}
      >
        Add
      </button>

      {/* JOB 4: render the list. */}
      <ul>
        {tasks.map((task) => (
          /* JOB 5: render one row and its actions. */
          <li key={task.id}>
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.text}
            </span>
            <span>
              <button
                title="Toggle this task"
                onClick={() =>
                  setTasks(
                    tasks.map((t) =>
                      t.id === task.id
                        ? { ...t, completed: !t.completed }
                        : t
                    )
                  )
                }
              >
                Toggle
              </button>
              <button
                title="Delete this task"
                onClick={() =>
                  setTasks(tasks.filter((t) => t.id !== task.id))
                }
              >
                Delete
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
