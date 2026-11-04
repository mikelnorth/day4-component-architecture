// Minute offsets from the start of class. Total: 180 minutes.
export const schedule = [
  { start: 0,   end: 10,  title: 'Day 3 recap: who owns the data?',              to: '/recap',            kind: 'wedo' },
  { start: 10,  end: 25,  title: 'The messy component & thinking in components', to: '/messy-components', kind: 'talk' },
  { start: 25,  end: 50,  title: 'Exercise 1: refactor the messy app',           to: '/refactor',         kind: 'wedo' },
  { start: 50,  end: 70,  title: 'Where state lives & duplicate state',          to: '/state-placement',  kind: 'wedo' },
  { start: 70,  end: 80,  title: 'Break',                                        to: null,                kind: 'break' },
  { start: 80,  end: 100, title: 'Exercise 2: reusable components',              to: '/reusable',         kind: 'youdo' },
  { start: 100, end: 110, title: 'File structure & component communication',     to: '/file-structure',   kind: 'talk' },
  { start: 110, end: 125, title: 'Exercise 3: code review the task app',         to: '/improve-task-app', kind: 'youdo' },
  { start: 125, end: 155, title: 'Exercise 4: mini dashboard',                   to: '/dashboard',        kind: 'youdo' },
  { start: 155, end: 170, title: 'Common mistakes & rebuild challenge',          to: '/rebuild',          kind: 'youdo' },
  { start: 170, end: 180, title: 'Wrap-up, reflection & Day 5 preview',          to: '/wrap-up',          kind: 'talk' },
]

export function fmt(minutes) {
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  return `${h}:${String(m).padStart(2, '0')}`
}

export function blockAt(elapsedMinutes) {
  return schedule.find((b) => elapsedMinutes >= b.start && elapsedMinutes < b.end) ?? null
}

export function blockAfter(block) {
  if (!block) return null
  const i = schedule.indexOf(block)
  return schedule[i + 1] ?? null
}
