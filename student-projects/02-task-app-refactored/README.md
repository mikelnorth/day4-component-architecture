# 02 — task app, refactored (Exercise 1 solution)

Same behavior as `01-messy-task-app`, split into components:

```
App           tasks, taskCount
 ├ Header     total
 ├ TaskInput  text (own state), onAddTask
 └ TaskList   tasks, onToggleTask, onDeleteTask
     └ TaskItem
```

The Total bug is still here on purpose. On page 4 of the lesson, delete `taskCount` and
pass `total={tasks.length}`.
