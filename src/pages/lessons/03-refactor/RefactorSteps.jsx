import { useState } from 'react'
import CodeBlock from '../../../components/ui/CodeBlock.jsx'
import Note from '../../../components/ui/Note.jsx'
import Tree from '../../../components/ui/Tree.jsx'
import Button from '../../../components/kit/Button.jsx'
import { refactorSteps } from './refactorSteps.js'

export default function RefactorSteps() {
  const [stepIndex, setStepIndex] = useState(0)
  const step = refactorSteps[stepIndex]
  const isLast = stepIndex === refactorSteps.length - 1

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        {refactorSteps.map((s, i) => (
          <Button key={s.title} variant={i === stepIndex ? 'primary' : 'secondary'} onClick={() => setStepIndex(i)}>
            {i + 1}. {s.title.split(':')[0]}
          </Button>
        ))}
        <span className="ml-auto">
          <Button disabled={isLast} onClick={() => setStepIndex(stepIndex + 1)}>Next step</Button>
        </span>
      </div>
      <h4 className="font-semibold text-slate-900">
        <span className="mr-2 rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-600">{step.mode}</span>
        {step.title}
      </h4>
      <div className="grid gap-4 md:grid-cols-2">
        <CodeBlock label={step.label}>{step.code}</CodeBlock>
        <div className="space-y-3">
          <Tree>{step.tree}</Tree>
          <Note tone="sky">{step.note}</Note>
        </div>
      </div>
    </div>
  )
}
