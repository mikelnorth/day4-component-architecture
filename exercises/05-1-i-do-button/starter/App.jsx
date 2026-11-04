// I DO: the same button, written three times. Change the look of all of them. Count the edits.
//
//   Step 1: extract function Button({ label, onClick }).
//   Step 2: switch label to children, so a button can hold any JSX. Try <b>+</b> Add task.

import { useState } from "react";

const buttonStyle = { background: "#4338ca", color: "white" };

export default function App() {
  const [message, setMessage] = useState("Nothing clicked yet");

  return (
    <div>
      <p>{message}</p>
      <button style={buttonStyle} onClick={() => setMessage("Add clicked")}>
        Add
      </button>
      <button style={buttonStyle} onClick={() => setMessage("Toggle clicked")}>
        Toggle
      </button>
      <button style={buttonStyle} onClick={() => setMessage("Delete clicked")}>
        Delete
      </button>
    </div>
  );
}
