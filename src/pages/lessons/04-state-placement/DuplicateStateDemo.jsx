import { useState } from 'react'
import DemoSurface from '../../../components/ui/DemoSurface.jsx'
import Button from '../../../components/kit/Button.jsx'
import ListItem from '../../../components/kit/ListItem.jsx'
import { makeTasks } from '../../../data/tasks.js'

function Rows({ tasks, onToggle, onDelete }) {
  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <ListItem
          key={task.id}
          actions={
            <>
              <Button onClick={() => onToggle(task)}>Toggle</Button>
              <Button variant="danger" onClick={() => onDelete(task)}>Delete</Button>
            </>
          }
        >
          <span className={task.completed ? 'line-through text-slate-400' : ''}>{task.text}</span>
        </ListItem>
      ))}
    </ul>
  )
}

function BrokenCounts() {
  const [tasks, setTasks] = useState(makeTasks)
  const [total, setTotal] = useState(3)
  const [done, setDone] = useState(1)

  function handleToggle(task) {
    setDone(task.completed ? done - 1 : done + 1)
    setTasks(tasks.map((t) => (t.id === task.id ? { ...t, completed: !t.completed } : t)))
  }

  // Every handler has to remember every count. This one forgets `done`.
  function handleDelete(task) {
    setTotal(total - 1)
    setTasks(tasks.filter((t) => t.id !== task.id))
  }

  return (
    <DemoSurface title="Counts stored in state">
      <div className="space-y-3">
        <p className="font-mono text-sm font-semibold text-rose-700">{done} of {total} done</p>
        <Rows tasks={tasks} onToggle={handleToggle} onDelete={handleDelete} />
      </div>
    </DemoSurface>
  )
}

function CalculatedCounts() {
  const [tasks, setTasks] = useState(makeTasks)
  const done = tasks.filter((task) => task.completed).length

  function handleToggle(task) {
    setTasks(tasks.map((t) => (t.id === task.id ? { ...t, completed: !t.completed } : t)))
  }

  function handleDelete(task) {
    setTasks(tasks.filter((t) => t.id !== task.id))
  }

  return (
    <DemoSurface title="Counts calculated while rendering">
      <div className="space-y-3">
        <p className="font-mono text-sm font-semibold text-emerald-700">{done} of {tasks.length} done</p>
        <Rows tasks={tasks} onToggle={handleToggle} onDelete={handleDelete} />
      </div>
    </DemoSurface>
  )
}

export default function DuplicateStateDemo() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <BrokenCounts />
      <CalculatedCounts />
    </div>
  )
}
