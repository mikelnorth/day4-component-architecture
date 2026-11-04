import { useState } from "react";

export default function TaskInput({ onAddTask }) {
  // Nothing else needs the half-typed text, so this state moved DOWN from App.
  const [text, setText] = useState("");

  function handleAdd() {
    if (!text.trim()) return;
    onAddTask(text);
    setText("");
  }

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a task"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
