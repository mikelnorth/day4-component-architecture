// WE DO: type in the search box. The list doesn't filter. What's wrong? Fix it.

import { useState } from "react";

const names = ["Ada Lovelace", "Grace Hopper", "Katherine Johnson"];

function SearchBar() {
  const [query, setQuery] = useState("");
  return (
    <input
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search people"
    />
  );
}

function NameList() {
  const [query] = useState("");
  const results = names.filter((name) =>
    name.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <ul>
      {results.map((name) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  );
}

export default function WrongPlace() {
  return (
    <div>
      <SearchBar />
      <NameList />
    </div>
  );
}
