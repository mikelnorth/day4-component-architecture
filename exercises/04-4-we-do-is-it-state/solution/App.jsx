// SOLUTION: the two real pieces of state are tasks and text.
//
//   title           Never changes        Just write it in the JSX
//   tasks           STATE                Changes, and nothing can calculate it
//   taskCount       Calculate            tasks.length
//   completedTasks  Calculate            tasks.filter(...)
//   text            STATE                Changes as you type
//   rowTask         Prop                 Read it. A copy in state went stale, which was the bug.

import { useState } from "react";

const initialTasks = [
  { id: 1, text: "Review Day 3 notes", completed: true },
  { id: 2, text: "Draw the component tree", completed: false },
  { id: 3, text: "Refactor the messy app", completed: false },
];

function TaskRow({ task, onToggle }) {
  return (
    <li>
      <span className={task.completed ? "completed" : ""}>{task.text}</span>
      <button onClick={() => onToggle(task.id)}>Toggle</button>
    </li>
  );
}

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [text, setText] = useState("");
  const completedTasks = tasks.filter((task) => task.completed);

  function handleToggle(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function handleAdd() {
    if (!text.trim()) return;
    setTasks([...tasks, { id: crypto.randomUUID(), text, completed: false }]);
    setText("");
  }

  return (
    <div>
      <h1>Task Manager</h1>
      <p>Total: {tasks.length} · Done: {completedTasks.length}</p>
      <div className="row">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a task"
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <TaskRow key={task.id} task={task} onToggle={handleToggle} />
        ))}
      </ul>
    </div>
  );
}
