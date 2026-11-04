import { useState } from 'react'
import Button from '../../../components/kit/Button.jsx'
import Card from '../../../components/kit/Card.jsx'

const initialItems = [
  { id: 1, title: 'Counter app', category: 'Labs', points: 10, done: true },
  { id: 2, title: 'Product search', category: 'Labs', points: 20, done: true },
  { id: 3, title: 'Thinking in React', category: 'Reading', points: 5, done: true },
  { id: 4, title: 'Choosing the State Structure', category: 'Reading', points: 5, done: false },
  { id: 5, title: 'Task app refactor', category: 'Projects', points: 30, done: false },
  { id: 6, title: 'Mini dashboard', category: 'Projects', points: 40, done: false },
]

const categories = ['All', 'Labs', 'Reading', 'Projects']

function DashboardHeader({ doneCount, totalCount, points }) {
  return (
    <header className="flex flex-wrap items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
      <h3 className="text-lg font-semibold text-slate-900">Course Dashboard</h3>
      <p className="text-xs text-slate-500">{doneCount} of {totalCount} done · {points} points</p>
    </header>
  )
}

function Sidebar({ items, activeCategory, onSelectCategory }) {
  return (
    <nav className="flex flex-col gap-1.5">
      {categories.map((category) => {
        const count = category === 'All' ? items.length : items.filter((item) => item.category === category).length
        return (
          <Button
            key={category}
            variant={category === activeCategory ? 'primary' : 'secondary'}
            onClick={() => onSelectCategory(category)}
          >
            {category} ({count})
          </Button>
        )
      })}
    </nav>
  )
}

function CardList({ items, onToggleDone }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <Card key={item.id} title={item.title}>
          <p className="text-xs text-slate-500 mb-2">{item.category} · {item.points} points</p>
          <Button variant={item.done ? 'secondary' : 'primary'} onClick={() => onToggleDone(item.id)}>
            {item.done ? 'Undo' : 'Mark done'}
          </Button>
        </Card>
      ))}
    </div>
  )
}

export default function MiniDashboard() {
  const [items, setItems] = useState(initialItems)
  const [activeCategory, setActiveCategory] = useState('All')

  const visibleItems = activeCategory === 'All' ? items : items.filter((item) => item.category === activeCategory)
  const doneItems = items.filter((item) => item.done)
  const points = doneItems.reduce((total, item) => total + item.points, 0)

  function handleToggleDone(id) {
    setItems(items.map((item) => (item.id === id ? { ...item, done: !item.done } : item)))
  }

  return (
    <div className="space-y-4">
      <DashboardHeader doneCount={doneItems.length} totalCount={items.length} points={points} />
      <div className="grid gap-4 md:grid-cols-[10rem_1fr]">
        <Sidebar items={items} activeCategory={activeCategory} onSelectCategory={setActiveCategory} />
        <CardList items={visibleItems} onToggleDone={handleToggleDone} />
      </div>
    </div>
  )
}
