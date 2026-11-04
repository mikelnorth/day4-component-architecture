// WE DO: imagine this at 400 lines with every list in the app. What's wrong? Fix it.

const tasks = ["Review notes", "Draw the tree"];
const notes = ["State moves up and down", "Keys are identity"];

export default function TooFewComponents() {
  return (
    <div className="row">
      <div>
        <strong>Tasks ({tasks.length})</strong>
        <ul>
          {tasks.map((task) => (
            <li key={task}>{task}</li>
          ))}
        </ul>
      </div>
      <div>
        <strong>Notes ({notes.length})</strong>
        <ul>
          {notes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
