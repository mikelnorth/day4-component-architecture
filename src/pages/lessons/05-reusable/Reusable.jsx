import LessonShell from '../../../components/ui/LessonShell.jsx'
import ConceptCallout from '../../../components/ui/ConceptCallout.jsx'
import ExampleBlock from '../../../components/ui/ExampleBlock.jsx'
import CodeBlock from '../../../components/ui/CodeBlock.jsx'
import Note from '../../../components/ui/Note.jsx'
import RevealCard from '../../../components/ui/RevealCard.jsx'
import Checklist from '../../../components/ui/Checklist.jsx'
import DocsLink from '../../../components/ui/DocsLink.jsx'
import DocsChallenges from '../../../components/ui/DocsChallenges.jsx'
import { CardHoleDemo, TwoAppsDemo } from './ReusableDemos.jsx'

export default function Reusable() {
  return (
    <LessonShell
      number="5"
      title="Exercise 2: reusable components"
      subtitle="A component is reusable when it depends only on its props. Move the app-specific details out, and it can go anywhere."
      minutes="20"
    >
      <ConceptCallout title="Three signs of a reusable component">
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Props:</strong> what differs between uses comes in from outside.</li>
          <li><strong>Composition:</strong> it can wrap other content through <code>children</code>.</li>
          <li><strong>Independence:</strong> it doesn't know about your app, so it works in a different one.</li>
        </ul>
      </ConceptCallout>

      <ExampleBlock
        variant="ido"
        title="From repeated buttons to a Button component"
        exercise="05-1-i-do-button"
        description="Our course page starts with a label prop. The docs use children. Teach them in that order, so students see why children is more flexible."
        minutes="4"
      >
        <div className="grid gap-4 md:grid-cols-3">
          <CodeBlock label="1. Repeated">{`<button>Add</button>
<button>Delete</button>`}</CodeBlock>
          <CodeBlock label="2. A label prop">{`function Button({ label, onClick }) {
  return (
    <button onClick={onClick}>
      {label}
    </button>
  );
}

<Button label="Add" onClick={addTask} />`}</CodeBlock>
          <CodeBlock label="3. children, as in the docs">{`function Button({ children, onClick }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}

<Button onClick={addTask}>
  <b>+</b> Add task
</Button>`}</CodeBlock>
        </div>
        <Note tone="sky" title="Keep the app's meaning out of the reusable part">
          <p>Button says <code>onClick</code>. TaskItem says <code>onDeleteTask</code>. Reusable parts name things generically, while app parts name what the user is doing. The docs' <code>Toolbar</code> does this with <code>onPlayMovie</code> and <code>onUploadImage</code>.</p>
        </Note>
      </ExampleBlock>

      <ExampleBlock
        variant="ido"
        title="Composition: a Card with a hole"
        exercise="05-2-i-do-card-hole"
        description='The docs describe a children prop as a "hole" that the parent can fill with arbitrary JSX. All three of these are the same Card.'
        minutes="3"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <CodeBlock label="Card.jsx">{`function Card({ title, children }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      {children}
    </div>
  );
}

<Card title="A number">
  <p>42</p>
  <p>tasks completed</p>
</Card>`}</CodeBlock>
          <CardHoleDemo />
        </div>
      </ExampleBlock>

      <ExampleBlock
        variant="wedo"
        title="Two useful categories"
        exercise="05-3-we-do-ui-vs-logic"
        description="A way of looking at components, from our course page. Use it to spot where logic has ended up, not as a rule to enforce."
        minutes="3"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-slate-900">UI components (presentational)</h4>
            <p className="text-sm text-slate-600">Display things. Usually reusable. Everything arrives through props.</p>
            <CodeBlock label="Button, Card, ListItem, TaskItem">{`function Button({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
}`}</CodeBlock>
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-slate-900">Logic components (container)</h4>
            <p className="text-sm text-slate-600">Own state and handlers, and pass data down. Usually specific to the app.</p>
            <CodeBlock label="App">{`function App() {
  const [tasks, setTasks] = useState([]);
  // handlers here
  return <TaskList tasks={tasks} />;
}`}</CodeBlock>
          </div>
        </div>
        <RevealCard question="TaskInput has state and also displays an input. Which category is it? Is that a problem?">
          <p>It's both, and that's fine. Its draft text is its own business. React's docs don't use these two labels. They talk about whether a component is controlled by props or holds its own state, and note that most components mix both.</p>
        </RevealCard>
      </ExampleBlock>

      <ExampleBlock
        variant="youdo"
        title="Exercise 2: build a kit"
        exercise="05-4-you-do-build-a-kit"
        description="In your refactored app's components folder. Create Button, Card, Input, and ListItem, then use them in the task app."
        minutes="10"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <CodeBlock label="Input.jsx">{`// Hands the parent text, not the browser event.
function Input({ value, onChange, placeholder }) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  );
}

<Input value={text} onChange={setText} />`}</CodeBlock>
          <CodeBlock label="ListItem.jsx">{`// Two holes. Any JSX can be passed as a prop.
function ListItem({ children, actions }) {
  return (
    <li>
      <div>{children}</div>
      <div>{actions}</div>
    </li>
  );
}

<ListItem actions={<Button>Delete</Button>}>
  {task.text}
</ListItem>`}</CodeBlock>
        </div>
        <Checklist
          title="Exercise 2 is done when"
          items={[
            'No file in your kit mentions the word "task"',
            'Every <button> in the app is now <Button>',
            'TaskInput uses Input and Button',
            'TaskItem uses ListItem and Button',
            'Card wraps the whole app or a section of it',
            'Reuse test: use one kit component somewhere new without changing it',
          ]}
        />
        <Note tone="emerald" title="Instructor: what to look for">
          <ul className="list-disc list-inside space-y-1">
            <li><code>DeleteTaskButton</code> that takes <code>tasks</code> and <code>setTasks</code>. Ask: "Could you use this in a blog app?"</li>
            <li><code>Button</code> without an <code>onClick</code> pass-through, so clicks do nothing.</li>
            <li>A form from Day 3: inside a <code>{'<form>'}</code>, a button submits by default. Keep the logic in <code>onSubmit</code> and render <code>{'<Button>Add</Button>'}</code> with no <code>onClick</code>, or the task can be added twice.</li>
          </ul>
        </Note>
      </ExampleBlock>

      <ExampleBlock
        variant="ido"
        title="The payoff: same parts, different app"
        exercise="05-5-i-do-same-parts-new-app"
        description="Use both apps. The right side is a contacts app built from the same four unchanged files. Ask: what would we have to change if Button got a new look?"
      >
        <TwoAppsDemo />
      </ExampleBlock>

      <DocsLink title="Passing Props to a Component: Passing JSX as children" href="https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children">
        Source of the Card and "hole" idea. On Responding to Events, see "Naming event handler props" for the Toolbar example.
      </DocsLink>

      <DocsChallenges
        page="Passing Props to a Component"
        href="https://react.dev/learn/passing-props-to-a-component"
        challenges={[
          { title: 'Passing JSX in a `children` prop', when: 'in class', note: 'Extract a Card from repeated markup. Exercise 2 in five minutes, with a solution to compare.' },
          { title: 'Extract a component', when: 'homework', note: 'Decide which props Profile needs. Notice that no award count prop is needed: it can be calculated.' },
          { title: 'Adjust the image size based on a prop', when: 'stretch', note: 'Shows a component hiding logic behind its props.' },
        ]}
      />
    </LessonShell>
  )
}
