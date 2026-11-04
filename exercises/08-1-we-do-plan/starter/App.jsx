// WE DO: plan the dashboard before anyone builds it. Answers show on the page as you save.
//
//   Run the finished dashboard from the exercise 08-2 solution, then answer.

const plan = {
  tree: `TODO: what is the component tree?`,
  state: `TODO: what is the minimal state? What can be calculated?`,
  owner: `TODO: who owns the state, and why?`,
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
