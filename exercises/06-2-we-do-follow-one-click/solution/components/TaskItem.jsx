import Button from "./Button.jsx";
import ListItem from "./ListItem.jsx";

export default function TaskItem({ task, onToggleTask, onDeleteTask }) {
  console.log("6 TaskItem renders:", task.text);

  return (
    <ListItem
      actions={
        <>
          <Button onClick={() => onToggleTask(task.id)}>Toggle</Button>
          <Button
            onClick={() => {
              console.log("2 TaskItem: adds the id");
              onDeleteTask(task.id);
            }}
          >
            Delete
          </Button>
        </>
      }
    >
      <span className={task.completed ? "completed" : ""}>{task.text}</span>
    </ListItem>
  );
}
