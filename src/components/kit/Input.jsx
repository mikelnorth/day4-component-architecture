// A controlled input. onChange hands the parent the text, not the browser event.
export default function Input({ value, onChange, placeholder }) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="flex-1 min-w-0 rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm"
    />
  )
}
