import LessonShell from '../../../components/ui/LessonShell.jsx'
import ConceptCallout from '../../../components/ui/ConceptCallout.jsx'
import ExampleBlock from '../../../components/ui/ExampleBlock.jsx'
import CodeBlock from '../../../components/ui/CodeBlock.jsx'
import Note from '../../../components/ui/Note.jsx'
import Tree from '../../../components/ui/Tree.jsx'
import RevealCard from '../../../components/ui/RevealCard.jsx'
import DocsLink from '../../../components/ui/DocsLink.jsx'
import MessyTaskDemo from './MessyTaskDemo.jsx'
import { messyAppCode } from '../03-refactor/refactorSteps.js'

export default function MessyComponents() {
  return (
    <LessonShell
      number="2"
      title="The problem: messy components"
      subtitle="It runs. It even looks fine. So what's wrong with it? Try changing it."
      minutes="15"
    >
      <ExampleBlock
        variant="ido"
        title="Demo: one file that does everything"
        exercise="02-1-i-do-messy-app"
        description="Use the app for a moment, then read the code. Leave the boundaries off for now."
        minutes="5"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <CodeBlock label="App.jsx">{messyAppCode}</CodeBlock>
          <div className="space-y-3">
            <MessyTaskDemo />
            <Note tone="rose" title="Ask: what's hard about this file?">
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Everything in one file.</strong> To change a button you read past the state and handlers.</li>
                <li><strong>Not reusable.</strong> Want a task row on another page? Copy and paste.</li>
                <li><strong>Hard to scale.</strong> Each new feature makes this one function longer.</li>
                <li><strong>Hard to maintain.</strong> Try this: delete a task and watch "Total". Don't fix it yet.</li>
              </ul>
            </Note>
          </div>
        </div>
      </ExampleBlock>

      <ConceptCallout title="One component, one job.">
        <p>A well-structured app breaks the UI into logical components, separates responsibilities, keeps each component focused, and reuses UI where it can.</p>
        <p className="text-slate-600">
          The docs call this separation of concerns: "a component should ideally only be concerned with one thing. If it
          ends up growing, it should be decomposed into smaller subcomponents."
        </p>
      </ConceptCallout>

      <ExampleBlock
        variant="wedo"
        title="Thinking in components: draw the boxes"
        exercise="02-2-we-do-draw-the-boxes"
        description="This is Step 1 of Thinking in React. Have students sketch boxes on paper before you turn on the outlines."
        minutes="10"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <Note tone="amber" title="Ask three questions">
            <ul className="list-disc list-inside space-y-1">
              <li><strong>What repeats?</strong> Each task row, and the buttons in it.</li>
              <li><strong>What has its own logic?</strong> The input: typing, clearing, and ignoring blanks.</li>
              <li><strong>What should be reusable?</strong> Button. Probably a row layout. Not "the delete-task button".</li>
            </ul>
          </Note>
          <Tree caption='Now tick "Show component boundaries" on the demo above.'>{`Task App
 ├ Header
 ├ TaskInput
 └ TaskList
     └ TaskItem`}</Tree>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          <RevealCard question="Should the Add button be its own component?">
            <p>Not as "AddButton". But Add, Toggle, and Delete look alike and differ only in text and behavior. That points to one reusable <code>Button</code>, which is Exercise 2.</p>
          </RevealCard>
          <RevealCard question="Does the tree have one right answer?">
            <p>No. The docs' product table keeps its header inside <code>ProductTable</code> and says it could be split out if it grew. Good trees come from clear reasons, not a magic count.</p>
          </RevealCard>
        </div>
        <Tree caption="The docs' example, for comparison. Each component matches one piece of the data.">{`FilterableProductTable
 ├ SearchBar
 └ ProductTable
     ├ ProductCategoryRow
     └ ProductRow`}</Tree>
      </ExampleBlock>

      <DocsLink title="Thinking in React, Step 1: Break the UI into a component hierarchy" href="https://react.dev/learn/thinking-in-react#step-1-break-the-ui-into-a-component-hierarchy">
        Show the colored boxes drawn over the mockup. It is the same exercise we just did. Follow along on the projector for two minutes.
      </DocsLink>
    </LessonShell>
  )
}
