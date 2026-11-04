import DuplicatedState from "./cases/DuplicatedState.jsx";
import TooFewComponents from "./cases/TooFewComponents.jsx";
import TooManyComponents from "./cases/TooManyComponents.jsx";
import WrongPlace from "./cases/WrongPlace.jsx";

export default function App() {
  return (
    <div>
      <h1>Diagnose the architecture</h1>
      <section>
        <h3>Case 1</h3>
        <TooManyComponents />
      </section>
      <section>
        <h3>Case 2</h3>
        <TooFewComponents />
      </section>
      <section>
        <h3>Case 3</h3>
        <WrongPlace />
      </section>
      <section>
        <h3>Case 4</h3>
        <DuplicatedState />
      </section>
    </div>
  );
}
