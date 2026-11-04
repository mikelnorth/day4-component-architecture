import LessonShell from '../../../components/ui/LessonShell.jsx'
import ConceptCallout from '../../../components/ui/ConceptCallout.jsx'
import ExampleBlock from '../../../components/ui/ExampleBlock.jsx'
import CodeBlock from '../../../components/ui/CodeBlock.jsx'
import Note from '../../../components/ui/Note.jsx'
import DocsLink from '../../../components/ui/DocsLink.jsx'
import DocsChallenges from '../../../components/ui/DocsChallenges.jsx'
import AiPrompt from '../../../components/ui/AiPrompt.jsx'
import OutOfSyncDemo from './OutOfSyncDemo.jsx'
import CommonParentExplorer from './CommonParentExplorer.jsx'
import DuplicateStateDemo from './DuplicateStateDemo.jsx'
import IsItStateQuiz from './IsItStateQuiz.jsx'
import MirroredPropDemo from './MirroredPropDemo.jsx'

export default function StatePlacement() {
  return (
    <LessonShell
      number="4"
      title="Where should state live?"
      subtitle="Two decisions for every piece of data: does it need to be state at all, and if so, who owns it?"
      minutes="20"
    >
      <ConceptCallout title="State lives in the closest common parent.">
        <p>List every component that renders from the data, find their closest common parent, and put the state there. If only one component uses it, that component is the owner.</p>
      </ConceptCallout>

      <ExampleBlock
        variant="ido"
        title="Demo: two copies are not shared"
        exercise="04-1-i-do-two-copies"
        description="Click Add a task on both sides. On the left, each sibling has its own tasks, so they are not shared and fall out of sync."
        minutes="3"
      >
        <OutOfSyncDemo />
      </ExampleBlock>

      <ExampleBlock
        variant="wedo"
        title="Find the owner"
        exercise="04-2-we-do-find-the-owner"
        description="Choose a piece of data and vote before you click. Then click components yourself to try your own combinations. This is Thinking in React, Step 4."
        minutes="5"
      >
        <CommonParentExplorer />
        <Note tone="amber" title="Say this out loud">
          <p>State moves as apps grow, in both directions. Text moved <em>down</em> in Exercise 1. "Which task is being edited" moved <em>up</em> when the Header needed it. As the docs say about moving state: "This is all part of the process!"</p>
        </Note>
      </ExampleBlock>

      <ExampleBlock
        variant="ido"
        title="Demo: duplicate state goes out of sync"
        exercise="04-3-i-do-duplicate-state"
        description="On each side, delete the completed task, 'Review Day 3 notes'. The left side now claims a task is done that no longer exists. This is the bug from the docs' packing list challenge, and the same kind of bug as Total in your refactor."
        minutes="5"
      >
        <DuplicateStateDemo />
        <div className="grid gap-4 md:grid-cols-2">
          <CodeBlock label="Bad: a second copy of the truth">{`const [tasks, setTasks] = useState([]);
const [taskCount, setTaskCount] = useState(0);`}</CodeBlock>
          <CodeBlock label="Good: calculate it">{`const [tasks, setTasks] = useState([]);

<p>Total: {tasks.length}</p>`}</CodeBlock>
        </div>
        <Note tone="rose" title="Rule: do NOT store what you can calculate">
          <p>Now go fix your refactored app. Delete <code>taskCount</code>, delete <code>setTaskCount</code>, and pass <code>total={'{tasks.length}'}</code>. The bug is gone and you have less code. <strong>(1 minute)</strong></p>
        </Note>
      </ExampleBlock>

      <ExampleBlock
        variant="wedo"
        title="Is it state? The three questions"
        exercise="04-4-we-do-is-it-state"
        description="From Thinking in React, Step 3. If the answer to any of these is yes, it is not state: Does it stay the same over time? Is it passed in as a prop? Can you compute it from existing state or props?"
        minutes="4"
      >
        <IsItStateQuiz />
      </ExampleBlock>

      <ExampleBlock
        variant="ido"
        title="Optional: don't copy a prop into state"
        exercise="04-5-i-do-mirrored-prop"
        description="Skip this if you are behind. Click Published and watch which line updates."
        minutes="2"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <MirroredPropDemo />
          <CodeBlock label="Why it goes stale">{`function Badge({ label }) {
  // Only the FIRST value is ever used
  const [text] = useState(label);
  return <p>{text}</p>;
}

function Badge({ label }) {
  return <p>{label}</p>; // Always current
}`}</CodeBlock>
        </div>
      </ExampleBlock>

      <AiPrompt
        stage="Debug"
        minutes="2"
        prompt={`Here is my React component. The total count is sometimes wrong after deleting a task.

[paste your App.jsx]

Explain the bug in plain English. Then list any state that could be calculated from other state. Don't rewrite my code yet.`}
        check="Before changing anything, tell a neighbor why the count went wrong. If the answer adds useEffect to keep two values in sync, reject it. That is the same duplicate state with extra steps."
      />

      <DocsLink title="Choosing the State Structure" href="https://react.dev/learn/choosing-the-state-structure">
        Today's main reference. It gives five principles: group related state, avoid contradictions, avoid redundant state, avoid duplication, and avoid deep nesting. Today we focus on redundant state and duplication.
      </DocsLink>

      <DocsLink title="You Might Not Need an Effect: Updating state based on props or state" href="https://react.dev/learn/you-might-not-need-an-effect#updating-state-based-on-props-or-state">
        Read just this one section. A Day 6 preview that explains why an Effect is the wrong fix for duplicate state: "When something can be calculated from the existing props or state, don't put it in state."
      </DocsLink>

      <DocsChallenges
        page="Choosing the State Structure"
        href="https://react.dev/learn/choosing-the-state-structure"
        challenges={[
          { title: 'Fix a broken packing list', when: 'in class', note: 'The original version of our demo. Do it in pairs if you have 5 spare minutes.' },
          { title: "Fix a component that's not updating", when: 'in class', note: 'A clock that copies a color prop into state. A fast follow-up to the optional demo.' },
          { title: 'Fix the disappearing selection', when: 'homework', note: 'Stores a whole object instead of its id. Teaches "store the id and look it up".' },
          { title: 'Implement multiple selection', when: 'stretch', note: 'Change one id into an array of ids. The selected count is calculated.' },
        ]}
      />
      <DocsChallenges
        page="Sharing State Between Components"
        href="https://react.dev/learn/sharing-state-between-components"
        challenges={[
          { title: 'Synced inputs', when: 'homework', note: 'A quick confidence check on lifting state, if it was not done on Day 3.' },
          { title: 'Filtering a list', when: 'homework', note: 'Lift the query, calculate the results. Note that the results are not state.' },
        ]}
      />
    </LessonShell>
  )
}
