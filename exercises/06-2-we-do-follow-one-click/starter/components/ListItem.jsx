// Two holes: children for the content, actions for the buttons.
export default function ListItem({ children, actions }) {
  return (
    <li>
      <div>{children}</div>
      <div>{actions}</div>
    </li>
  );
}
