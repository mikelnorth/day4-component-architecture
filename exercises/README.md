# Day 4 exercises

Every I do, We do, and You do in the lesson has a folder here. There's nothing to set up: they all
run from the teaching app's dev server.

```bash
npm run dev     # from the repo root, once
```

## How to live code one

1. On a lesson page, find the block and click **Open in editor** and **Run starter**.
2. Edit `exercises/<name>/starter/App.jsx`. Add new files beside it, such as `components/Header.jsx`.
3. Save. The page updates on its own, keeping state where it can.
4. Use the **Solution** tab to show the finished version.

Or skip the lesson pages: `/live.html` lists all 27, and every exercise has Prev and Next links.

## Layout

```
exercises/
  styles.css                    Shared styles, so no exercise needs its own
  03-1-we-do-refactor/          <lesson page>-<order>-<i do | we do | you do>-<topic>
    starter/App.jsx             Instructions are in the comment at the top
    solution/App.jsx
```

The comment at the top of each file has the steps or the answers. A few exercises have their
instructions in another file:

- `05-5` starter: `ContactsApp.jsx`
- `07-1` starter: `components/TaskList.jsx`
- `09-1` starter: each file in `cases/`

## Resetting

Your edits change the starter files. Once this repo is committed, this puts them back:

```bash
git restore exercises
```

## Notes

- If "Open in editor" opens the wrong editor, start the server with `LAUNCH_EDITOR=code npm run dev`.
- Many starters contain deliberate bugs, so `npm run lint` skips `starter/` folders. Solutions are linted.
- `03-1`, `07-4`, `08-2`, and part of `09-2` match the standalone versions in `student-projects/`. If
  you change one, change the other.
