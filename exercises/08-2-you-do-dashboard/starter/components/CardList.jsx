import Button from "./Button.jsx";
import Card from "./Card.jsx";

export default function CardList({ items }) {
  return (
    <div className="grid">
      {items.map((item) => (
        <Card key={item.id} title={item.title}>
          <p className="muted">
            {item.category} · {item.points} points
          </p>
          {/* TODO 8: accept onToggleDone as a prop, and call it with item.id on click. */}
          <Button>{item.done ? "Undo" : "Mark done"}</Button>
        </Card>
      ))}
    </div>
  );
}
