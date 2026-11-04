// WE DO: every piece of state below can be in a better place. Vote, then move it.
//
//   For each one, list who uses it and find their closest common parent.
//
//   tasks      Who uses it?          Owner:
//   text       Who uses it?          Owner:
//   openIds    Who uses it?          Owner:
//   isEditing  Who uses it?          Owner:
//
//   Goal: Header shows the task being edited, and only one task can be edited at a time.

import { useState } from "react";

const initialTasks = [
  { id: 1, text: "Review Day 3 notes" },
  { id: 2, text: "Draw the component tree" },
  { id: 3, text: "Refactor the messy app" },
];

function Header({ total }) {
  return (
    <header>
      <h1>Task Manager</h1>
      <p>Total: {total}</p>
      <p>Editing: nothing (how would Header know?)</p>
    </header>
  );
}

function TaskInput({ text, onChangeText, onAdd }) {
  return (
    <div className="row">
      <input
        value={text}
        onChange={(e) => onChangeText(e.target.value)}
        placeholder="Add a task"
      />
      <button onClick={onAdd}>Add</button>
    </div>
  );
}

function TaskItem({ task, isOpen, onToggleOpen }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <li>
      <span>
        {task.text}
        {isEditing && " (editing)"}
        {isOpen && <small> Notes for this task</small>}
      </span>
      <span>
        <button onClick={onToggleOpen}>{isOpen ? "Hide" : "Notes"}</button>
        <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
      </span>
    </li>
  );
}

function TaskList({ tasks, openIds, onToggleOpen }) {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          isOpen={openIds.includes(task.id)}
          onToggleOpen={() => onToggleOpen(task.id)}
        />
      ))}
    </ul>
  );
}

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [text, setText] = useState("");
  const [openIds, setOpenIds] = useState([]);

  function handleAdd() {
    if (!text.trim()) return;
    setTasks([...tasks, { id: crypto.randomUUID(), text }]);
    setText("");
  }

  function handleToggleOpen(id) {
    setOpenIds(
      openIds.includes(id)
        ? openIds.filter((openId) => openId !== id)
        : [...openIds, id]
    );
  }

  return (
    <div>
      <Header total={tasks.length} />
      <TaskInput text={text} onChangeText={setText} onAdd={handleAdd} />
      <TaskList tasks={tasks} openIds={openIds} onToggleOpen={handleToggleOpen} />
    </div>
  );
}
