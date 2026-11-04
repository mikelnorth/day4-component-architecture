// SOLUTION: Layout no longer knows about posts. App passes the JSX straight through.
// The docs say to try this before reaching for context.

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

function Layout({ children }) {
  return (
    <main>
      <h1>My Blog</h1>
      {children}
    </main>
  );
}

export default function App() {
  return (
    <Layout>
      <Posts posts={posts} />
    </Layout>
  );
}
