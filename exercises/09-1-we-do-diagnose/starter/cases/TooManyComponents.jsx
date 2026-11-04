// WE DO: what's wrong with this structure? Vote, then fix it.

function TaskTitle({ text }) {
  return <span>{text}</span>;
}

export default function TooManyComponents() {
  return (
    <p>
      <TaskTitle text="Draw the component tree" />
    </p>
  );
}
