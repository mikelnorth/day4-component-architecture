import { useState } from "react";
import Button from "./Button.jsx";

function TaskInput({ tasks, setTasks }) {
  const [text, setText] = useState("");

  function addTask() {
    if (!text.trim()) return;
    // REVIEW 4: a new task has no id, which is why everything else falls back on the index.
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
