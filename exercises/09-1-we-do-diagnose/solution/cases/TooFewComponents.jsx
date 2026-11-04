// DIAGNOSIS: too few components. Every change means reading everything, and the list is
// written twice. Break it up along its jobs.

const tasks = ["Review notes", "Draw the tree"];
const notes = ["State moves up and down", "Keys are identity"];

function TitledList({ title, items }) {
  return (
    <div>
      <strong>{title} ({items.length})</strong>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function TooFewComponents() {
  return (
    <div className="row">
      <TitledList title="Tasks" items={tasks} />
      <TitledList title="Notes" items={notes} />
    </div>
  );
}
