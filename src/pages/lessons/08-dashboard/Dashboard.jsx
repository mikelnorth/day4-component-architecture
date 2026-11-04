import LessonShell from '../../../components/ui/LessonShell.jsx'
import ConceptCallout from '../../../components/ui/ConceptCallout.jsx'
import ExampleBlock from '../../../components/ui/ExampleBlock.jsx'
import CodeBlock from '../../../components/ui/CodeBlock.jsx'
import DemoSurface from '../../../components/ui/DemoSurface.jsx'
import Note from '../../../components/ui/Note.jsx'
import Tree from '../../../components/ui/Tree.jsx'
import RevealCard from '../../../components/ui/RevealCard.jsx'
import Checklist from '../../../components/ui/Checklist.jsx'
import DocsLink from '../../../components/ui/DocsLink.jsx'
import AiPrompt from '../../../components/ui/AiPrompt.jsx'
import MiniDashboard from './MiniDashboard.jsx'

export default function Dashboard() {
  return (
    <LessonShell
      number="8"
      title="Exercise 4: mini dashboard"
      subtitle="Everything today, in a new app. Plan on paper first, build a static version, and only then add state."
      minutes="30"
    >
      <ConceptCallout title="Plan, static, state.">
        <p>This is the Thinking in React order. You find the tree, build it with no interactivity, work out the minimal state, decide who owns it, and then connect it. Each step is easier because of the last one.</p>
      </ConceptCallout>

      <DemoSurface title="What you are building">
        <MiniDashboard />
      </DemoSurface>

      <ExampleBlock
        variant="wedo"
        title="Plan together"
        exercise="08-1-we-do-plan"
        description="Use the demo above for a minute. Have students answer on paper before anyone opens an editor or an AI tool."
        minutes="7"
      >
        <div className="grid gap-3 md:grid-cols-3">
          <RevealCard question="1. What is the component tree?" label="Reveal the tree">
            <Tree>{`Mini Dashboard (App)
 ├ Header
 ├ Sidebar
 └ CardList
     └ Card`}</Tree>
          </RevealCard>
          <RevealCard question="2. What is the minimal state?" label="Reveal the state">
            <p><code>items</code> and <code>activeCategory</code>. That's all.</p>
            <p>Everything else is calculated: visible items, done count, points, and each category's count.</p>
          </RevealCard>
          <RevealCard question="3. Who owns it?" label="Reveal the owner">
            <p>App. Header needs <code>items</code> for its counts and CardList needs them for its cards. Sidebar and CardList both need <code>activeCategory</code>. App is their closest common parent.</p>
          </RevealCard>
        </div>
      </ExampleBlock>

      <AiPrompt
        stage="Plan"
        minutes="3"
        prompt={`I'm building a small React dashboard with a Header, a Sidebar with category filters, and a list of cards with a "Mark done" button.

Here is my plan:
Tree: [your tree]
State: [your state]
State owner: [your answer]

Question my plan. Is any of this state redundant? Is anything in the wrong place? Don't write the code. Use only useState and props.`}
        check="You plan first, so AI is reviewing your thinking instead of replacing it. If it disagrees with you, decide who is right using the three questions from page 4."
      />

      <ExampleBlock
        variant="youdo"
        title="Build it"
        exercise="08-2-you-do-dashboard"
        description="Use the starter below. The data and CSS are ready, and the TODOs follow these steps. Check the browser after each one."
        minutes="20"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <CodeBlock label="Step 1: static version, no state">{`<Header doneCount={3} totalCount={6} points={35} />
<Sidebar
  items={initialItems}
  activeCategory="All"
/>
<CardList items={initialItems} />`}</CodeBlock>
          <CodeBlock label="Step 2: add the minimal state">{`const [items, setItems] = useState(initialItems);
const [activeCategory, setActiveCategory] =
  useState("All");`}</CodeBlock>
          <CodeBlock label="Step 3: calculate everything else">{`const visibleItems =
  activeCategory === "All"
    ? items
    : items.filter(
        (item) => item.category === activeCategory
      );

const doneItems = items.filter((item) => item.done);`}</CodeBlock>
          <CodeBlock label="Step 4: events up">{`function handleToggleDone(id) {
  setItems(
    items.map((item) =>
      item.id === id ? { ...item, done: !item.done } : item
    )
  );
}

<Sidebar onSelectCategory={setActiveCategory} ... />
<CardList onToggleDone={handleToggleDone} ... />`}</CodeBlock>
        </div>
        <Checklist
          title="Requirements"
          items={[
            'Reusable components: Button and Card have no dashboard knowledge',
            'Clean structure: one component per file in components/',
            'No duplicated logic: filtering and counting each happen in one place',
            'Proper state placement: only App holds items and activeCategory',
            'No counts or filtered lists stored in state',
            'Marking a card done updates the Header, even with a filter active',
          ]}
        />
        <Checklist
          title="Stretch (pick any)"
          items={[
            'Reuse Card in Header to show stat tiles, without changing Card',
            'Show a message when a category has no items',
            'Add a "Hide done" checkbox. Where does its state go?',
            'Give each card a "Details" toggle. Where does this state go? Why is it different?',
          ]}
        />
        <Note tone="emerald" title="Instructor: what to look for">
          <ul className="list-disc list-inside space-y-1">
            <li>Counting from <code>visibleItems</code> instead of <code>items</code>: the Header changes when the filter changes.</li>
            <li><code>visibleItems</code> in state. Ask: "Can you calculate it?" Then ask them to find what breaks when a card is marked done.</li>
            <li>Card that takes an <code>item</code> and has its own Mark done button. That's a good component, but it's not the reusable Card. Name it <code>ItemCard</code> and have it use Card.</li>
            <li>Filter logic in both Sidebar and CardList. Who needs the answer?</li>
            <li>If short on time, skip the Sidebar counts. Solution: Run solution, above.</li>
          </ul>
        </Note>
      </ExampleBlock>

      <DocsLink title="Thinking in React (the whole page)" href="https://react.dev/learn/thinking-in-react">
        Same five steps, with a product table instead of a dashboard. Read this tonight and compare it with what you just did.
      </DocsLink>
    </LessonShell>
  )
}
