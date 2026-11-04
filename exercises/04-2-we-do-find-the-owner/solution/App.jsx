// SOLUTION: each piece of state moved to its owner.
//
//   tasks      Header, TaskList            Owner: App (stays)
//   text       TaskInput only              Owner: TaskInput (moved down)
//   isOpen     one TaskItem only           Owner: TaskItem (moved down, now a boolean)
//   editingId  Header, TaskItem            Owner: App (moved up, one id means one edit)
//
// State moves in both directions as an app changes. "This is all part of the process!"

import { useState } from "react";

const initialTasks = [
  { id: 1, text: "Review Day 3 notes" },
  { id: 2, text: "Draw the component tree" },
  { id: 3, text: "Refactor the messy app" },
];

function Header({ total, editingTask }) {
  return (
    <header>
      <h1>Task Manager</h1>
      <p>Total: {total}</p>
      <p>Editing: {editingTask ? editingTask.text : "nothing"}</p>
    </header>
  );
}

function TaskInput({ onAddTask }) {
  const [text, setText] = useState("");

  function handleAdd() {
    if (!text.trim()) return;
    onAddTask(text);
    setText("");
  }

  return (
    <div className="row">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a task"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

function TaskItem({ task, isEditing, onEdit }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <span>
        {task.text}
        {isEditing && " (editing)"}
        {isOpen && <small> Notes for this task</small>}
      </span>
      <span>
        <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? "Hide" : "Notes"}</button>
        <button onClick={onEdit}>Edit</button>
      </span>
    </li>
  );
}

function TaskList({ tasks, editingId, onEdit }) {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          isEditing={task.id === editingId}
          onEdit={() => onEdit(task.id)}
        />
      ))}
    </ul>
  );
}

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [editingId, setEditingId] = useState(null);

  // Calculated from the id, so it can't go stale.
  const editingTask = tasks.find((task) => task.id === editingId);

  function handleAddTask(text) {
    setTasks([...tasks, { id: crypto.randomUUID(), text }]);
  }

  function handleEdit(id) {
    setEditingId(id === editingId ? null : id);
  }

  return (
    <div>
      <Header total={tasks.length} editingTask={editingTask} />
      <TaskInput onAddTask={handleAddTask} />
      <TaskList tasks={tasks} editingId={editingId} onEdit={handleEdit} />
    </div>
  );
}
