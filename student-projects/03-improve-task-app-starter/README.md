# 03 — improve the task app (Exercise 3 starter)

This app works, and it has good structure. It also has problems waiting to happen. It's
the code from our course page, plus the `TaskInput` that page leaves out.

```bash
npm install
npm run dev
```

## Review it, then fix it

1. Toggle changes an existing object. Use `map` and create a new object instead.
2. Tasks have no `id`. Add one, find tasks by `id`, and use `key={task.id}`.
3. The code that changes `tasks` is in two different components. Move it into `App`,
   next to the state, and pass down `onAddTask`, `onToggleTask`, and `onDeleteTask`.
4. Show a total in `Header`, calculated from `tasks.length`.

Solution: `04-task-app-solution`.
