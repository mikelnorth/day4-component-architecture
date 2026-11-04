// SOLUTION: a way of looking at components, not a rule. These labels come from our course
// page. React's docs don't use them, and most real components mix both, which is fine.

import { useState } from "react";

const people = [
  { id: 1, name: "Ada Lovelace" },
  { id: 2, name: "Grace Hopper" },
  { id: 3, name: "Katherine Johnson" },
];

// UI: displays things. Everything arrives through props.
function ContactRow({ name, isFavorite, onToggleFavorite }) {
  return (
    <li>
      <span>{name}</span>
      <button onClick={onToggleFavorite}>
        {isFavorite ? "Unfavorite" : "Favorite"}
      </button>
    </li>
  );
}

// Logic: owns state and handlers, and passes data down.
function ContactList() {
  const [favoriteIds, setFavoriteIds] = useState([]);

  function handleToggleFavorite(id) {
    setFavoriteIds(
      favoriteIds.includes(id)
        ? favoriteIds.filter((favoriteId) => favoriteId !== id)
        : [...favoriteIds, id]
    );
  }

  return (
    <div>
      <h1>Contacts</h1>
      <p>{favoriteIds.length} favorites</p>
      <ul>
        {people.map((person) => (
          <ContactRow
            key={person.id}
            name={person.name}
            isFavorite={favoriteIds.includes(person.id)}
            onToggleFavorite={() => handleToggleFavorite(person.id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default function App() {
  return <ContactList />;
}
