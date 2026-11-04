import TaskItem from "./TaskItem.jsx";

export default function TaskList({ tasks, onToggleTask, onDeleteTask }) {
  console.log("5 TaskList renders");

  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleTask={onToggleTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </ul>
  );
}
