import { useState } from 'react'
import { Boundary, OutlineProvider, OutlineToggle } from '../../../components/ui/boundaries.jsx'
import DemoSurface from '../../../components/ui/DemoSurface.jsx'
import Button from '../../../components/kit/Button.jsx'
import { makeTasks } from '../../../data/tasks.js'

// The messy app, live. The boundaries toggle draws the components it SHOULD have.
// The count is deliberately stored in state and deliberately not updated on delete.
export default function MessyTaskDemo() {
  const [tasks, setTasks] = useState(makeTasks)
  const [taskCount, setTaskCount] = useState(3)
  const [text, setText] = useState('')

  function handleAdd() {
    if (!text.trim()) return
    setTasks([...tasks, { id: crypto.randomUUID(), text, completed: false }])
    setTaskCount(taskCount + 1)
    setText('')
  }

  return (
    <OutlineProvider>
      <DemoSurface title="The app, running" actions={<OutlineToggle />}>
        <Boundary name="App" color="violet" className="space-y-5 p-1">
          <Boundary name="Header" color="sky">
            <h3 className="text-lg font-semibold text-slate-900">Task Manager</h3>
            <p className="text-xs text-slate-500">Total: {taskCount}</p>
          </Boundary>
          <Boundary name="TaskInput" color="amber" className="flex gap-2">
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Add a task"
              className="flex-1 min-w-0 rounded-md border border-slate-300 px-3 py-1.5 text-sm"
            />
            <Button variant="primary" onClick={handleAdd}>Add</Button>
          </Boundary>
          <Boundary name="TaskList" color="emerald" className="space-y-4 pt-1">
            {tasks.map((task) => (
              <Boundary key={task.id} name="TaskItem" color="rose" className="flex items-center justify-between gap-2 text-sm">
                <span className={task.completed ? 'line-through text-slate-400' : 'text-slate-800'}>{task.text}</span>
                <span className="flex gap-2 shrink-0">
                  <Button
                    onClick={() =>
                      setTasks(tasks.map((t) => (t.id === task.id ? { ...t, completed: !t.completed } : t)))
                    }
                  >
                    Toggle
                  </Button>
                  <Button variant="danger" onClick={() => setTasks(tasks.filter((t) => t.id !== task.id))}>
                    Delete
                  </Button>
                </span>
              </Boundary>
            ))}
          </Boundary>
        </Boundary>
      </DemoSurface>
    </OutlineProvider>
  )
}
