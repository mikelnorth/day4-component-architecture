// SOLUTION: one good answer. There is no single right tree.
//
//   App
//    ├ Header
//    ├ TaskInput
//    └ TaskList
//        └ TaskItem

import { useState } from "react";

// Box is a teaching helper that draws a labeled outline. We learn children on page 5.
function Box({ name, children }) {
  return (
    <div style={{ outline: "2px dashed #4338ca", padding: "0.5rem", margin: "0.5rem 0", flex: 1 }}>
      <small style={{ color: "#4338ca", fontWeight: 700 }}>{name}</small>
      <div>{children}</div>
    </div>
  );
}

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Review Day 3 notes", completed: true },
    { id: 2, text: "Draw the component tree", completed: false },
    { id: 3, text: "Refactor the messy app", completed: false },
  ]);
  const [text, setText] = useState("");

  return (
    <Box name="App">
      <Box name="Header">
        <h1>Task Manager</h1>
        <p>Total: {tasks.length}</p>
      </Box>

      <Box name="TaskInput">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a task"
        />
        <button
          onClick={() => {
            if (!text.trim()) return;
            setTasks([...tasks, { id: crypto.randomUUID(), text, completed: false }]);
            setText("");
          }}
        >
          Add
        </button>
      </Box>

      <Box name="TaskList">
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <Box name="TaskItem">
                <span>{task.completed ? <s>{task.text}</s> : task.text}</span>{" "}
                <span>
                  <button
                    onClick={() =>
                      setTasks(tasks.map((t) => (t.id === task.id ? { ...t, completed: !t.completed } : t)))
                    }
                  >
                    Toggle
                  </button>
                  <button onClick={() => setTasks(tasks.filter((t) => t.id !== task.id))}>Delete</button>
                </span>
              </Box>
            </li>
          ))}
        </ul>
      </Box>
    </Box>
  );
}
