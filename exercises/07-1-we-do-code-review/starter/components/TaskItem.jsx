import Button from "./Button.jsx";

function TaskItem({ task, index, toggleTask, deleteTask }) {
  return (
    <li>
      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
        }}
      >
        {task.text}
      </span>
      <span>
        <Button label="Toggle" onClick={() => toggleTask(index)} />
        <Button label="Delete" onClick={() => deleteTask(index)} />
      </span>
    </li>
  );
}

export default TaskItem;
