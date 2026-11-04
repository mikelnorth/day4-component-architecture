// PLAN FIRST. Before you touch this file, write your answers here:
//   Component tree:
//   Minimal state:
//   Who owns the state:

import { initialItems } from "./data/items.js";
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import CardList from "./components/CardList.jsx";

export default function App() {
  // TODO 3: add state for items and for the active category.

  // TODO 4: calculate these from state. They do not go in state!
  //   visibleItems: the items in the active category, or all of them for "All"
  //   doneItems: the items that are done
  //   points: the total points of doneItems

  // TODO 6: add handleToggleDone(id). Use map, and make a new object for the changed item.

  return (
    <div>
      {/* TODO 5: replace the hardcoded props with your calculated values */}
      <Header doneCount={3} totalCount={6} points={35} />
      <div className="layout">
        {/* TODO 7: pass activeCategory and onSelectCategory to Sidebar */}
        <Sidebar items={initialItems} activeCategory="All" />
        {/* TODO 8: pass visibleItems and onToggleDone to CardList */}
        <CardList items={initialItems} />
      </div>
    </div>
  );
}
