// SOLUTION: click Delete with the console open. Data down, events up.
//
//   Events up:  1 Button  2 TaskItem  (TaskList logs nothing: it only passes the function along)  3 App
//   Data down:  4 App renders  5 TaskList renders  6 TaskItem renders, one fewer of them
//
//   Render logs appear twice in development. That is StrictMode, not a bug.

import { useState } from "react";
import Card from "./components/Card.jsx";
import Header from "./components/Header.jsx";
import TaskInput from "./components/TaskInput.jsx";
import TaskList from "./components/TaskList.jsx";

const initialTasks = [
  { id: 1, text: "Review Day 3 notes", completed: true },
  { id: 2, text: "Draw the component tree", completed: false },
  { id: 3, text: "Refactor the messy app", completed: false },
];

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);

  function handleAddTask(text) {
    setTasks([
      ...tasks,
      { id: crypto.randomUUID(), text, completed: false },
    ]);
  }

  function handleToggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function handleDeleteTask(id) {
    console.log("3 App: handleDeleteTask changes the state");
    setTasks(tasks.filter((task) => task.id !== id));
  }

  console.log("4 App renders");

  return (
    <Card>
      <Header total={tasks.length} />
      <TaskInput onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onToggleTask={handleToggleTask}
        onDeleteTask={handleDeleteTask}
      />
    </Card>
  );
}
