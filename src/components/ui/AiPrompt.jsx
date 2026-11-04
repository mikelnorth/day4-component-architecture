import { useState } from 'react'

const stages = {
  Plan: 'bg-violet-600',
  Debug: 'bg-rose-600',
  Review: 'bg-teal-600',
}

// A short, copyable AI prompt plus the human check that has to happen afterward.
export default function AiPrompt({ stage = 'Plan', minutes, prompt, check }) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(prompt)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section className="rounded-xl border border-slate-300 bg-white overflow-hidden">
      <div className="flex items-center gap-3 px-5 py-2.5 border-b border-slate-200 bg-slate-50">
        <span className={`rounded-md text-white text-[10px] font-bold px-1.5 py-0.5 uppercase tracking-wider ${stages[stage]}`}>
          AI: {stage}
        </span>
        {minutes && <span className="text-xs text-slate-500">~{minutes} min, then back to the code</span>}
        <button
          onClick={handleCopy}
          className="ml-auto text-xs rounded border border-slate-300 bg-white px-2.5 py-1 hover:bg-slate-100"
        >
          {copied ? 'Copied' : 'Copy prompt'}
        </button>
      </div>
      <pre className="px-5 py-3 text-sm text-slate-800 whitespace-pre-wrap font-mono leading-relaxed">{prompt}</pre>
      <div className="px-5 py-3 text-sm text-slate-700 border-t border-slate-100 bg-amber-50/50">
        <span className="font-semibold">Your job afterward: </span>
        {check}
      </div>
    </section>
  )
}
