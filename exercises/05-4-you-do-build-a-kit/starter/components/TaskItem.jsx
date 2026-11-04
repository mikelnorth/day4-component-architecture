export default function TaskItem({ task, onToggleTask, onDeleteTask }) {
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
        <button onClick={() => onToggleTask(task.id)}>Toggle</button>
        <button onClick={() => onDeleteTask(task.id)}>Delete</button>
      </span>
    </li>
  );
}
