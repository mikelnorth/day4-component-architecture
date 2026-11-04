import LessonShell from '../../../components/ui/LessonShell.jsx'
import ConceptCallout from '../../../components/ui/ConceptCallout.jsx'
import ExampleBlock from '../../../components/ui/ExampleBlock.jsx'
import CodeBlock from '../../../components/ui/CodeBlock.jsx'
import Note from '../../../components/ui/Note.jsx'
import Tree from '../../../components/ui/Tree.jsx'
import RevealCard from '../../../components/ui/RevealCard.jsx'
import DocsLink from '../../../components/ui/DocsLink.jsx'
import DocsChallenges from '../../../components/ui/DocsChallenges.jsx'
import DataFlowStepper from './DataFlowStepper.jsx'

export default function FileStructure() {
  return (
    <LessonShell
      number="6"
      title="File structure & component communication"
      subtitle="Keep it simple until the app asks for more. Then trace how the pieces talk to each other."
      minutes="10"
    >
      <ExampleBlock
        variant="ido"
        title="A simple structure that works"
        exercise="06-1-i-do-file-structure"
        description="One component per file, in a components folder. react.dev does not prescribe a folder structure, so treat this as a sensible starting point. Teams differ, and that's normal."
        minutes="3"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <Tree caption="Today: flat is fine.">{`src/
 ├ components/
 │ ├ Button.jsx
 │ ├ Header.jsx
 │ ├ TaskInput.jsx
 │ ├ TaskItem.jsx
 │ └ TaskList.jsx
 ├ App.jsx
 └ main.jsx`}</Tree>
          <Tree caption="Later, if the folder gets crowded: group by purpose.">{`src/
 ├ components/
 │ ├ ui/         ← Button, Card, Input
 │ └ tasks/      ← TaskInput, TaskList, TaskItem
 ├ data/         ← sample data
 ├ App.jsx
 └ main.jsx`}</Tree>
        </div>
        <Note tone="sky" title="Conventions">
          <ul className="list-disc list-inside space-y-1">
            <li>The file name matches the component name, starting with a capital: <code>TaskItem.jsx</code>.</li>
            <li>One default export per component file. Use named exports when a file exports several things.</li>
            <li>Default imports can use any name, but named imports must match. Mixing them up is the classic error below.</li>
          </ul>
        </Note>
        <div className="grid gap-4 md:grid-cols-2">
          <CodeBlock label="Default: export and import match">{`export default function Button() {}
import Button from "./Button";`}</CodeBlock>
          <CodeBlock label="Named: export and import match">{`export function Button() {}
import { Button } from "./Button";`}</CodeBlock>
        </div>
      </ExampleBlock>

      <ExampleBlock
        variant="wedo"
        title="Component communication: follow one click"
        exercise="06-2-we-do-follow-one-click"
        description="Have students predict each step before you press Next. Then find these same steps in their own code."
        minutes="4"
      >
        <DataFlowStepper />
        <ConceptCallout title="Data down, events up." eyebrow="Component communication review">
          <p><strong>Parent to child:</strong> pass props. <strong>Child to parent:</strong> call a function the parent passed down, and the parent updates its state.</p>
        </ConceptCallout>
      </ExampleBlock>

      <ExampleBlock
        variant="ido"
        title="When props feel like a long way down"
        exercise="06-3-i-do-prop-drilling"
        description="The recap's prop drilling question comes back. Often the fix is a different structure, using the children you learned on page 5."
        minutes="3"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <CodeBlock label="Layout only forwards posts">{`function App() {
  return <Layout posts={posts} />;
}

function Layout({ posts }) {
  return <main><Posts posts={posts} /></main>;
}`}</CodeBlock>
          <CodeBlock label="Pass the JSX through children">{`function App() {
  return (
    <Layout>
      <Posts posts={posts} />
    </Layout>
  );
}

function Layout({ children }) {
  return <main>{children}</main>;
}`}</CodeBlock>
        </div>
        <RevealCard question='"What about context? I heard it fixes prop drilling."'>
          <p>Day 17. The docs say to try passing props and extracting components with children first: "Just because you need to pass some props several levels deep doesn't mean you should put that information into context."</p>
        </RevealCard>
      </ExampleBlock>

      <ExampleBlock
        variant="ido"
        title="Optional: your code has two trees"
        exercise="06-4-i-do-two-trees"
        description="Skip if you are behind. The render tree shows who renders whom. The module tree shows who imports whom."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <Tree caption="Render tree: App's Layout renders Posts through children.">{`App
 └ Layout
     └ Posts`}</Tree>
          <Tree caption="Module tree: Layout never imports Posts. App does.">{`App.jsx
 ├ Layout.jsx
 └ Posts.jsx`}</Tree>
        </div>
      </ExampleBlock>

      <DocsLink title="Understanding Your UI as a Tree" href="https://react.dev/learn/understanding-your-ui-as-a-tree">
        The render tree and module dependency tree, with diagrams worth showing. The Copyright example is the same "two trees differ" point.
      </DocsLink>
      <DocsLink title="Passing Data Deeply with Context: Before you use context" href="https://react.dev/learn/passing-data-deeply-with-context#before-you-use-context">
        Read only this section today. It contains the Layout and Posts example. The rest of the page is for Day 17.
      </DocsLink>

      <DocsChallenges
        page="Keeping Components Pure"
        href="https://react.dev/learn/keeping-components-pure"
        challenges={[
          { title: 'Fix a broken profile', when: 'homework', note: 'Two components talk through a shared variable. The fix is to pass a prop.' },
          { title: 'Fix a broken story tray', when: 'stretch', note: 'A component pushes into an array it received as a prop.' },
        ]}
      />
    </LessonShell>
  )
}
