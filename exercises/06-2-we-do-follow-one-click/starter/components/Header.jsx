export default function Header({ total }) {
  return (
    <header>
      <h1>Task Manager</h1>
      <small>Total: {total}</small>
    </header>
  );
}
