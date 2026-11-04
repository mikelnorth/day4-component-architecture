export default function Button({ children, onClick, isActive = false }) {
  return (
    <button onClick={onClick} className={isActive ? "active" : ""}>
      {children}
    </button>
  );
}
