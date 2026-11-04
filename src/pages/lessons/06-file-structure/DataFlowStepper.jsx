import { useState } from 'react'
import Button from '../../../components/kit/Button.jsx'

const levels = ['App', 'TaskList', 'TaskItem', 'Button']

const steps = [
  { active: 'Button', direction: 'up', text: 'The user clicks Delete. Button calls the onClick prop it was given. It has no idea what deleting means.' },
  { active: 'TaskItem', direction: 'up', text: 'That function came from TaskItem: () => onDeleteTask(task.id). TaskItem adds the piece it knows, which is the id.' },
  { active: 'TaskList', direction: 'up', text: 'onDeleteTask passed through TaskList unchanged. TaskList did not call it, so nothing happens here.' },
  { active: 'App', direction: 'up', text: 'App\'s handleDeleteTask runs and calls setTasks(tasks.filter(...)). Only the owner changes the state.' },
  { active: 'App', direction: 'down', text: 'State changed, so React renders App again. It now has a new tasks array.' },
  { active: 'TaskList', direction: 'down', text: 'TaskList receives the new tasks as a prop and maps over them. There is one fewer TaskItem.' },
  { active: 'TaskItem', direction: 'down', text: 'The remaining rows receive their task props. The screen matches the data. Round trip complete.' },
]

export default function DataFlowStepper() {
  const [stepIndex, setStepIndex] = useState(0)
  const step = steps[stepIndex]

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="space-y-2">
        {levels.map((level, depth) => (
          <div
            key={level}
            style={{ marginLeft: depth * 20 }}
            className={`rounded-md border px-3 py-2 font-mono text-sm transition ${
              level === step.active
                ? step.direction === 'up'
                  ? 'border-amber-500 bg-amber-50 text-amber-900'
                  : 'border-emerald-500 bg-emerald-50 text-emerald-900'
                : 'border-slate-200 bg-white text-slate-500'
            }`}
          >
            {level}
          </div>
        ))}
      </div>
      <div className="space-y-3">
        <p className={`text-xs font-semibold uppercase tracking-widest ${step.direction === 'up' ? 'text-amber-700' : 'text-emerald-700'}`}>
          {step.direction === 'up' ? 'Event goes up' : 'Data comes down'} · step {stepIndex + 1} of {steps.length}
        </p>
        <p className="text-sm text-slate-800 leading-relaxed min-h-16">{step.text}</p>
        <div className="flex gap-2">
          <Button disabled={stepIndex === 0} onClick={() => setStepIndex(stepIndex - 1)}>Back</Button>
          <Button variant="primary" disabled={stepIndex === steps.length - 1} onClick={() => setStepIndex(stepIndex + 1)}>Next</Button>
          <Button onClick={() => setStepIndex(0)}>Restart</Button>
        </div>
      </div>
    </div>
  )
}
