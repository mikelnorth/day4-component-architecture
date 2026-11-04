import LessonShell from '../../../components/ui/LessonShell.jsx'
import ConceptCallout from '../../../components/ui/ConceptCallout.jsx'
import ExampleBlock from '../../../components/ui/ExampleBlock.jsx'
import CodeBlock from '../../../components/ui/CodeBlock.jsx'
import Note from '../../../components/ui/Note.jsx'
import RevealCard from '../../../components/ui/RevealCard.jsx'
import Checklist from '../../../components/ui/Checklist.jsx'

export default function Rebuild() {
  return (
    <LessonShell
      number="9"
      title="Common mistakes & rebuild challenge"
      subtitle="Learn to spot bad structure, then find out how much you can build from memory."
      minutes="15"
    >
      <ExampleBlock
        variant="wedo"
        title="Diagnose the architecture"
        exercise="09-1-we-do-diagnose"
        description="Read each one aloud and take a vote. Each maps to a common mistake."
        minutes="5"
      >
        <div className="grid gap-3 md:grid-cols-2">
          <RevealCard question="A TaskTitle component that only returns <span>{text}</span>, used once." label="Diagnose">
            <p><strong>Too many components.</strong> It has no logic, isn't reused, and doesn't make anything clearer. Extract when it helps, not by reflex.</p>
          </RevealCard>
          <RevealCard question="An App.jsx with 400 lines, 12 state variables, and every list in the app." label="Diagnose">
            <p><strong>Too few components.</strong> Every change means reading everything. Break it up along its jobs.</p>
          </RevealCard>
          <RevealCard question="SearchBar holds query, and the list needs it too, so someone added another query to the list." label="Diagnose">
            <p><strong>State in the wrong place.</strong> Two owners of one value. Lift it to the closest common parent, and keep one source of truth.</p>
          </RevealCard>
          <RevealCard question="State includes tasks, completedTasks, and completedCount." label="Diagnose">
            <p><strong>Duplicated state.</strong> Only <code>tasks</code> is real. The other two can be calculated.</p>
          </RevealCard>
        </div>
        <ConceptCallout title="Debugging architecture" eyebrow="Three questions to ask about any component">
          <ol className="list-decimal list-inside space-y-1">
            <li><strong>Does this component need state?</strong> Could it be a prop or a calculation?</li>
            <li><strong>Can this be reused?</strong> What is stopping it? Is reuse even needed here?</li>
            <li><strong>Who owns this data?</strong> If you can't name exactly one component, there's your bug.</li>
          </ol>
        </ConceptCallout>
      </ExampleBlock>

      <ExampleBlock
        variant="youdo"
        title="Rebuild challenge"
        exercise="09-2-you-do-rebuild"
        description="Close your code. Close the docs, the solution, and your AI tool. Start from the blank starter, or a new project, and rebuild the task app with the proper structure."
        minutes="10"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <CodeBlock label="Or, for a new project">{`npm create vite@latest task-rebuild
# Choose React, then JavaScript
cd task-rebuild
npm install
npm run dev`}</CodeBlock>
          <Note tone="amber" title="Work in this order">
            <ol className="list-decimal list-inside space-y-1">
              <li>Write the tree as a comment at the top of App.</li>
              <li>Write down the minimal state and its owner.</li>
              <li>Build a static version with reusable components.</li>
              <li>Add state and handlers in App.</li>
              <li>Add the local state in TaskInput.</li>
            </ol>
          </Note>
        </div>
        <Checklist
          title="Rebuilt from memory"
          items={[
            'Tree and state plan written before any JSX',
            'Header, TaskInput, TaskList, and TaskItem in separate files',
            'A reusable Button',
            'tasks in App; draft text in TaskInput',
            'Add, toggle, and delete work, using ids',
            'Total is calculated from tasks.length',
          ]}
        />
        <Note tone="emerald" title="Instructor">
          <p>Ten minutes won't be enough for everyone. The plan and static version are the minimum in class, and the rest is homework. Getting stuck is useful here: have students write down what they had to look up.</p>
        </Note>
      </ExampleBlock>
    </LessonShell>
  )
}
