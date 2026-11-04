export default function Button({ children, onClick }) {
  function handleClick() {
    console.log("1 Button: calls the onClick it was given");
    onClick();
  }

  return <button onClick={handleClick}>{children}</button>;
}
