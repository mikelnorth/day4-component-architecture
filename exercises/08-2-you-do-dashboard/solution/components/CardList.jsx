import Button from "./Button.jsx";
import Card from "./Card.jsx";

export default function CardList({ items, onToggleDone }) {
  return (
    <div className="grid">
      {items.map((item) => (
        <Card key={item.id} title={item.title}>
          <p className="muted">
            {item.category} · {item.points} points
          </p>
          <Button onClick={() => onToggleDone(item.id)}>
            {item.done ? "Undo" : "Mark done"}
          </Button>
        </Card>
      ))}
    </div>
  );
}
