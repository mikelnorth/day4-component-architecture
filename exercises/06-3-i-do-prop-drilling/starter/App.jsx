// I DO: Layout never uses posts. It only forwards them.
//
//   Live fix: make Layout take children, and render <Posts> directly in App.

const posts = [
  { id: 1, title: "Why one component should do one job" },
  { id: 2, title: "Don't store what you can calculate" },
];

function Posts({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

function Layout({ posts }) {
  return (
    <main>
      <h1>My Blog</h1>
      <Posts posts={posts} />
    </main>
  );
}

export default function App() {
  return <Layout posts={posts} />;
}
