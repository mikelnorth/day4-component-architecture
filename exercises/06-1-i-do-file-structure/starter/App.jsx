// I DO: everything is in one file. Move each component to components/, one at a time.
//
//   components/Button.jsx, components/Header.jsx, components/Footer.jsx
//   File name matches component name. One default export per file.
//
//   Then show the classic error: change "import Button" to "import { Button }" and read it.

import { useState } from "react";

function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}

function Header({ count }) {
  return (
    <header>
      <h1>Clicks: {count}</h1>
    </header>
  );
}

function Footer() {
  return <footer>Day 4: flat is fine.</footer>;
}

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
