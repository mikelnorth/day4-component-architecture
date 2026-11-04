// I DO: build a different app without changing anything in components/.
//
//   1. Add state: query and favoriteIds.
//   2. Search with Input. Show the matching people with ListItem and a Button in actions.
//   3. Then change Button.jsx once and watch both apps update.

// import { useState } from "react";
// import Button from "./components/Button.jsx";
// import Input from "./components/Input.jsx";
// import ListItem from "./components/ListItem.jsx";

// const people = [
//   { id: 1, name: "Ada Lovelace" },
//   { id: 2, name: "Grace Hopper" },
//   { id: 3, name: "Katherine Johnson" },
// ];

export default function ContactsApp() {
  return (
    <header>
      <h1>Contacts</h1>
      <small>Build me from the kit</small>
    </header>
  );
}
