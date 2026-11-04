/* eslint-disable react-hooks/static-components -- intentionally broken teaching demo; this is the bug being shown */
import { useState } from 'react'
import DemoSurface from '../../../components/ui/DemoSurface.jsx'
import Button from '../../../components/kit/Button.jsx'

function FixedField() {
  const [text, setText] = useState('')
  return (
    <input
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Type, then click the button"
      className="w-full rounded-md border border-slate-300 px-3 py-1.5 text-sm"
    />
  )
}

function FixedForm() {
  const [count, setCount] = useState(0)
  return (
    <DemoSurface title="Defined at the top of the file">
      <div className="space-y-3">
        <FixedField />
        <Button onClick={() => setCount(count + 1)}>Clicked {count} times</Button>
      </div>
    </DemoSurface>
  )
}

function BrokenForm() {
  const [count, setCount] = useState(0)

  // The bug: a brand new component type on every render, so React throws away its state.
  function BrokenField() {
    const [text, setText] = useState('')
    return (
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type, then click the button"
        className="w-full rounded-md border border-rose-300 px-3 py-1.5 text-sm"
      />
    )
  }

  return (
    <DemoSurface title="Defined inside another component">
      <div className="space-y-3">
        <BrokenField />
        <Button onClick={() => setCount(count + 1)}>Clicked {count} times</Button>
      </div>
    </DemoSurface>
  )
}

export default function NestedDefinitionBug() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <BrokenForm />
      <FixedForm />
    </div>
  )
}
