# Day 4 — Component Architecture & Scaling React Apps

An interactive teaching app for the **Day 4** lesson (3-hour class). Same format as Days 1
and 2: Vite + React 19 + Tailwind v4, vanilla JavaScript, **I do / We do / You do** blocks,
and a class timer in the sidebar.

## What's in this folder

| Path | What it is |
|---|---|
| `src/` | The teaching app (run it on the projector) |
| `LESSON-PLAN.md` | Minute-by-minute instructor script |
| `STUDENT-HANDOUT.md` | Cheat sheet to share with students |
| `exercises/` | A starter and solution for every I do, We do, and You do. No setup: they run from this app's dev server |
| `live.html`, `src/live/` | The page that runs the exercises |
| `student-projects/` | Standalone Vite copies of Exercises 1 to 4, for students who want their own project |

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
npm run lint
```

## Live coding

With `npm run dev` running, every I do / We do / You do block has **Open in editor**, **Run starter**,
and **Run solution**. Edit the starter and save, and the page updates. `/live.html` lists them all.
Details are in `exercises/README.md`.

## Pages

| Page | Concept | Live demos / activities |
|---|---|---|
| Home | Plan, objectives, schedule, mistakes, scope | |
| 1. Recap | Lifting state, state placement, prop drilling | Reveal cards; audit your Day 3 app |
| 2. Messy Component | Why working code can be bad; one component, one job | Running messy app with a component boundary overlay |
| 3. Exercise 1 | Refactoring without changing behavior | Step-through refactor; nested definition bug |
| 4. Where State Lives | Closest common parent; don't store what you can calculate | Out-of-sync siblings, common parent explorer, count bug, "Is it state?" quiz, mirrored prop |
| 5. Exercise 2 | Props, composition, independence; UI vs logic | Card "hole", kit building, one kit used by two apps |
| 6. Files & Communication | Folder structure, imports, data flow, prop drilling | Step through a Delete click |
| 7. Exercise 3 | Reviewing code for hidden bugs | Live mutation and index key bugs |
| 8. Exercise 4 | Plan, static, state | Mini dashboard |
| 9. Mistakes & Rebuild | Diagnosing architecture; retrieval practice | Four diagnoses; closed-book rebuild |
| 10. Wrap-up | Reflection, exit ticket, homework, Day 5 preview | |

The app also models the lesson: `src/components/kit/` holds the same kind of reusable parts
students build, and the demos are made from them.

## react.dev alignment

Every page of the Learn section was inventoried (48 files, plus the Rules of React), and
the ones that bear on architecture were read closely. Day 4 uses:

| Docs page | How it's used |
|---|---|
| Thinking in React | Backbone: boxes, static first, minimal state, owner, inverse data flow |
| Choosing the State Structure | Duplicate and redundant state; mirrored props; challenges |
| Sharing State Between Components | Recap; closest common parent; single source of truth |
| Passing Props to a Component | `children`, the "hole"; Card and Extract challenges |
| Responding to Events | `onSomething` / `handleSomething`; `Toolbar` app-specific prop names |
| Preserving and Resetting State | Nested definition bug; misplaced state challenge |
| Rendering Lists | Keys, and where `key` goes when you extract a component |
| Updating Arrays in State | Mutating objects inside a copied array |
| Understanding Your UI as a Tree | Render tree vs module tree |
| Importing and Exporting Components | Default vs named; Split the components further |
| Passing Data Deeply with Context | "Before you use context" section only |
| Keeping Components Pure | Fix a broken profile (components talk through props) |
| You Might Not Need an Effect | Why `useEffect` isn't the fix for duplicate state |
| Tutorial: Tic-Tac-Toe | Optional homework: state lifted from Square to Board to Game |

**Not in the docs:** react.dev has no recommended folder structure and doesn't use the terms
"presentational" or "container". Those come from the course page, and the lesson says so.

## AI in the lesson

Three short touchpoints, about 8 minutes in total. Students stay responsible for the answer.

| Stage | Where | Activity |
|---|---|---|
| Debug | Page 4 | Explain the count bug in plain English |
| Review | Page 7 | Narrow code review; prove one finding |
| Plan | Page 8 | AI questions the student's own plan |

No AI during the rebuild challenge. Streaming and RAG features were left out because they
don't fit this day's topic or scope.

## Scope

In: component trees, single responsibility, state placement, calculated values, reusable
components, `children`, folder structure, callback props. Out: filtering and editing in the
task app (Day 5), `useEffect` (Day 6), data fetching (Day 7), custom hooks (Day 8), and
context and `useReducer` (Day 17). React Router is used only by the teaching app.
