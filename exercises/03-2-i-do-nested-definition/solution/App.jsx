// SOLUTION: Field is defined once, at the top level, so React keeps its state.
// The docs: components can render other components, "but you must never nest their definitions".

import { useState } from "react";

function Field() {
  const [text, setText] = useState("");
  return (
    <input
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Type, then click the button"
    />
  );
}

function Form() {
  const [count, setCount] = useState(0);

  return (
    <div className="row">
      <Field />
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </div>
  );
}

export default function App() {
  return <Form />;
}
