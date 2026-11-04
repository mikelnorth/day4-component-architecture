import Button from "./Button.jsx";
import ListItem from "./ListItem.jsx";

export default function TaskItem({ task, onToggleTask, onDeleteTask }) {
  return (
    <ListItem
      actions={
        <>
          <Button onClick={() => onToggleTask(task.id)}>Toggle</Button>
          <Button onClick={() => onDeleteTask(task.id)}>Delete</Button>
        </>
      }
    >
      <span className={task.completed ? "completed" : ""}>{task.text}</span>
    </ListItem>
  );
}
