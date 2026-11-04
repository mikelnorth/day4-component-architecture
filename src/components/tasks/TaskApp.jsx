import { useState } from 'react'
import Button from '../kit/Button.jsx'
import Input from '../kit/Input.jsx'
import ListItem from '../kit/ListItem.jsx'
import { makeTasks } from '../../data/tasks.js'

function TaskHeader({ total, completed }) {
  return (
    <header className="flex items-baseline justify-between">
      <h3 className="text-lg font-semibold text-slate-900">Task Manager</h3>
      <p className="text-xs text-slate-500">{completed} of {total} done</p>
    </header>
  )
}

function TaskInput({ onAddTask }) {
  // Only this component needs the draft text, so the state stays here.
  const [text, setText] = useState('')

  function handleAdd() {
    if (!text.trim()) return
    onAddTask(text)
    setText('')
  }

  return (
    <div className="flex gap-2">
      <Input value={text} onChange={setText} placeholder="Add a task" />
      <Button variant="primary" onClick={handleAdd}>Add</Button>
    </div>
  )
}

function TaskItem({ task, onToggleTask, onDeleteTask }) {
  return (
    <ListItem
      actions={
        <>
          <Button onClick={() => onToggleTask(task.id)}>Toggle</Button>
          <Button variant="danger" onClick={() => onDeleteTask(task.id)}>Delete</Button>
        </>
      }
    >
      <span className={task.completed ? 'line-through text-slate-400' : ''}>{task.text}</span>
    </ListItem>
  )
}

function TaskList({ tasks, onToggleTask, onDeleteTask }) {
  if (tasks.length === 0) return <p className="text-sm text-slate-500">No tasks yet.</p>
  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggleTask={onToggleTask} onDeleteTask={onDeleteTask} />
      ))}
    </ul>
  )
}

// The finished target. In the student solution each component has its own file.
export default function TaskApp() {
  const [tasks, setTasks] = useState(makeTasks)
  const completedCount = tasks.filter((task) => task.completed).length

  function handleAddTask(text) {
    setTasks([...tasks, { id: crypto.randomUUID(), text, completed: false }])
  }

  function handleToggleTask(id) {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
  }

  function handleDeleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="space-y-3">
      <TaskHeader total={tasks.length} completed={completedCount} />
      <TaskInput onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onToggleTask={handleToggleTask} onDeleteTask={handleDeleteTask} />
    </div>
  )
}
