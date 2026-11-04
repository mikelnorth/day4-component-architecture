// SOLUTION: the plan the Exercise 4 solution is built from.

const plan = {
  tree: `Mini Dashboard (App)
 ├ Header
 ├ Sidebar
 └ CardList
     └ Card`,
  state: `items and activeCategory. That's all.
Calculated: visible items, done count, points, each category's count.`,
  owner: `App. Header needs items for its counts, and CardList needs them for its cards.
Sidebar and CardList both need activeCategory.
App is their closest common parent.`,
};

export default function App() {
  return (
    <div>
      <h1>Mini dashboard plan</h1>
      <h3>1. Component tree</h3>
      <pre>{plan.tree}</pre>
      <h3>2. Minimal state</h3>
      <pre>{plan.state}</pre>
      <h3>3. Who owns it</h3>
      <pre>{plan.owner}</pre>
    </div>
  );
}
