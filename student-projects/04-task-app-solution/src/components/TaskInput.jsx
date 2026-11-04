import { useState } from "react";
import Button from "./Button.jsx";
import Input from "./Input.jsx";

export default function TaskInput({ onAddTask }) {
  const [text, setText] = useState("");

  function handleAdd() {
    if (!text.trim()) return;
    onAddTask(text);
    setText("");
  }

  return (
    <div className="row">
      <Input value={text} onChange={setText} placeholder="Add a task" />
      <Button onClick={handleAdd}>Add</Button>
    </div>
  );
}
