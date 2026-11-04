// SOLUTION: one Card. It doesn't know what's inside it. The parent fills the hole.

function Card({ title, children }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      {children}
    </div>
  );
}

export default function App() {
  return (
    <div className="grid">
      <Card title="Text">
        <small>Any paragraph can go in the hole.</small>
      </Card>
      <Card title="A number">
        <p>42</p>
        <small>tasks completed</small>
      </Card>
      <Card title="Other components">
        <button>Save</button>
        <button>Cancel</button>
      </Card>
    </div>
  );
}
