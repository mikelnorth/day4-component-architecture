import { useState } from 'react'
import Button from '../../../components/kit/Button.jsx'

const nodes = [
  { id: 'App', parent: null, depth: 0 },
  { id: 'Header', parent: 'App', depth: 1 },
  { id: 'TaskInput', parent: 'App', depth: 1 },
  { id: 'TaskList', parent: 'App', depth: 1 },
  { id: 'TaskItem', parent: 'TaskList', depth: 2 },
]

const presets = [
  { name: 'tasks', users: ['Header', 'TaskList'], why: 'Header shows the total and TaskList shows the rows. Siblings, so it goes in App.' },
  { name: 'draft text in the input', users: ['TaskInput'], why: 'Nobody else cares about half-typed text. It stays local.' },
  { name: '"is this row expanded?"', users: ['TaskItem'], why: 'Each row can have its own value. Keep it in TaskItem unless something else needs it.' },
  { name: 'which task is being edited', users: ['TaskItem', 'Header'], why: 'If the Header shows "Editing: Buy milk", the owner has to move up to App.' },
]

function pathToRoot(id) {
  const path = []
  let current = nodes.find((n) => n.id === id)
  while (current) {
    path.unshift(current.id)
    current = nodes.find((n) => n.id === current.parent)
  }
  return path
}

// The deepest component that appears on every selected component's path to the root.
function closestCommonParent(ids) {
  if (ids.length === 0) return null
  const [first, ...rest] = ids.map(pathToRoot)
  return first.filter((id) => rest.every((path) => path.includes(id))).at(-1)
}

export default function CommonParentExplorer() {
  const [users, setUsers] = useState(presets[0].users)
  const [presetName, setPresetName] = useState(presets[0].name)

  const owner = closestCommonParent(users)
  const preset = presets.find((p) => p.name === presetName)

  function handleToggleNode(id) {
    setPresetName(null)
    setUsers(users.includes(id) ? users.filter((u) => u !== id) : [...users, id])
  }

  function handlePreset(p) {
    setPresetName(p.name)
    setUsers(p.users)
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs text-slate-500">Where does this go?</span>
        {presets.map((p) => (
          <Button key={p.name} variant={p.name === presetName ? 'primary' : 'secondary'} onClick={() => handlePreset(p)}>
            {p.name}
          </Button>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-slate-200 bg-white p-3 space-y-1.5">
          <p className="text-xs text-slate-500 mb-2">Click each component that renders from this data.</p>
          {nodes.map((node) => {
            const isUser = users.includes(node.id)
            const isOwner = owner === node.id
            return (
              <button
                key={node.id}
                type="button"
                aria-pressed={isUser}
                onClick={() => handleToggleNode(node.id)}
                style={{ marginLeft: node.depth * 24 }}
                className={`flex items-center gap-2 rounded-md border px-3 py-1.5 font-mono text-sm transition ${
                  isOwner
                    ? 'border-indigo-500 bg-indigo-50 text-indigo-900'
                    : isUser
                      ? 'border-amber-400 bg-amber-50 text-amber-900'
                      : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                }`}
              >
                {node.id}
                {isUser && <span className="font-sans text-[10px] font-semibold uppercase">uses it</span>}
                {isOwner && <span className="font-sans text-[10px] font-semibold uppercase text-indigo-700">owner</span>}
              </button>
            )
          })}
        </div>
        <div className="rounded-lg border border-indigo-200 bg-indigo-50/60 p-4 text-sm text-slate-700 space-y-2">
          <p className="text-xs uppercase tracking-widest font-semibold text-indigo-700">Answer</p>
          {owner ? (
            <p className="text-base">
              State belongs in <code className="font-semibold text-indigo-900">{owner}</code>
            </p>
          ) : (
            <p>Nothing renders from it. Does it need to exist?</p>
          )}
          {preset && <p>{preset.why}</p>}
          {!preset && owner && <p>The closest common parent of everything you selected.</p>}
        </div>
      </div>
    </div>
  )
}
