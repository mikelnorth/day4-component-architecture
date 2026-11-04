// I DO: the same frame three times, with different content inside.
//
//   Live: extract function Card({ title, children }). children is the "hole".

export default function App() {
  return (
    <div className="grid">
      <div className="card">
        <h3>Text</h3>
        <small>Any paragraph can go in the hole.</small>
      </div>
      <div className="card">
        <h3>A number</h3>
        <p>42</p>
        <small>tasks completed</small>
      </div>
      <div className="card">
        <h3>Other components</h3>
        <button>Save</button>
        <button>Cancel</button>
      </div>
    </div>
  );
}
