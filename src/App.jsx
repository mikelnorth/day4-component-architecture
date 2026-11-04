import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Recap from './pages/lessons/01-recap/Recap.jsx'
import MessyComponents from './pages/lessons/02-messy-components/MessyComponents.jsx'
import Refactor from './pages/lessons/03-refactor/Refactor.jsx'
import StatePlacement from './pages/lessons/04-state-placement/StatePlacement.jsx'
import Reusable from './pages/lessons/05-reusable/Reusable.jsx'
import FileStructure from './pages/lessons/06-file-structure/FileStructure.jsx'
import ImproveTaskApp from './pages/lessons/07-improve-task-app/ImproveTaskApp.jsx'
import Dashboard from './pages/lessons/08-dashboard/Dashboard.jsx'
import Rebuild from './pages/lessons/09-rebuild/Rebuild.jsx'
import WrapUp from './pages/lessons/10-wrap-up/WrapUp.jsx'
import ClassTimer from './components/ClassTimer.jsx'

const lessons = [
  { to: '/', label: 'Home / Plan', end: true },
  { to: '/recap', label: '1. Recap: Sharing State' },
  { to: '/messy-components', label: '2. The Messy Component' },
  { to: '/refactor', label: '3. Exercise 1: Refactor' },
  { to: '/state-placement', label: '4. Where State Lives' },
  { to: '/reusable', label: '5. Exercise 2: Reusable Parts' },
  { to: '/file-structure', label: '6. Files & Communication' },
  { to: '/improve-task-app', label: '7. Exercise 3: Code Review' },
  { to: '/dashboard', label: '8. Exercise 4: Dashboard' },
  { to: '/rebuild', label: '9. Mistakes & Rebuild' },
  { to: '/wrap-up', label: '10. Wrap-up & Reflection' },
]

function Sidebar() {
  return (
    <aside className="w-72 shrink-0 border-r border-slate-200 bg-white/80 backdrop-blur px-5 py-6 overflow-y-auto">
      <div className="mb-6">
        <p className="text-xs uppercase tracking-widest text-slate-500">Day 4</p>
        <h1 className="text-lg font-semibold text-slate-900 leading-tight">Component Architecture</h1>
      </div>
      <nav className="flex flex-col gap-1">
        {lessons.map((lesson) => (
          <NavLink
            key={lesson.to}
            to={lesson.to}
            end={lesson.end}
            className={({ isActive }) =>
              `block rounded-md px-3 py-2 text-sm transition ${
                isActive ? 'bg-indigo-600 text-white font-medium shadow-sm' : 'text-slate-700 hover:bg-slate-100'
              }`
            }
          >
            {lesson.label}
          </NavLink>
        ))}
      </nav>
      <a
        href="/live.html"
        target="_blank"
        rel="noreferrer"
        className="mt-3 block rounded-md border border-indigo-200 bg-indigo-50 px-3 py-2 text-sm font-medium text-indigo-800 hover:bg-indigo-100"
      >
        Live code: all starters & solutions
      </a>
      <div className="mt-6">
        <ClassTimer />
      </div>
      <div className="mt-4 rounded-md border border-slate-200 bg-slate-50 p-3 text-xs text-slate-600 leading-relaxed">
        Teaching phrases: <span className="font-semibold text-slate-900">"One component, one job."</span>{' '}
        "Who owns this data?" "Don't store what you can calculate." "Data down, events up."
      </div>
    </aside>
  )
}

function App() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-5xl mx-auto px-8 py-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recap" element={<Recap />} />
            <Route path="/messy-components" element={<MessyComponents />} />
            <Route path="/refactor" element={<Refactor />} />
            <Route path="/state-placement" element={<StatePlacement />} />
            <Route path="/reusable" element={<Reusable />} />
            <Route path="/file-structure" element={<FileStructure />} />
            <Route path="/improve-task-app" element={<ImproveTaskApp />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/rebuild" element={<Rebuild />} />
            <Route path="/wrap-up" element={<WrapUp />} />
          </Routes>
        </div>
      </main>
    </div>
  )
}

export default App
