# Day 4 — Component Architecture & Scaling React Apps: Lesson Plan (3 hours)

## Learning objectives

Students will be able to:

1. Describe common folder structures and best practices for organizing a React app
2. Identify what makes a component reusable: props, composition, and independence
3. Explain lifting state up and how to decide where state belongs
4. Minimize redundant state so the app stays correct and easy to change
5. Draw logical, maintainable component trees
6. Build a React app with a clean structure, using multiple components
7. Build UI components that can be reused across an app
8. Use an architecture that lets them add features without major refactoring

By the end of class students have: a **refactored task app**, a **reusable kit** (Button,
Card, Input, ListItem), an **improved Day 3 app**, and a **mini dashboard**.

## Teaching phrases

- "One component, one job."
- "Who owns this data?"
- "Don't store what you can calculate."
- "Data down, events up."

## Before class

- [ ] Teaching app running (`npm run dev` in this folder); react.dev open in another tab.
- [ ] To live code: click **Open in editor** and **Run starter** on any I do / We do / You do block, then edit and save. See `exercises/README.md`.
- [ ] Before a repeat class, reset any starters you edited, for example with `git restore exercises`.
- [ ] `STUDENT-HANDOUT.md` shared.
- [ ] `student-projects/` on a share or zipped. Students need 01, 03, and 05.
- [ ] Students have their Day 3 task app available. If not, 03 replaces it.
- [ ] Decide which AI tool students can use. The three touchpoints total about 8 minutes.

## Schedule

| Time | Min | Block | Mode | App page |
|---|---|---|---|---|
| 0:00 – 0:10 | 10 | Day 3 recap: who owns the data? | We do | 1 |
| 0:10 – 0:25 | 15 | The messy component & thinking in components | Teach | 2 |
| 0:25 – 0:50 | 25 | Exercise 1: refactor the messy app | We do | 3 |
| 0:50 – 1:10 | 20 | Where state lives & duplicate state | We do | 4 |
| 1:10 – 1:20 | 10 | Break | | |
| 1:20 – 1:40 | 20 | Exercise 2: reusable components | You do | 5 |
| 1:40 – 1:50 | 10 | File structure & component communication | Teach | 6 |
| 1:50 – 2:05 | 15 | Exercise 3: code review the task app | You do | 7 |
| 2:05 – 2:35 | 30 | Exercise 4: mini dashboard | You do | 8 |
| 2:35 – 2:50 | 15 | Common mistakes & rebuild challenge | You do | 9 |
| 2:50 – 3:00 | 10 | Wrap-up, reflection & Day 5 preview | Teach | 10 |

**If behind:** skip the mirrored prop demo (page 4) and two trees (page 6), and start the
rebuild as homework. Never cut the dashboard below 25 minutes. **If ahead:** run
"Fix a broken packing list" and "Fix misplaced state in the list" from the docs in class.

---

## 0:00 – 0:10 Recap (page 1)

Cold call the three questions: what is lifting state, where should state live, what is
prop drilling? Then students audit their own Day 3 app against the four prompts on the
page. Transition: "Yesterday's app works. Is it easy to change?"

## 0:10 – 0:25 The messy component (page 2)

**I do:** use the live app, then read its code. Name the four problems: everything in one
file, not reusable, hard to scale, hard to maintain. Have someone delete a task and watch
Total. Don't fix it. Plant the seed.

**Key principle:** each component should have one clear responsibility.

**We do:** students draw boxes on paper with three questions: what repeats, what has its
own logic, what should be reusable? Then tick "Show component boundaries" to compare.
Show the colored boxes in Thinking in React, Step 1.

## 0:25 – 0:50 Exercise 1: refactor (page 3)

Project: `01-messy-task-app`. The app must work the same after every move, including the
Total bug.

1. **I do:** Header. No state, so nothing can break.
2. **I do:** TaskItem. The buttons used `setTasks`, so App gets named handlers and passes
   them down.
3. **You do:** TaskList. One job: turn an array into rows.
4. **You do:** TaskInput. The surprise: `text` moves *down* out of App. State goes to
   whoever needs it.
5. **We do:** read what's left of App. It's now a table of contents.

**Demo (5 min):** the nested definition bug. Type, click, and the text vanishes. Source:
the Pitfall in Preserving and Resetting State.

**Watch for:** `onClick={onDeleteTask(task.id)}`; wrong import paths; moving `tasks` out of
App. Solution: `02-task-app-refactored`.

## 0:50 – 1:10 Where state lives (page 4)

1. **I do (3):** out-of-sync siblings. Not shared, out of sync.
2. **We do (5):** common parent explorer. Vote, then reveal. Teach Thinking in React Step
   4: list who renders from the data, find their closest common parent. Point out that
   state moved down for draft text and moves up for "which task is being edited".
3. **I do (5):** duplicate state. Delete the completed task on each side. Then students fix
   Total in their own app: delete `taskCount`, pass `tasks.length`. **Rule: do NOT store
   what you can calculate.**
4. **We do (4):** "Is it state?" quiz, using the three questions from Thinking in React
   Step 3.
5. **Optional (2):** mirrored prop.
6. **AI: Debug (2):** explain the bug in plain English. Reject any answer that adds
   `useEffect` to sync two values.

## 1:10 – 1:20 Break

## 1:20 – 1:40 Exercise 2: reusable components (page 5)

- **I do (4):** repeated buttons → `label` prop (course page) → `children` (docs). Name
  generically in reusable parts (`onClick`) and specifically in app parts (`onDeleteTask`).
- **I do (3):** the Card with a "hole". Three uses, one component.
- **We do (3):** UI vs logic components. Then ask: is TaskInput one or the other? It's both,
  and that's fine. **Be upfront:** these labels are from the course page, not react.dev.
  They're a useful lens, not a rule.
- **You do (10):** build Button, Card, Input, and ListItem, and use them in the task app.
  The test: no kit file mentions "task".
- **Payoff:** a contacts app built from the same unchanged parts.

## 1:40 – 1:50 Files & communication (page 6)

- **File structure (3):** one component per file in `components/`. **Be upfront:** react.dev
  has no recommended structure. Start flat and group by purpose when it gets crowded.
  Default vs named imports.
- **Communication (4):** step through one Delete click. Predict before each step. Events
  up, data down.
- **Prop drilling (3):** the docs' `<Layout posts>` → `<Layout><Posts /></Layout>`. Context
  is Day 17. Say that and move on.

## 1:50 – 2:05 Exercise 3: code review (page 7)

The code here is from the course page. It's well organized and has three problems.

- **Pairs (2):** read it, then reveal: mutation, index keys, scattered update logic.
- **I do (2 + 2):** make them visible. Toggle, then Reset: the mutated starter data can't be
  restored. Open notes, then delete the first row: the wrong row is open.
- **You do (8):** fix your Day 3 app or `03-improve-task-app-starter`.
- **AI: Review (3):** a narrow review prompt. Students must prove one finding. Solution:
  `04-task-app-solution`.

Don't call passing a setter wrong. Thinking in React does it. Named handlers earn their
place here because there are three operations with logic.

## 2:05 – 2:35 Exercise 4: mini dashboard (page 8)

- **We do (7):** on paper: tree, minimal state, owner. Reveal each.
- **AI: Plan (3):** students paste *their* plan and ask AI to question it.
- **You do (20):** `05-dashboard-starter`. The static version is ready. Add state, calculate
  the rest, and connect events.

**Requirements:** reusable components, clean structure, no duplicated logic, proper state
placement.

**Watch for:** counting from `visibleItems`; `visibleItems` in state; filter logic in two
places. Solution: `06-dashboard-solution`.

## 2:35 – 2:50 Mistakes & rebuild (page 9)

- **We do (5):** diagnose four architectures: too many components, too few, state in the
  wrong place, duplicated state. Then the three debugging questions: Does this need state?
  Can this be reused? Who owns this data?
- **You do (10):** close the code, docs, and AI. Start a new project. Plan first. The plan
  and static version are the minimum in class. The rest is homework.

## 2:50 – 3:00 Wrap-up (page 10)

Summary, the five reflection questions, then the **exit ticket**:

1. Draw a tree for a search box, a product list, and a cart total. Mark who owns the state.
2. Which is duplicate state: `products`, `query`, or `filteredProducts`?
3. One thing still fuzzy.

**Homework** is on page 10. **Next:** Day 5, Project Day: Task Manager App.

---

## Notes on the course page's code

The Canvas page's reference code is used as Exercise 3's starter rather than as a model,
because it has three issues worth knowing before class:

| In the course page | Why it matters | Fix used today |
|---|---|---|
| `updated[index].completed = !…` | `[...tasks]` is shallow, so this mutates state | `map` with `{ ...task, completed }` |
| `key={index}`, `index` as identity | Wrong row state after a delete | `key={task.id}`, find by `id` |
| `TaskInput.jsx` isn't listed | Students can't run the code as written | Added to the 03 starter |

Consider updating Canvas, or tell students the page's code is intentionally reviewed today.

## Common mistakes and error decoder

| You see | Cause | Fix |
|---|---|---|
| `x is not defined` after moving JSX | The new component needs it as a prop | Add the prop and pass it from the parent |
| `Failed to resolve import` | Wrong path or file name | Check `./` vs `../` and capitalization |
| `does not provide an export named` | Named import of a default export (or the reverse) | Match `import X` to `export default`, `import { X }` to `export` |
| `onDeleteTask is not a function` | The parent didn't pass it, or a name differs | Compare the name at both ends |
| `Too many re-renders` | `onClick={onDelete(id)}` calls it during render | `onClick={() => onDelete(id)}` |
| Typing loses focus or text clears | Component defined inside a component | Move it to the top level |
| Clicking a reusable Button does nothing | `onClick` isn't forwarded to `<button>` | `<button onClick={onClick}>` |
| Count is wrong after an action | Duplicate state | Delete it and calculate |
| Wrong row keeps its open/typed state | `key={index}` | `key={item.id}` |
| Prop changes but the child doesn't | Prop copied into `useState` | Read the prop directly |
| A task is added twice | Button has `onClick` and also submits a form | Keep the logic in `onSubmit` |
