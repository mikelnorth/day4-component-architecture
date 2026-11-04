// One entry per I do / We do / You do block in the lesson.
// Each id is a folder: exercises/<id>/starter/App.jsx and exercises/<id>/solution/App.jsx
const pages = {
  1: { title: 'Recap: Sharing State', route: '/recap' },
  2: { title: 'The Messy Component', route: '/messy-components' },
  3: { title: 'Exercise 1: Refactor', route: '/refactor' },
  4: { title: 'Where State Lives', route: '/state-placement' },
  5: { title: 'Exercise 2: Reusable Parts', route: '/reusable' },
  6: { title: 'Files & Communication', route: '/file-structure' },
  7: { title: 'Exercise 3: Code Review', route: '/improve-task-app' },
  8: { title: 'Exercise 4: Dashboard', route: '/dashboard' },
  9: { title: 'Mistakes & Rebuild', route: '/rebuild' },
}

const list = [
  [1, 'we do', '01-1-we-do-audit', 'Audit the Day 3 task app'],
  [2, 'i do', '02-1-i-do-messy-app', 'One file that does everything'],
  [2, 'we do', '02-2-we-do-draw-the-boxes', 'Draw the boxes'],
  [3, 'we do', '03-1-we-do-refactor', 'Exercise 1: refactor the messy app'],
  [3, 'i do', '03-2-i-do-nested-definition', 'Nested component definition'],
  [4, 'i do', '04-1-i-do-two-copies', 'Two copies are not shared'],
  [4, 'we do', '04-2-we-do-find-the-owner', 'Find the owner'],
  [4, 'i do', '04-3-i-do-duplicate-state', 'Duplicate state goes out of sync'],
  [4, 'we do', '04-4-we-do-is-it-state', 'Is it state?'],
  [4, 'i do', '04-5-i-do-mirrored-prop', "Don't copy a prop into state"],
  [5, 'i do', '05-1-i-do-button', 'Repeated buttons to a Button'],
  [5, 'i do', '05-2-i-do-card-hole', 'A Card with a hole'],
  [5, 'we do', '05-3-we-do-ui-vs-logic', 'UI and logic components'],
  [5, 'you do', '05-4-you-do-build-a-kit', 'Exercise 2: build a kit'],
  [5, 'i do', '05-5-i-do-same-parts-new-app', 'Same parts, different app'],
  [6, 'i do', '06-1-i-do-file-structure', 'Split a file into components/'],
  [6, 'we do', '06-2-we-do-follow-one-click', 'Follow one click'],
  [6, 'i do', '06-3-i-do-prop-drilling', 'Fix prop drilling with children'],
  [6, 'i do', '06-4-i-do-two-trees', 'Render tree and module tree'],
  [7, 'we do', '07-1-we-do-code-review', 'Code review: what would you flag?'],
  [7, 'i do', '07-2-i-do-mutation', 'Make mutation visible'],
  [7, 'i do', '07-3-i-do-index-keys', 'Make index keys visible'],
  [7, 'you do', '07-4-you-do-fix-and-finish', 'Exercise 3: fix and finish'],
  [8, 'we do', '08-1-we-do-plan', 'Plan the dashboard'],
  [8, 'you do', '08-2-you-do-dashboard', 'Exercise 4: build the dashboard'],
  [9, 'we do', '09-1-we-do-diagnose', 'Diagnose the architecture'],
  [9, 'you do', '09-2-you-do-rebuild', 'Rebuild challenge'],
]

export const exercises = list.map(([page, kind, id, title]) => ({
  page,
  pageTitle: pages[page].title,
  route: pages[page].route,
  kind,
  id,
  title,
}))

export function findExercise(id) {
  return exercises.find((exercise) => exercise.id === id)
}

export function exerciseFile(id, version) {
  return `exercises/${id}/${version}/App.jsx`
}

export function exerciseUrl(id, version) {
  return `/live.html?ex=${id}&v=${version}`
}

// Vite's dev server opens files in your editor through this endpoint.
export function openInEditor(id, version) {
  return fetch(`/__open-in-editor?file=${encodeURIComponent(exerciseFile(id, version))}`)
}
