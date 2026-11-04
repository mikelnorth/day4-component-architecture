import LessonShell from '../../../components/ui/LessonShell.jsx'
import ConceptCallout from '../../../components/ui/ConceptCallout.jsx'
import ExampleBlock from '../../../components/ui/ExampleBlock.jsx'
import CodeBlock from '../../../components/ui/CodeBlock.jsx'
import Note from '../../../components/ui/Note.jsx'
import RevealCard from '../../../components/ui/RevealCard.jsx'
import Checklist from '../../../components/ui/Checklist.jsx'
import DocsLink from '../../../components/ui/DocsLink.jsx'
import DocsChallenges from '../../../components/ui/DocsChallenges.jsx'
import AiPrompt from '../../../components/ui/AiPrompt.jsx'
import { IndexKeyDemo, MutationDemo } from './BugDemos.jsx'

const reviewCode = `// TaskList.jsx
function TaskList({ tasks, setTasks }) {
  function toggleTask(index) {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  }

  function deleteTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          index={index}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}`

export default function ImproveTaskApp() {
  return (
    <LessonShell
      number="7"
      title="Exercise 3: improve the task app"
      subtitle="This code is well organized and it appears to work. Your job is to review it and find what will go wrong later."
      minutes="15"
    >
      <ConceptCallout title="Working is not the same as correct.">
        <p>Many state bugs stay hidden until the app grows. Today we make two of them visible, then fix them while finishing the architecture.</p>
      </ConceptCallout>

      <ExampleBlock
        variant="wedo"
        title="Code review: what would you flag?"
        exercise="07-1-we-do-code-review"
        description="Give pairs two minutes to read before showing the answers. This is how the code might look in your own Day 3 app."
        minutes="2"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <CodeBlock label="components/TaskList.jsx">{reviewCode}</CodeBlock>
          <div className="space-y-3">
            <RevealCard question="Line 4 and 5: what does [...tasks] actually copy?" label="Reveal issue 1">
              <p>Only the array. The task objects inside are shared, so <code>updated[index].completed = ...</code> changes the original object, which is a state mutation.</p>
            </RevealCard>
            <RevealCard question="What is key={index} telling React?" label="Reveal issue 2">
              <p>That identity is position. Delete the first task and every remaining task gets a different key, so React matches rows by the wrong identity.</p>
            </RevealCard>
            <RevealCard question="Who owns tasks, and who changes them?" label="Reveal issue 3">
              <p>App owns <code>tasks</code>, but the logic that changes them lives in TaskList and TaskInput, each handed the raw setter. It works, but a new feature that changes tasks has no single place to go.</p>
            </RevealCard>
          </div>
        </div>
      </ExampleBlock>

      <ExampleBlock
        variant="ido"
        title="Make issue 1 visible: mutation"
        exercise="07-2-i-do-mutation"
        description="On each side: toggle a few tasks, then click Reset. Refresh the page to run it again."
        minutes="2"
      >
        <MutationDemo />
        <Note tone="rose" title="Why Reset fails on the left">
          <p>The toggle changed the starter objects themselves, so there is no original left to go back to. The docs show this same bug with two lists sharing items. The fix: only change objects you just created.</p>
        </Note>
      </ExampleBlock>

      <ExampleBlock
        variant="ido"
        title="Make issue 2 visible: index keys"
        exercise="07-3-i-do-index-keys"
        description="On each side: open the Notes on the first task, then delete the first task. Watch which row is open."
        minutes="2"
      >
        <IndexKeyDemo />
        <Note tone="rose" title="Why the wrong row is open on the left">
          <p>Local state follows the key. With <code>key={'{index}'}</code>, the next task moves into position 0 and inherits the deleted row's open notes. The docs: "Index as a key often leads to subtle and confusing bugs."</p>
        </Note>
      </ExampleBlock>

      <ExampleBlock
        variant="youdo"
        title="Exercise 3: fix and finish"
        exercise="07-4-you-do-fix-and-finish"
        description="Use your own Day 3 app, or the starter below. Bring in your kit from Exercise 2."
        minutes="8"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <CodeBlock label="App.jsx: handlers live with the state">{`function handleToggleTask(id) {
  setTasks(
    tasks.map((task) =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    )
  );
}

function handleDeleteTask(id) {
  setTasks(tasks.filter((task) => task.id !== id));
}

<TaskInput onAddTask={handleAddTask} />
<TaskList
  tasks={tasks}
  onToggleTask={handleToggleTask}
  onDeleteTask={handleDeleteTask}
/>`}</CodeBlock>
          <Checklist
            title="Exercise 3 is done when"
            items={[
              'TaskItem component and Button component are in use',
              'Files are in a clean components folder',
              'Toggle uses map and creates a new object',
              'Every task is found by id, not index',
              'key={task.id}',
              'Children receive onAddTask, onToggleTask, onDeleteTask, not setTasks',
              'Any counts are calculated, not stored',
            ]}
          />
        </div>
        <Note tone="emerald" title="Instructor">
          <p>Passing a setter isn't wrong. Thinking in React does it with <code>onFilterTextChange={'{setFilterText}'}</code>, and that's fine for a simple value. Named handlers help here because adding, toggling, and deleting each have logic worth keeping together. Solution: Run solution, above.</p>
        </Note>
      </ExampleBlock>

      <AiPrompt
        stage="Review"
        minutes="3"
        prompt={`Review this React code as a senior developer teaching a beginner.
Check only for: state mutation, unstable keys, duplicated state, and components with more than one job.
For each issue, point to the line and explain the bug it can cause.
Do not suggest libraries, useReducer, context, or useMemo.

[paste your components]`}
        check="Pick one thing it flagged and prove it. Can you make the bug happen, or show that it can't? AI reviews can be confidently wrong, so don't change code you can't explain."
      />

      <DocsLink title="Updating Arrays in State: Updating objects inside arrays" href="https://react.dev/learn/updating-arrays-in-state#updating-objects-inside-arrays">
        The two-lists version of the mutation bug. Also see Rendering Lists, "Why does React need keys?"
      </DocsLink>

      <DocsChallenges
        page="Preserving and Resetting State"
        href="https://react.dev/learn/preserving-and-resetting-state"
        challenges={[
          { title: 'Fix misplaced state in the list', when: 'in class', note: 'Docs version of the index key demo: an expanded email stays with the wrong contact. A two-minute fix.' },
          { title: 'Reset a detail form', when: 'stretch', note: 'Using key on purpose to reset a form. Good for fast finishers.' },
        ]}
      />
      <DocsChallenges
        page="Updating Arrays in State"
        href="https://react.dev/learn/updating-arrays-in-state"
        challenges={[
          { title: 'Fix the mutations using non-mutative methods', when: 'homework', note: 'A todo app, split into components, with exactly today\'s fixes.' },
          { title: 'Fix the mutations using Immer', when: 'skip', note: 'Immer is not part of this course.' },
        ]}
      />
    </LessonShell>
  )
}
