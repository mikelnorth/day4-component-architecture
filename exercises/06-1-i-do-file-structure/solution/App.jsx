// SOLUTION: App reads like a table of contents. react.dev doesn't prescribe a folder
// structure, so this is a sensible start, not the only answer.
//
// Default export: import Button from "./components/Button.jsx"
// Named export:   import { Button } from "./components/Button.jsx"
// Mixing them up is the classic error.

import { useState } from "react";
import Button from "./components/Button.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header count={count} />
      <Button onClick={() => setCount(count + 1)}>Add one</Button>
      <Footer />
    </div>
  );
}
