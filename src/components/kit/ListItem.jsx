// Two holes: children for the content, actions for the buttons on the right.
export default function ListItem({ children, actions }) {
  return (
    <li className="flex items-center justify-between gap-3 rounded-md border border-slate-200 bg-slate-50 px-3 py-2">
      <div className="min-w-0 text-sm text-slate-800">{children}</div>
      {actions && <div className="flex shrink-0 gap-2">{actions}</div>}
    </li>
  )
}
