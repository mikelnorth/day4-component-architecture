// Code shown on the projector. Matches student-projects/01-messy-task-app and 02-task-app-refactored.
export const messyAppCode = `import { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Review Day 3 notes", completed: true },
    { id: 2, text: "Draw the component tree", completed: false },
    { id: 3, text: "Refactor the messy app", completed: false },
  ]);
  const [taskCount, setTaskCount] = useState(3);
  const [text, setText] = useState("");

  return (
    <div>
      <h1>Task Manager</h1>
      <p>Total: {taskCount}</p>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a task"
      />
      <button
        onClick={() => {
          if (!text.trim()) return;
          setTasks([
            ...tasks,
            { id: crypto.randomUUID(), text, completed: false },
          ]);
          setTaskCount(taskCount + 1);
          setText("");
        }}
      >
        Add
      </button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.text}
            </span>
            <button
              onClick={() =>
                setTasks(
                  tasks.map((t) =>
                    t.id === task.id
                      ? { ...t, completed: !t.completed }
                      : t
                  )
                )
              }
            >
              Toggle
            </button>
            <button
              onClick={() =>
                setTasks(tasks.filter((t) => t.id !== task.id))
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}`

export const refactorSteps = [
  {
    title: 'Header: start with the easiest one',
    mode: 'I do',
    tree: `App                tasks, taskCount, text
 ├ Header          ← total   ✅ new
 ├ <input> <button>
 └ <ul> ...`,
    note: 'No state and no handlers, so nothing can break. Cut the JSX, paste it into a function, and replace what is missing with props. Check the browser. Same app.',
    label: 'components/Header.jsx',
    code: `export default function Header({ total }) {
  return (
    <header>
      <h1>Task Manager</h1>
      <p>Total: {total}</p>
    </header>
  );
}

// In App.jsx
<Header total={taskCount} />`,
  },
  {
    title: 'TaskItem: the leaf, with callback props',
    mode: 'I do',
    tree: `App                tasks, taskCount, text
 ├ Header
 ├ <input> <button>
 └ <ul>
     └ TaskItem    ← task, onToggleTask, onDeleteTask   ✅ new`,
    note: 'The buttons used setTasks directly. TaskItem cannot see that, so App keeps the logic in named handlers and passes them down. Ask: what happens if key goes inside TaskItem? It stays on the element in the map.',
    label: 'components/TaskItem.jsx',
    code: `export default function TaskItem({ task, onToggleTask, onDeleteTask }) {
  return (
    <li>
      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
        }}
      >
        {task.text}
      </span>
      <button onClick={() => onToggleTask(task.id)}>Toggle</button>
      <button onClick={() => onDeleteTask(task.id)}>Delete</button>
    </li>
  );
}

// In App.jsx
function handleToggleTask(id) {
  setTasks(
    tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
  );
}

function handleDeleteTask(id) {
  setTasks(tasks.filter((t) => t.id !== id));
}`,
  },
  {
    title: 'TaskList: maps and passes through',
    mode: 'You do',
    tree: `App                tasks, taskCount, text
 ├ Header
 ├ <input> <button>
 └ TaskList        ← tasks, onToggleTask, onDeleteTask   ✅ new
     └ TaskItem`,
    note: 'Students write this one. TaskList has one job: turn an array into rows. It has no state.',
    label: 'components/TaskList.jsx',
    code: `import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onToggleTask, onDeleteTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleTask={onToggleTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </ul>
  );
}`,
  },
  {
    title: 'TaskInput: state that moves DOWN',
    mode: 'You do',
    tree: `App                tasks, taskCount
 ├ Header
 ├ TaskInput       text (own state), ← onAddTask   ✅ new
 └ TaskList
     └ TaskItem`,
    note: 'The surprise of the exercise. Only the input cares about half-typed text, so text moves down out of App. State does not always go up. It goes to whoever needs it.',
    label: 'components/TaskInput.jsx',
    code: `import { useState } from "react";

export default function TaskInput({ onAddTask }) {
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
}`,
  },
  {
    title: 'App: what is left is the point',
    mode: 'We do',
    tree: `App                tasks, taskCount
 ├ Header          ← total
 ├ TaskInput       ← onAddTask
 └ TaskList        ← tasks, onToggleTask, onDeleteTask
     └ TaskItem    ← task, onToggleTask, onDeleteTask`,
    note: 'App now reads like a table of contents: the data, the ways to change it, and the layout. Delete a task. The Total bug is still there, and that is correct. A refactor changes structure, not behavior. We fix it next.',
    label: 'App.jsx',
    code: `export default function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [taskCount, setTaskCount] = useState(3);

  function handleAddTask(text) {
    setTasks([
      ...tasks,
      { id: crypto.randomUUID(), text, completed: false },
    ]);
    setTaskCount(taskCount + 1);
  }

  function handleToggleTask(id) { /* map */ }
  function handleDeleteTask(id) { /* filter */ }

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
}`,
  },
]
