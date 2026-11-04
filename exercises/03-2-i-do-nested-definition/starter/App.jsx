// I DO: type in the box, then click the button. Your text disappears. Why?
//
//   Field is defined inside Form, so every render of Form creates a new Field type.
//   Live fix: move Field to the top level of this file.

import { useState } from "react";

function Form() {
  const [count, setCount] = useState(0);

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
