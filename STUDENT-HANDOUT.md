# React Day 4 — Component Architecture Cheat Sheet

**One component, one job.** A good app breaks its UI into focused components, gives each
piece of state one owner, and calculates everything else.

## Plan before you code (Thinking in React)

1. Break the UI into a component tree
2. Build a static version, with no state
3. Find the minimal state
4. Decide who owns it
5. Add events that flow back up

```
Task App
 ├ Header
 ├ TaskInput
 └ TaskList
     └ TaskItem
```

Ask: What repeats? What has its own logic? What should be reusable?

## Is it state?

It is **not** state if any of these is yes:

- Does it stay the same over time?
- Is it passed in as a prop?
- Can you calculate it from existing state or props?

## Where does state live?

1. List every component that renders from it
2. Find their closest common parent
3. Put the state there

Only one component uses it? Keep it in that component. Draft text in `TaskInput` is fine.

## Don't store what you can calculate

```jsx
// Bad: a second copy that can go out of sync
const [tasks, setTasks] = useState([]);
const [taskCount, setTaskCount] = useState(0);

// Good
const [tasks, setTasks] = useState([]);
const taskCount = tasks.length;
const completed = tasks.filter((task) => task.completed);
```

## Data down, events up

```jsx
// Parent: owns the state and the logic
function App() {
  const [tasks, setTasks] = useState(initialTasks);

  function handleDeleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />;
}

// Child: receives data, reports events
function TaskItem({ task, onDeleteTask }) {
  return (
    <li>
      {task.text}
      <button onClick={() => onDeleteTask(task.id)}>Delete</button>
    </li>
  );
}
```

Names: `handleSomething` for the function, `onSomething` for the prop.

## Reusable components

Three signs: **props** carry what differs, **composition** lets it wrap content, and
**independence** means it doesn't know about your app.

```jsx
function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}

function Card({ title, children }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      {children}
    </div>
  );
}

<Card title="Tasks">
  <Button onClick={addTask}>Add</Button>
</Card>
```

`label={...}` works for plain text. `children` also lets you pass any JSX.

| | UI (presentational) | Logic (container) |
|---|---|---|
| Job | Display things | Own state, pass data |
| Reuse | Often | Usually app-specific |
| Examples | Button, Card | App |

This is a lens, not a law. Plenty of good components are both.

## File structure

```
src/
 ├ components/
 │ ├ Button.jsx
 │ ├ Header.jsx
 │ ├ TaskInput.jsx
 │ ├ TaskItem.jsx
 │ └ TaskList.jsx
 ├ App.jsx
 └ main.jsx
```

```jsx
export default function Button() {}   // import Button from "./Button";
export function Button() {}           // import { Button } from "./Button";
```

## Two bugs that hide

```jsx
// Mutation: [...tasks] copies the array, not the objects in it
const updated = [...tasks];
updated[index].completed = true;      // ❌ changes the existing object

setTasks(tasks.map((task) =>          // ✅ makes a new object
  task.id === id ? { ...task, completed: true } : task
));

// Keys: identity should not depend on position
<TaskItem key={index} />              // ❌ state can stick to the wrong row
<TaskItem key={task.id} />            // ✅
```

Also: **never define a component inside another component.** Its state resets every render.

## Debugging architecture

- Does this component need state?
- Can this be reused?
- Who owns this data?

## Common mistakes

- Too many components: wrapping one `<span>` with no reason
- Too few components: one giant `App`
- State in the wrong place: siblings with their own copies
- Duplicated state: storing what you can calculate
- Calling a prop during render: `onClick={onDelete(id)}`
- Copying a prop into `useState`, then wondering why it doesn't update

## Using AI well

| Stage | Ask it to | You still have to |
|---|---|---|
| Plan | Question your tree and state plan | Make the plan first |
| Debug | Explain an error or bug in plain English | Explain it back in your own words |
| Review | Check for specific problems | Prove the issue exists before changing code |

If you can't explain it, don't commit it. Be suspicious of `useEffect` used to sync state.

## Homework

- Finish the rebuild challenge, with your code closed
- [Choosing the State Structure](https://react.dev/learn/choosing-the-state-structure#challenges): Fix the disappearing selection
- [Passing Props to a Component](https://react.dev/learn/passing-props-to-a-component#challenges): Extract a component
- [Rendering Lists](https://react.dev/learn/rendering-lists#challenges): Extracting a list item component
- [Keeping Components Pure](https://react.dev/learn/keeping-components-pure#challenges): Fix a broken profile
- [Updating Arrays in State](https://react.dev/learn/updating-arrays-in-state#challenges): Fix the mutations using non-mutative methods
- Read: [Thinking in React](https://react.dev/learn/thinking-in-react)
- Optional: [Tutorial: Tic-Tac-Toe](https://react.dev/learn/tutorial-tic-tac-toe)

**Next class:** Project Day. Build the Task Manager App.
