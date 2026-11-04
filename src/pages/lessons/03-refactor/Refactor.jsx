import LessonShell from '../../../components/ui/LessonShell.jsx'
import ConceptCallout from '../../../components/ui/ConceptCallout.jsx'
import ExampleBlock from '../../../components/ui/ExampleBlock.jsx'
import Note from '../../../components/ui/Note.jsx'
import Checklist from '../../../components/ui/Checklist.jsx'
import DocsLink from '../../../components/ui/DocsLink.jsx'
import DocsChallenges from '../../../components/ui/DocsChallenges.jsx'
import RefactorSteps from './RefactorSteps.jsx'
import NestedDefinitionBug from './NestedDefinitionBug.jsx'

export default function Refactor() {
  return (
    <LessonShell
      number="3"
      title="Exercise 1: refactor a messy app"
      subtitle="Take the working one-file app and split it up, one component at a time, checking the browser after each move."
      minutes="25"
    >
      <ConceptCallout title="A refactor changes the structure, not the behavior.">
        <p>The app should look and work exactly the same after every step. If something breaks, your last move caused it, and it is small enough to find.</p>
      </ConceptCallout>

      <ExampleBlock
        variant="wedo"
        title="Refactor together, then finish alone"
        exercise="03-1-we-do-refactor"
        description="Start from the starter below. You lead Header and TaskItem. Students do TaskList and TaskInput. Then review App together."
        minutes="20"
      >
        <RefactorSteps />
        <Note tone="amber" title="The extraction recipe (leaf components first)">
          <ol className="list-decimal list-inside space-y-1">
            <li>Make a new file in <code>components/</code> and write an empty function.</li>
            <li>Cut the JSX from App and paste it in.</li>
            <li>Read the errors. Every "x is not defined" is a prop you need.</li>
            <li>Import the component in App and render it with those props.</li>
            <li>Check the browser. Same app? Next component.</li>
          </ol>
        </Note>
        <Checklist
          title="Exercise 1 is done when"
          items={[
            'App.jsx has no <li>, <input>, or <button>',
            'Header, TaskInput, TaskList, and TaskItem are each in their own file',
            'TaskItem and TaskList have no state',
            'text state lives in TaskInput, not App',
            'tasks lives in App, with add, toggle, and delete handlers beside it',
            'The app behaves exactly as before, including the Total bug',
          ]}
        />
        <Note tone="emerald" title="Instructor: what to look for">
          <ul className="list-disc list-inside space-y-1">
            <li>Calling the prop during render: <code>{'onClick={onDeleteTask(task.id)}'}</code>. Compare with Day 2's "pass, don't call".</li>
            <li>A missing import or a wrong path. Have them read the Vite overlay out loud before helping.</li>
            <li>Moving everything out of App, including <code>tasks</code>. Ask: "Who else needs this?"</li>
            <li>Finished solution: Run solution, above.</li>
          </ul>
        </Note>
      </ExampleBlock>

      <ExampleBlock
        variant="ido"
        title="Demo: why every component gets a top-level definition"
        exercise="03-2-i-do-nested-definition"
        description="A mistake people make while extracting. On each side, type some text, then click the button."
        minutes="5"
      >
        <NestedDefinitionBug />
        <Note tone="rose" title="Must never nest definitions">
          <p>The docs say components can render other components, "but you must never nest their definitions". On the left, each render creates a new <code>BrokenField</code> type, so React treats it as a different component and resets its state. It is slow as well as buggy.</p>
        </Note>
      </ExampleBlock>

      <DocsLink title="Preserving and Resetting State: Different components at the same position" href="https://react.dev/learn/preserving-and-resetting-state#different-components-at-the-same-position-reset-state">
        The Pitfall box at the end of this section is the source of this demo. Scroll to it on the projector.
      </DocsLink>

      <DocsChallenges
        page="Importing and Exporting Components"
        href="https://react.dev/learn/importing-and-exporting-components"
        challenges={[
          { title: 'Split the components further', when: 'in class', note: 'Fast finishers. Move Profile to its own file. The catch is that Gallery imports it too.' },
        ]}
      />
      <DocsChallenges
        page="Rendering Lists"
        href="https://react.dev/learn/rendering-lists"
        challenges={[
          { title: 'Extracting a list item component', when: 'homework', note: 'The same move as TaskItem. Pay attention to where key goes when you extract.' },
        ]}
      />
    </LessonShell>
  )
}
