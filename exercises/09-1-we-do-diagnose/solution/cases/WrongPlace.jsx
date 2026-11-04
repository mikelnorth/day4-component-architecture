// DIAGNOSIS: state in the wrong place. Two owners of one value. Lift query to the closest
// common parent, and keep one source of truth.

import { useState } from "react";

const names = ["Ada Lovelace", "Grace Hopper", "Katherine Johnson"];

function SearchBar({ query, onChangeQuery }) {
  return (
    <input
      value={query}
      onChange={(e) => onChangeQuery(e.target.value)}
      placeholder="Search people"
    />
  );
}

function NameList({ query }) {
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
  const [query, setQuery] = useState("");

  return (
    <div>
      <SearchBar query={query} onChangeQuery={setQuery} />
      <NameList query={query} />
    </div>
  );
}
