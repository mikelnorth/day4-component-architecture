// SOLUTION: a different app from the same four files. Nothing in components/ changed.

import { useState } from "react";
import Button from "./components/Button.jsx";
import Input from "./components/Input.jsx";
import ListItem from "./components/ListItem.jsx";

const people = [
  { id: 1, name: "Ada Lovelace" },
  { id: 2, name: "Grace Hopper" },
  { id: 3, name: "Katherine Johnson" },
];

export default function ContactsApp() {
  const [query, setQuery] = useState("");
  const [favoriteIds, setFavoriteIds] = useState([]);

  const results = people.filter((person) =>
    person.name.toLowerCase().includes(query.toLowerCase())
  );

  function handleToggleFavorite(id) {
    setFavoriteIds(
      favoriteIds.includes(id)
        ? favoriteIds.filter((favoriteId) => favoriteId !== id)
        : [...favoriteIds, id]
    );
  }

  return (
    <div>
      <header>
        <h1>Contacts</h1>
        <small>{favoriteIds.length} favorites</small>
      </header>
      <Input value={query} onChange={setQuery} placeholder="Search people" />
      <ul>
        {results.map((person) => (
          <ListItem
            key={person.id}
            actions={
              <Button onClick={() => handleToggleFavorite(person.id)}>
                {favoriteIds.includes(person.id) ? "Unfavorite" : "Favorite"}
              </Button>
            }
          >
            {person.name}
          </ListItem>
        ))}
      </ul>
    </div>
  );
}
