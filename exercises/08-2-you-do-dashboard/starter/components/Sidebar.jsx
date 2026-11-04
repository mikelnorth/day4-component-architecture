import { categories } from "../data/items.js";
import Button from "./Button.jsx";

export default function Sidebar({ items, activeCategory }) {
  return (
    <nav className="sidebar">
      {categories.map((category) => (
        // TODO 7: accept onSelectCategory as a prop, and call it with the category on click.
        // TODO 9 (stretch): show each category's count, calculated from items.
        <Button key={category} isActive={category === activeCategory}>
          {category}
        </Button>
      ))}
      <small>{items.length} items in total</small>
    </nav>
  );
}
