import { Link } from 'react-router-dom'
import ConceptCallout from '../components/ui/ConceptCallout.jsx'
import DocsLink from '../components/ui/DocsLink.jsx'
import { schedule, fmt } from '../data/schedule.js'

const objectives = [
  'Describe common folder structures and best practices for organizing files in a React app.',
  'Identify what makes a component reusable: props, composition, and independence.',
  'Explain lifting state up and how to decide where state belongs.',
  'Minimize redundant state so the app stays correct and easy to change.',
  'Draw logical, maintainable component trees that improve readability.',
  'Build a React app with a clean structure, using multiple components effectively.',
  'Build UI components that can be reused across different parts of an app.',
  'Use an architecture that lets you add features without major refactoring.',
]

const builds = [
  'A one-file task app refactored into Header, TaskInput, TaskList, and TaskItem',
  'A reusable kit: Button, Card, Input, ListItem',
  'An improved Day 3 task app, after a code review of its bugs',
  'A mini dashboard with Header, Sidebar, CardList, and Card',
]

const lessonCards = [
  { to: '/recap', title: '1. Recap: Sharing State', tag: 'Warm up', desc: 'Lifting state, where state lives, prop drilling. Audit your own Day 3 app.' },
  { to: '/messy-components', title: '2. The Messy Component', tag: 'Motivation', desc: 'One working file that is hard to change. Draw the boxes with the Thinking in React method.' },
  { to: '/refactor', title: '3. Exercise 1: Refactor', tag: 'Hands on', desc: 'Split the app step by step without changing what it does.' },
  { to: '/state-placement', title: '4. Where State Lives', tag: 'Judgment', desc: 'Closest common parent explorer, out-of-sync siblings, the packing-list counter bug.' },
  { to: '/reusable', title: '5. Exercise 2: Reusable Parts', tag: 'Hands on', desc: 'label to children, the Card "hole", UI vs logic components, and building a kit.' },
  { to: '/file-structure', title: '6. Files & Communication', tag: 'Structure', desc: 'A folder layout, imports, a click traced through the tree, and fixing prop drilling.' },
  { to: '/improve-task-app', title: '7. Exercise 3: Code Review', tag: 'Hands on', desc: 'Run live bugs from mutation and index keys, then fix the task app.' },
  { to: '/dashboard', title: '8. Exercise 4: Dashboard', tag: 'Build', desc: 'Plan first, then build Header, Sidebar, CardList, and Card with one owner for each piece of data.' },
  { to: '/rebuild', title: '9. Mistakes & Rebuild', tag: 'Retrieval', desc: 'Diagnose four bad architectures, then close the code and rebuild from memory.' },
  { to: '/wrap-up', title: '10. Wrap-up & Reflection', tag: 'Consolidate', desc: 'Reflection questions, exit ticket, homework, and the Day 5 preview.' },
]

const kindStyles = {
  talk: 'bg-indigo-100 text-indigo-700',
  wedo: 'bg-amber-100 text-amber-800',
  youdo: 'bg-emerald-100 text-emerald-800',
  break: 'bg-slate-100 text-slate-600',
}
const kindLabel = { talk: 'Teach', wedo: 'We do', youdo: 'You do', break: 'Break' }

const mistakes = [
  'Too many components: a wrapper around a single <p> with nothing to reuse',
  'Too few components: an App that does everything',
  'State in the wrong place: two siblings each holding their own copy',
  'Duplicated state: taskCount stored next to tasks',
  'Defining a component inside another component, which resets its state',
  'Moving state up when only one component uses it',
  'key={index} on a list that can change',
  'Copying the array but mutating the object inside it',
]

export default function Home() {
  return (
    <article className="space-y-10">
      <header className="border-b border-slate-200 pb-6">
        <p className="text-xs uppercase tracking-widest text-indigo-600 font-semibold">Instructor guide · 3 hours</p>
        <h1 className="text-4xl font-bold text-slate-900 mt-1">Day 4 &mdash; Component Architecture</h1>
        <p className="text-slate-600 mt-3 text-base leading-relaxed max-w-3xl">
          Students can make components, give them state, and share that state. Today is about the decisions in between:
          where one component ends, who owns each piece of data, and how to keep an app easy to change as it grows.
        </p>
      </header>

      <ConceptCallout title="One component, one job.">
        <p>
          An app can work perfectly and still be painful to change. Good architecture means small focused components,
          state that has one clear owner, and values you calculate instead of storing.
        </p>
      </ConceptCallout>

      <DocsLink title="Thinking in React" href="https://react.dev/learn/thinking-in-react">
        Today's backbone, supported by Choosing the State Structure, Sharing State Between Components, and Passing Props
        to a Component. react.dev does not prescribe a folder structure and never uses the terms "presentational" or
        "container", so those two ideas come from our course page. Say so if students go looking.
      </DocsLink>

      <section>
        <h2 className="text-xl font-semibold text-slate-900 mb-3">3-hour schedule</h2>
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-slate-600 text-left">
              <tr>
                <th className="px-4 py-3 font-semibold">Time</th>
                <th className="px-4 py-3 font-semibold">Min</th>
                <th className="px-4 py-3 font-semibold">Block</th>
                <th className="px-4 py-3 font-semibold">Mode</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {schedule.map((b) => (
                <tr key={b.start} className={b.kind === 'break' ? 'bg-slate-50/60' : ''}>
                  <td className="px-4 py-2.5 font-mono text-slate-700 whitespace-nowrap">{fmt(b.start)} – {fmt(b.end)}</td>
                  <td className="px-4 py-2.5 text-slate-500 tabular-nums">{b.end - b.start}</td>
                  <td className="px-4 py-2.5 text-slate-800">
                    {b.to ? <Link to={b.to} className="hover:text-indigo-700 hover:underline">{b.title}</Link> : b.title}
                  </td>
                  <td className="px-4 py-2.5">
                    <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${kindStyles[b.kind]}`}>{kindLabel[b.kind]}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-slate-500">
          The dashboard is the block to protect. If you are behind, skip the mirrored prop demo on page 4 and the module
          tree on page 6, and start the rebuild as homework. Keep at least 25 minutes for the dashboard.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">Learning objectives</h2>
          <ul className="space-y-2">
            {objectives.map((o, i) => (
              <li key={o} className="flex gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 leading-relaxed">
                <span className="shrink-0 w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 text-xs font-semibold flex items-center justify-center mt-0.5">{i + 1}</span>
                <span>{o}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">By the end of class students have built</h2>
          <ul className="space-y-2">
            {builds.map((b) => (
              <li key={b} className="rounded-lg border border-emerald-200 bg-emerald-50/60 px-4 py-3 text-sm text-emerald-900">{b}</li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-slate-500 leading-relaxed">
            Every activity has a starter and solution in <code className="px-1 bg-slate-100 rounded">exercises/</code>. Standalone copies of the main exercises are in <code className="px-1 bg-slate-100 rounded">student-projects/</code>.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900 mb-3">Lesson flow</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {lessonCards.map((l) => (
            <Link key={l.to} to={l.to} className="group rounded-xl border border-slate-200 bg-white px-5 py-4 hover:border-indigo-400 hover:shadow transition">
              <p className="text-[11px] uppercase tracking-widest text-indigo-600 font-semibold">{l.tag}</p>
              <p className="text-lg font-semibold text-slate-900 mt-0.5 group-hover:text-indigo-700">{l.title}</p>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">{l.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900 mb-3">Common mistakes to watch for</h2>
        <ul className="grid gap-2 sm:grid-cols-2">
          {mistakes.map((m) => (
            <li key={m} className="rounded-md border border-rose-200 bg-rose-50/60 px-3 py-2 text-sm text-rose-900">{m}</li>
          ))}
        </ul>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white px-5 py-4">
        <h2 className="text-lg font-semibold text-slate-900">Scope guardrails for today</h2>
        <ul className="mt-2 text-sm text-slate-700 leading-relaxed list-disc list-inside space-y-1">
          <li><strong>In:</strong> component trees, single responsibility, state placement, derived values, reusable components, <code>children</code>, folder structure, callback props.</li>
          <li><strong>Day 5 (Task Manager App):</strong> filters, editing, and a full feature build. Today the task app only adds, toggles, and deletes.</li>
          <li><strong>Days 6 to 8:</strong> <code>useEffect</code>, data fetching, and custom hooks. Nothing today needs them.</li>
          <li><strong>Day 17:</strong> context and <code>useReducer</code>. If prop drilling comes up, name them and move on.</li>
          <li><strong>AI:</strong> three short touchpoints (Debug, Review, Plan). Students must explain any output in their own words. No AI during the rebuild.</li>
        </ul>
      </section>
    </article>
  )
}
