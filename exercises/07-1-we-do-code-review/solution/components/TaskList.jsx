// SOLUTION: the review. Comments only. The fixes are Exercise 3.

import TaskItem from "./TaskItem.jsx";

// REVIEW 3: App owns tasks, but the rules for changing them live here and in TaskInput.
// A new feature that changes tasks has no single place to go.
function TaskList({ tasks, setTasks }) {
  function toggleTask(index) {
    // REVIEW 1: [...tasks] copies only the array. The task objects inside are shared,
    // so the next line changes the original object. That is a state mutation.
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  }

  function deleteTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  return (
    <ul>
      {tasks.map((task, index) => (
        // REVIEW 2: key={index} says identity is position. Delete the first task and every
        // remaining task gets a different key, so any row state stays with the wrong task.
        <TaskItem
          key={index}
          task={task}
          index={index}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;
