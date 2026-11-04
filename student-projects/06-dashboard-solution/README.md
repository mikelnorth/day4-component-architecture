# 06 — mini dashboard solution (Exercise 4)

```
App            items, activeCategory
 ├ Header      doneCount, totalCount, points (all calculated in App)
 ├ Sidebar     items, activeCategory, onSelectCategory
 └ CardList    visibleItems, onToggleDone
     └ Card    title, children
```

Two pieces of state, and everything else is calculated. `Button` and `Card` have no idea
this is a dashboard.
