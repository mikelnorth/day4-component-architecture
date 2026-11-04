// WE DO: this app stores six things in state, and only two of them need to be.
//
//   For each one, ask the three questions. If any answer is yes, it is NOT state.
//     Does it stay the same over time?
//     Is it passed in as a prop?
//     Can you calculate it from existing state or props?
//
//   Try it first: Toggle a task. The Done count changes, but the row doesn't cross out. Why?

import { useState } from "react";

const initialTasks = [
  { id: 1, text: "Review Day 3 notes", completed: true },
  { id: 2, text: "Draw the component tree", completed: false },
  { id: 3, text: "Refactor the messy app", completed: false },
];

function TaskRow({ task, onToggle }) {
  const [rowTask] = useState(task);

  return (
    <li>
      <span className={rowTask.completed ? "completed" : ""}>{rowTask.text}</span>
      <button onClick={() => onToggle(rowTask.id)}>Toggle</button>
    </li>
  );
}

export default function App() {
  const [title] = useState("Task Manager");
  const [tasks, setTasks] = useState(initialTasks);
  const [taskCount, setTaskCount] = useState(initialTasks.length);
  const [completedTasks, setCompletedTasks] = useState(
    initialTasks.filter((task) => task.completed)
  );
  const [text, setText] = useState("");

  function handleToggle(id) {
    const updated = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updated);
    setCompletedTasks(updated.filter((task) => task.completed));
  }

  function handleAdd() {
    if (!text.trim()) return;
    setTasks([...tasks, { id: crypto.randomUUID(), text, completed: false }]);
    setTaskCount(taskCount + 1);
    setText("");
  }

  return (
    <div>
      <h1>{title}</h1>
      <p>Total: {taskCount} · Done: {completedTasks.length}</p>
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
