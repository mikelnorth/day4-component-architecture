// Component tree:    App > Header, Sidebar, CardList > Card
// Minimal state:     items, activeCategory
// Who owns it:       App, the closest common parent of Header, Sidebar, and CardList

import { useState } from "react";
import { initialItems } from "./data/items.js";
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import CardList from "./components/CardList.jsx";

export default function App() {
  const [items, setItems] = useState(initialItems);
  const [activeCategory, setActiveCategory] = useState("All");

  // Calculated on every render, so these can never go out of sync.
  const visibleItems =
    activeCategory === "All"
      ? items
      : items.filter((item) => item.category === activeCategory);
  const doneItems = items.filter((item) => item.done);
  const points = doneItems.reduce((total, item) => total + item.points, 0);

  function handleToggleDone(id) {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  }

  return (
    <div>
      <Header
        doneCount={doneItems.length}
        totalCount={items.length}
        points={points}
      />
      <div className="layout">
        <Sidebar
          items={items}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />
        <CardList items={visibleItems} onToggleDone={handleToggleDone} />
      </div>
    </div>
  );
}
