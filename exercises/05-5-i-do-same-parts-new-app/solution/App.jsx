import Card from "./components/Card.jsx";
import ContactsApp from "./ContactsApp.jsx";
import TaskApp from "./TaskApp.jsx";

export default function App() {
  return (
    <div className="grid">
      <TaskApp />
      <Card>
        <ContactsApp />
      </Card>
    </div>
  );
}
