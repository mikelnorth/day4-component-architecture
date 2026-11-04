const variants = {
  primary: 'bg-indigo-600 border-indigo-600 text-white hover:bg-indigo-700',
  secondary: 'bg-white border-slate-300 text-slate-700 hover:bg-slate-100',
  danger: 'bg-white border-rose-300 text-rose-700 hover:bg-rose-50',
}

// Knows how a button looks. Knows nothing about tasks. That is why it is reusable.
export default function Button({ children, onClick, variant = 'secondary', disabled = false }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`rounded-md border px-3 py-1.5 text-xs font-medium transition disabled:opacity-40 ${variants[variant]}`}
    >
      {children}
    </button>
  )
}
