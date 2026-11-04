import { useState } from "react";
import Button from "./Button.jsx";

function TaskInput({ tasks, setTasks }) {
  const [text, setText] = useState("");

  function addTask() {
    if (!text.trim()) return;
    setTasks([...tasks, { text, completed: false }]);
    setText("");
  }

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a task"
      />
      <Button label="Add" onClick={addTask} />
    </div>
  );
}

export default TaskInput;
