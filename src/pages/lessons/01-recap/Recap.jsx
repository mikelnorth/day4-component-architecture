import LessonShell from '../../../components/ui/LessonShell.jsx'
import ConceptCallout from '../../../components/ui/ConceptCallout.jsx'
import ExampleBlock from '../../../components/ui/ExampleBlock.jsx'
import RevealCard from '../../../components/ui/RevealCard.jsx'
import Tree from '../../../components/ui/Tree.jsx'
import Note from '../../../components/ui/Note.jsx'
import DocsLink from '../../../components/ui/DocsLink.jsx'

export default function Recap() {
  return (
    <LessonShell
      number="1"
      title="Recap: sharing state"
      subtitle="Yesterday's question was how components share data. Today's question is how to organize an app so that sharing stays easy."
      minutes="10"
    >
      <ConceptCallout title="Three questions from Day 3" eyebrow="Ask the room">
        <p>Cold call before revealing. If answers are shaky, spend an extra two minutes here. Everything today depends on them.</p>
      </ConceptCallout>

      <div className="grid gap-3 md:grid-cols-3">
        <RevealCard question="What is lifting state?">
          <p>Removing state from child components, moving it to their closest common parent, and passing it down as props. Children ask for changes by calling a function they receive.</p>
        </RevealCard>
        <RevealCard question="Where should state live?">
          <p>In the closest common parent of every component that renders from it. If only one component uses it, it can stay in that component.</p>
        </RevealCard>
        <RevealCard question="What is prop drilling?">
          <p>Passing a prop through layers of components that don't use it, only to reach one deep component. It is not always wrong, but it is a hint to look at your structure. We come back to this on page 6.</p>
        </RevealCard>
      </div>

      <ExampleBlock
        variant="wedo"
        title="Audit your Day 3 task app"
        exercise="01-1-we-do-audit"
        description="Open your app from yesterday. Answer on paper or in a comment at the top of App.jsx. These same questions come back all day."
        minutes="5"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <Tree caption="Yesterday's shape. Is yours the same?">{`App                 tasks (state)
 ├ TaskInput        ← tasks, setTasks
 └ TaskList         ← tasks, setTasks
     └ TaskItem     ← task, onToggle, onDelete`}</Tree>
          <Note tone="amber" title="Find these in your code">
            <ol className="list-decimal list-inside space-y-1">
              <li>Which component owns <code>tasks</code>?</li>
              <li>Which file has the most logic? Is that the right place?</li>
              <li>Are any counts stored in state instead of calculated?</li>
              <li>If a new sibling needed the task count, what would you have to change?</li>
            </ol>
          </Note>
        </div>
        <Note tone="sky" title="Transition">
          <p>"Yesterday's app works. Today we ask a different question: is it easy to change? Let's look at one that works and isn't."</p>
        </Note>
      </ExampleBlock>

      <DocsLink title="Sharing State Between Components" href="https://react.dev/learn/sharing-state-between-components">
        Yesterday's page. Use the accordion for a one-minute refresher if the room needs it: one number, <code>activeIndex</code>, replaces two booleans and guarantees only one panel is open.
      </DocsLink>
    </LessonShell>
  )
}
