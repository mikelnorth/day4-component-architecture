// A function, so each demo gets its own fresh objects.
export function makeTasks() {
  return [
    { id: 'a', text: 'Review Day 3 notes', completed: true },
    { id: 'b', text: 'Draw the component tree', completed: false },
    { id: 'c', text: 'Refactor the messy app', completed: false },
  ]
}
