// WE DO: ContactList holds the data and also draws every row.
//
//   1. Which lines are logic (state, handlers)? Which are display?
//   2. Extract a ContactRow that gets everything through props.
//   3. Label each component: UI, logic, or both. Is "both" a problem?

import { useState } from "react";

const people = [
  { id: 1, name: "Ada Lovelace" },
  { id: 2, name: "Grace Hopper" },
  { id: 3, name: "Katherine Johnson" },
];

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
          <li key={person.id}>
            <span>{person.name}</span>
            <button onClick={() => handleToggleFavorite(person.id)}>
              {favoriteIds.includes(person.id) ? "Unfavorite" : "Favorite"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function App() {
  return <ContactList />;
}
