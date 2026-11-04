// I DO: click Published. The parent's label changes, but the Badge stays on Draft.
//
//   useState(label) reads the prop only on the first render.
//   Live fix: delete the state in Badge and read the prop.

import { useState } from "react";

function Badge({ label }) {
  const [text] = useState(label);
  return <p>Badge: {text}</p>;
}

export default function App() {
  const [label, setLabel] = useState("Draft");

  return (
    <div>
      <p>App's label: {label}</p>
      <button onClick={() => setLabel("Draft")}>Draft</button>
      <button onClick={() => setLabel("Published")}>Published</button>
      <Badge label={label} />
    </div>
  );
}
