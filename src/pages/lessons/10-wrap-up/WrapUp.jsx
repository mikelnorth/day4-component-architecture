import LessonShell from '../../../components/ui/LessonShell.jsx'
import ConceptCallout from '../../../components/ui/ConceptCallout.jsx'
import Note from '../../../components/ui/Note.jsx'
import DocsLink from '../../../components/ui/DocsLink.jsx'
import RevealCard from '../../../components/ui/RevealCard.jsx'

const review = [
  'Component architecture: each component has one clear job.',
  'Reusability: props, composition, and independence.',
  'State placement: the closest common parent, and one owner.',
  'Clean structure: one component per file, in a simple folder layout.',
  'Scaling React apps: calculate what you can, so there is less to go wrong.',
]

const homework = [
  { title: 'Finish the rebuild challenge, then compare with the solution in exercises/09-2-you-do-rebuild', href: null },
  { title: 'Choosing the State Structure: "Fix the disappearing selection"', href: 'https://react.dev/learn/choosing-the-state-structure#challenges' },
  { title: 'Passing Props to a Component: "Extract a component"', href: 'https://react.dev/learn/passing-props-to-a-component#challenges' },
  { title: 'Rendering Lists: "Extracting a list item component"', href: 'https://react.dev/learn/rendering-lists#challenges' },
  { title: 'Keeping Components Pure: "Fix a broken profile"', href: 'https://react.dev/learn/keeping-components-pure#challenges' },
  { title: 'Updating Arrays in State: "Fix the mutations using non-mutative methods"', href: 'https://react.dev/learn/updating-arrays-in-state#challenges' },
  { title: 'Read and compare: Thinking in React, the whole page', href: 'https://react.dev/learn/thinking-in-react' },
  { title: 'Optional long build: Tutorial: Tic-Tac-Toe. See state lift from Square to Board to Game.', href: 'https://react.dev/learn/tutorial-tic-tac-toe#lifting-state-up' },
]

const docsToday = [
  ['Thinking in React', 'https://react.dev/learn/thinking-in-react'],
  ['Choosing the State Structure', 'https://react.dev/learn/choosing-the-state-structure'],
  ['Sharing State Between Components', 'https://react.dev/learn/sharing-state-between-components'],
  ['Passing Props to a Component', 'https://react.dev/learn/passing-props-to-a-component'],
  ['Importing and Exporting Components', 'https://react.dev/learn/importing-and-exporting-components'],
  ['Your First Component: Nesting and organizing', 'https://react.dev/learn/your-first-component#nesting-and-organizing-components'],
  ['Responding to Events: Naming handler props', 'https://react.dev/learn/responding-to-events#naming-event-handler-props'],
  ['Understanding Your UI as a Tree', 'https://react.dev/learn/understanding-your-ui-as-a-tree'],
  ['Preserving and Resetting State', 'https://react.dev/learn/preserving-and-resetting-state'],
  ['Rendering Lists: Keys', 'https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key'],
  ['Updating Arrays in State', 'https://react.dev/learn/updating-arrays-in-state'],
  ['Context: Before you use context', 'https://react.dev/learn/passing-data-deeply-with-context#before-you-use-context'],
]

export default function WrapUp() {
  return (
    <LessonShell
      number="10"
      title="Wrap-up & reflection"
      subtitle="Yesterday you learned how to share state. Today you learned how to organize an app around it."
      minutes="10"
    >
      <section className="space-y-2">
        <h2 className="text-xl font-semibold text-slate-900">Today you learned</h2>
        <ul className="grid gap-2 sm:grid-cols-2">
          {review.map((r) => (
            <li key={r} className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800">{r}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Reflection</h2>
        <div className="grid gap-3 md:grid-cols-2">
          <RevealCard question="What makes a component reusable?">
            <p>What varies comes through props, it can wrap content through children, and it doesn't depend on any one app. Button doesn't know what a task is.</p>
          </RevealCard>
          <RevealCard question="Where should state live?">
            <p>In the closest common parent of the components that render from it. If only one component uses it, keep it there.</p>
          </RevealCard>
          <RevealCard question="What is duplicate state?">
            <p>The same information stored in more than one place, or stored when it could be calculated. The copies can disagree, as Total did in the messy app.</p>
          </RevealCard>
          <RevealCard question="How do components communicate?">
            <p>Parents pass props down. Children call functions they received, and the parent updates its state. Data down, events up.</p>
          </RevealCard>
          <RevealCard question="How do you structure a React app?">
            <p>Draw the tree, then give each component its own file in a components folder. Start simple, and group the files by purpose only when the folder gets crowded.</p>
          </RevealCard>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Exit ticket (2 minutes)</h2>
        <Note tone="slate">
          <ol className="list-decimal list-inside space-y-1">
            <li>Draw the tree for a page with a search box, a list of products, and a cart total. Mark who owns each piece of state.</li>
            <li>Which is duplicate state here? <code className="px-1 bg-white rounded border border-slate-200">products</code>, <code className="px-1 bg-white rounded border border-slate-200">query</code>, <code className="px-1 bg-white rounded border border-slate-200">filteredProducts</code></li>
            <li>One thing that is still fuzzy.</li>
          </ol>
        </Note>
        <p className="text-xs text-slate-500">Answer to 2: <code>filteredProducts</code>. Calculate it from the other two.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Homework</h2>
        <ul className="space-y-2">
          {homework.map((h) => (
            <li key={h.title}>
              {h.href ? (
                <a href={h.href} target="_blank" rel="noreferrer" className="block rounded-lg border border-cyan-200 bg-cyan-50/40 px-4 py-2.5 text-sm text-slate-800 hover:border-cyan-400">
                  {h.title}
                </a>
              ) : (
                <p className="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-800">{h.title}</p>
              )}
            </li>
          ))}
        </ul>
      </section>

      <ConceptCallout title="What's next: Project Day" eyebrow="Day 5 preview">
        <p>Tomorrow you build a real app, the Task Manager. You'll plan the component structure before writing code and apply state and architecture together.</p>
      </ConceptCallout>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">react.dev map for today</h2>
        <div className="rounded-xl border border-cyan-200 bg-cyan-50/40 px-5 py-4">
          <ul className="grid gap-1.5 sm:grid-cols-2 text-sm">
            {docsToday.map(([title, href]) => (
              <li key={href}><a href={href} target="_blank" rel="noreferrer" className="text-slate-800 hover:text-cyan-800 hover:underline">{title}</a></li>
            ))}
          </ul>
        </div>
        <DocsLink title="Thinking in React (read before Day 5)" href="https://react.dev/learn/thinking-in-react">
          Tomorrow's project uses this process from start to finish.
        </DocsLink>
      </section>
    </LessonShell>
  )
}
