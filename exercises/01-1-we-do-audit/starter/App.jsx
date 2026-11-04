// WE DO: audit a Day 3 task app. Add a few tasks, then answer in this comment.
//
//   1. Which component owns tasks?
//   2. Which file has the most logic? Is that the right place?
//   3. Are any counts stored in state instead of calculated?
//   4. If a new sibling needed the task count, what would you have to change?

import { useState } from "react";
import TaskInput from "./components/TaskInput.jsx";
import TaskList from "./components/TaskList.jsx";
import Header from "./components/Header.jsx";

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div>
      <Header />
      <TaskInput tasks={tasks} setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
