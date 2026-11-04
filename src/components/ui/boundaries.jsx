import { createContext, useContext, useState } from 'react'

// Lets a demo draw a labelled dashed outline around every component so students can
// literally see where one component ends and the next begins.
const OutlineContext = createContext({ on: false, setOn: () => {} })

export function OutlineProvider({ children, defaultOn = false }) {
  const [on, setOn] = useState(defaultOn)
  return <OutlineContext value={{ on, setOn }}>{children}</OutlineContext>
}

export function OutlineToggle() {
  const { on, setOn } = useContext(OutlineContext)
  return (
    <label className="inline-flex items-center gap-2 text-xs text-slate-600 cursor-pointer select-none">
      <input
        type="checkbox"
        checked={on}
        onChange={(e) => setOn(e.target.checked)}
        className="accent-indigo-600"
      />
      Show component boundaries
    </label>
  )
}

const colors = {
  indigo: 'outline-indigo-500',
  sky: 'outline-sky-500',
  amber: 'outline-amber-500',
  emerald: 'outline-emerald-500',
  rose: 'outline-rose-500',
  violet: 'outline-violet-500',
}

export function Boundary({ name, color = 'indigo', children, className = '' }) {
  const { on } = useContext(OutlineContext)
  if (!on) return <div className={className}>{children}</div>
  return (
    <div
      className={`relative rounded outline-2 outline-dashed outline-offset-4 ${colors[color] ?? colors.indigo} ${className}`}
    >
      <span className="absolute -top-3 left-2 z-10 rounded border border-slate-300 bg-white px-1.5 text-[10px] font-mono text-slate-700 shadow-sm">
        {`<${name} />`}
      </span>
      {children}
    </div>
  )
}
