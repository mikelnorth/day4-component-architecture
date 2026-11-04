// SOLUTION: the audit answers.
//
//   1. App owns tasks. It calls useState, and everyone else gets it as a prop.
//   2. TaskList: toggle and delete live there, and TaskInput builds new tasks. App owns the
//      data but none of the rules for changing it. We move them to App in Exercise 3.
//   3. None here, because no count is shown yet. If you add one, calculate it.
//   4. Very little. App already has tasks, so pass tasks.length. No new state. See TaskCount.

import { useState } from "react";
import TaskInput from "./components/TaskInput.jsx";
import TaskList from "./components/TaskList.jsx";
import Header from "./components/Header.jsx";

function TaskCount({ count }) {
  return <p>Tasks: {count}</p>;
}

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div>
      <Header />
      <TaskCount count={tasks.length} />
      <TaskInput tasks={tasks} setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
