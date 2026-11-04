import { useState } from 'react'
import DemoSurface from '../../../components/ui/DemoSurface.jsx'
import Button from '../../../components/kit/Button.jsx'

const starter = ['Read the docs']

// Anti-pattern: each sibling keeps its own copy of the list.
function BrokenInput() {
  const [tasks, setTasks] = useState(starter)
  return (
    <div className="rounded border border-rose-200 p-2 text-xs space-y-2">
      <p className="font-mono text-rose-700">Input: tasks has {tasks.length}</p>
      <Button onClick={() => setTasks([...tasks, `Task ${tasks.length + 1}`])}>Add a task</Button>
    </div>
  )
}

function BrokenList() {
  const [tasks] = useState(starter)
  return (
    <div className="rounded border border-rose-200 p-2 text-xs">
      <p className="font-mono text-rose-700">List: tasks has {tasks.length}</p>
      <ul className="list-disc list-inside mt-1">{tasks.map((t) => <li key={t}>{t}</li>)}</ul>
    </div>
  )
}

function SharedInput({ tasks, onAddTask }) {
  return (
    <div className="rounded border border-emerald-200 p-2 text-xs space-y-2">
      <p className="font-mono text-emerald-700">Input: reads {tasks.length} from a prop</p>
      <Button onClick={() => onAddTask(`Task ${tasks.length + 1}`)}>Add a task</Button>
    </div>
  )
}

function SharedList({ tasks }) {
  return (
    <div className="rounded border border-emerald-200 p-2 text-xs">
      <p className="font-mono text-emerald-700">List: reads {tasks.length} from a prop</p>
      <ul className="list-disc list-inside mt-1">{tasks.map((t) => <li key={t}>{t}</li>)}</ul>
    </div>
  )
}

function SharedParent() {
  const [tasks, setTasks] = useState(starter)
  return (
    <div className="grid gap-2 sm:grid-cols-2">
      <SharedInput tasks={tasks} onAddTask={(t) => setTasks([...tasks, t])} />
      <SharedList tasks={tasks} />
    </div>
  )
}

export default function OutOfSyncDemo() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <DemoSurface title="Anti-pattern: state in each sibling">
        <div className="grid gap-2 sm:grid-cols-2">
          <BrokenInput />
          <BrokenList />
        </div>
      </DemoSurface>
      <DemoSurface title="State in the common parent">
        <SharedParent />
      </DemoSurface>
    </div>
  )
}
