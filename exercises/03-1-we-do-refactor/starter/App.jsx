import { useState } from "react";

// It works. It is also one giant component. Your job in Exercise 1:
//
//   App
//    ├ Header
//    ├ TaskInput
//    └ TaskList
//        └ TaskItem
//
// Keep the behavior the same, including the bug you find. We fix it after the refactor.
export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Review Day 3 notes", completed: true },
    { id: 2, text: "Draw the component tree", completed: false },
    { id: 3, text: "Refactor the messy app", completed: false },
  ]);
  const [taskCount, setTaskCount] = useState(3);
  const [text, setText] = useState("");

  return (
    <div>
      <h1>Task Manager</h1>
      <p>Total: {taskCount}</p>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a task"
      />
      <button
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

      <ul>
        {tasks.map((task) => (
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
