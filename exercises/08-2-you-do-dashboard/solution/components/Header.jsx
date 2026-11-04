export default function Header({ doneCount, totalCount, points }) {
  return (
    <header>
      <h1>Course Dashboard</h1>
      <small>
        {doneCount} of {totalCount} done · {points} points
      </small>
    </header>
  );
}
