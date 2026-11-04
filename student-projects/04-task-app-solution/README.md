# 04 — task app solution (Exercises 2 and 3, and the rebuild target)

```
App             tasks, three handlers
 └ Card
     ├ Header     total (calculated)
     ├ TaskInput  text (own state), onAddTask
     └ TaskList   tasks, onToggleTask, onDeleteTask
         └ TaskItem   uses ListItem and Button
```

`Button`, `Card`, `Input`, and `ListItem` never mention tasks. `06-dashboard-solution`
reuses this `Card` unchanged, and this `Button` with one new prop, `isActive`.
