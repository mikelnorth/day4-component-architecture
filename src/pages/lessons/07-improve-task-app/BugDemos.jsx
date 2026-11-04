import { useState } from 'react'
import DemoSurface from '../../../components/ui/DemoSurface.jsx'
import Button from '../../../components/kit/Button.jsx'
import ListItem from '../../../components/kit/ListItem.jsx'
import { makeTasks } from '../../../data/tasks.js'

// Each row has its own state: are the notes showing?
function RowWithNotes({ task, onDelete }) {
  const [showNotes, setShowNotes] = useState(false)
  return (
    <ListItem
      actions={
        <>
          <Button onClick={() => setShowNotes(!showNotes)}>{showNotes ? 'Hide' : 'Notes'}</Button>
          <Button variant="danger" onClick={onDelete}>Delete</Button>
        </>
      }
    >
      <p>{task.text}</p>
      {showNotes && <p className="text-xs text-amber-700">Notes for: {task.text}</p>}
    </ListItem>
  )
}

function KeyedList({ title, keyFor }) {
  const [tasks, setTasks] = useState(makeTasks)
  return (
    <DemoSurface title={title}>
      <ul className="space-y-2">
        {tasks.map((task, index) => (
          <RowWithNotes
            key={keyFor(task, index)}
            task={task}
            onDelete={() => setTasks(tasks.filter((t) => t.id !== task.id))}
          />
        ))}
      </ul>
      <div className="mt-3">
        <Button onClick={() => setTasks(makeTasks())}>Restore tasks</Button>
      </div>
    </DemoSurface>
  )
}

export function IndexKeyDemo() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <KeyedList title="key={index}" keyFor={(_, index) => index} />
      <KeyedList title="key={task.id}" keyFor={(task) => task.id} />
    </div>
  )
}

// These live outside the components on purpose, like starter data in many apps.
const mutatedStart = makeTasks()
const copiedStart = makeTasks()

function TaskRows({ tasks, onToggle }) {
  return (
    <ul className="space-y-2">
      {tasks.map((task, index) => (
        <ListItem key={task.id} actions={<Button onClick={() => onToggle(task, index)}>Toggle</Button>}>
          <span className={task.completed ? 'line-through text-slate-400' : ''}>{task.text}</span>
        </ListItem>
      ))}
    </ul>
  )
}

function MutatingList() {
  const [tasks, setTasks] = useState(mutatedStart)

  function handleToggle(_, index) {
    const updated = [...tasks]
    updated[index].completed = !updated[index].completed
    setTasks(updated)
  }

  return (
    <DemoSurface title="updated[index].completed = ...">
      <TaskRows tasks={tasks} onToggle={handleToggle} />
      <div className="mt-3">
        <Button onClick={() => setTasks([...mutatedStart])}>Reset to starter data</Button>
      </div>
    </DemoSurface>
  )
}

function CopyingList() {
  const [tasks, setTasks] = useState(copiedStart)

  function handleToggle(task) {
    setTasks(tasks.map((t) => (t.id === task.id ? { ...t, completed: !t.completed } : t)))
  }

  return (
    <DemoSurface title="map + { ...task, completed }">
      <TaskRows tasks={tasks} onToggle={handleToggle} />
      <div className="mt-3">
        <Button onClick={() => setTasks([...copiedStart])}>Reset to starter data</Button>
      </div>
    </DemoSurface>
  )
}

export function MutationDemo() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <MutatingList />
      <CopyingList />
    </div>
  )
}
