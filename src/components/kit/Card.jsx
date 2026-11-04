// A frame with a "hole" (children) that the parent fills with any JSX.
export default function Card({ title, children }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      {title && <h3 className="text-sm font-semibold text-slate-900 mb-2">{title}</h3>}
      <div className="text-sm text-slate-700">{children}</div>
    </div>
  )
}
