import { useState } from "react";
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
  // Still here on purpose. A refactor keeps the behavior, bug included.
  // Lesson 4 fix: delete this state and pass total={tasks.length}.
  const [taskCount, setTaskCount] = useState(3);

  function handleAddTask(text) {
    setTasks([
      ...tasks,
      { id: crypto.randomUUID(), text, completed: false },
    ]);
    setTaskCount(taskCount + 1);
  }

  function handleToggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function handleDeleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div>
      <Header total={taskCount} />
      <TaskInput onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onToggleTask={handleToggleTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}
