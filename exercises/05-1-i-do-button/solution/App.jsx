// SOLUTION: one Button. The look changes in one place, and children can hold any JSX.
// Button says onClick, not onDeleteTask. Reusable parts keep app meaning out.
//
// The label version from step 1:
//   function Button({ label, onClick }) {
//     return <button style={buttonStyle} onClick={onClick}>{label}</button>;
//   }

import { useState } from "react";

const buttonStyle = { background: "#4338ca", color: "white" };

function Button({ children, onClick }) {
  return (
    <button style={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
}

export default function App() {
  const [message, setMessage] = useState("Nothing clicked yet");

  return (
    <div>
      <p>{message}</p>
      <Button onClick={() => setMessage("Add clicked")}>
        <b>+</b> Add task
      </Button>
      <Button onClick={() => setMessage("Toggle clicked")}>Toggle</Button>
      <Button onClick={() => setMessage("Delete clicked")}>Delete</Button>
    </div>
  );
}
