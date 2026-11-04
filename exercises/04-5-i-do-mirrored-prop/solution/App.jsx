// SOLUTION: read the prop directly, and the Badge is always current.

import { useState } from "react";

function Badge({ label }) {
  return <p>Badge: {label}</p>;
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
