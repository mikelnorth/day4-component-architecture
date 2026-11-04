import { useState } from 'react'
import DemoSurface from '../../../components/ui/DemoSurface.jsx'
import Button from '../../../components/kit/Button.jsx'

// From the docs' "Don't mirror props in state". The initial value is all useState ever reads.
function MirroredBadge({ label }) {
  const [text] = useState(label)
  return <p className="font-mono text-sm rounded bg-rose-50 border border-rose-200 px-3 py-2">useState(label): {text}</p>
}

function DirectBadge({ label }) {
  return <p className="font-mono text-sm rounded bg-emerald-50 border border-emerald-200 px-3 py-2">label prop: {label}</p>
}

export default function MirroredPropDemo() {
  const [label, setLabel] = useState('Draft')
  return (
    <DemoSurface title="The parent owns label">
      <div className="space-y-3">
        <div className="flex gap-2">
          <Button onClick={() => setLabel('Draft')}>Draft</Button>
          <Button onClick={() => setLabel('Published')}>Published</Button>
        </div>
        <MirroredBadge label={label} />
        <DirectBadge label={label} />
      </div>
    </DemoSurface>
  )
}
