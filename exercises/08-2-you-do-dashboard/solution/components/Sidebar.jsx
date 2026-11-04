import { categories } from "../data/items.js";
import Button from "./Button.jsx";

export default function Sidebar({ items, activeCategory, onSelectCategory }) {
  return (
    <nav className="sidebar">
      {categories.map((category) => {
        const count =
          category === "All"
            ? items.length
            : items.filter((item) => item.category === category).length;

        return (
          <Button
            key={category}
            isActive={category === activeCategory}
            onClick={() => onSelectCategory(category)}
          >
            {category} ({count})
          </Button>
        );
      })}
    </nav>
  );
}
