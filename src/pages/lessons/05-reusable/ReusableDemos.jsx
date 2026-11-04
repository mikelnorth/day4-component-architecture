import { useState } from 'react'
import Button from '../../../components/kit/Button.jsx'
import Card from '../../../components/kit/Card.jsx'
import Input from '../../../components/kit/Input.jsx'
import ListItem from '../../../components/kit/ListItem.jsx'
import TaskApp from '../../../components/tasks/TaskApp.jsx'

export function CardHoleDemo() {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      <Card title="Text">
        <p>Any paragraph can go in the hole.</p>
      </Card>
      <Card title="A number">
        <p className="text-3xl font-bold text-slate-900">42</p>
        <p className="text-xs text-slate-500">tasks completed</p>
      </Card>
      <Card title="Other components">
        <div className="flex gap-2">
          <Button variant="primary">Save</Button>
          <Button>Cancel</Button>
        </div>
      </Card>
    </div>
  )
}

const people = [
  { id: 1, name: 'Ada Lovelace' },
  { id: 2, name: 'Grace Hopper' },
  { id: 3, name: 'Katherine Johnson' },
]

// A different app built from the same four parts. None of them changed.
function ContactsApp() {
  const [query, setQuery] = useState('')
  const [favoriteIds, setFavoriteIds] = useState([])
  const results = people.filter((person) => person.name.toLowerCase().includes(query.toLowerCase()))

  function handleToggleFavorite(id) {
    setFavoriteIds(favoriteIds.includes(id) ? favoriteIds.filter((f) => f !== id) : [...favoriteIds, id])
  }

  return (
    <div className="space-y-3">
      <header className="flex items-baseline justify-between">
        <h3 className="text-lg font-semibold text-slate-900">Contacts</h3>
        <p className="text-xs text-slate-500">{favoriteIds.length} favorites</p>
      </header>
      <div className="flex">
        <Input value={query} onChange={setQuery} placeholder="Search people" />
      </div>
      <ul className="space-y-2">
        {results.map((person) => (
          <ListItem
            key={person.id}
            actions={
              <Button onClick={() => handleToggleFavorite(person.id)}>
                {favoriteIds.includes(person.id) ? 'Unfavorite' : 'Favorite'}
              </Button>
            }
          >
            {person.name}
          </ListItem>
        ))}
      </ul>
    </div>
  )
}

export function TwoAppsDemo() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card><TaskApp /></Card>
      <Card><ContactsApp /></Card>
    </div>
  )
}
