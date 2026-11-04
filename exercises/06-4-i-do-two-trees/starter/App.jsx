// I DO: read the imports, then fill in both trees. They show on the page as you save.
//
//   Render tree: who renders whom?
//   Module tree: who imports whom? Does Layout import Posts?

import Layout from "./components/Layout.jsx";
import Posts from "./components/Posts.jsx";

const renderTree = `TODO`;
const moduleTree = `TODO`;

export default function App() {
  return (
    <div>
      <Layout>
        <Posts />
      </Layout>
      <h3>Render tree</h3>
      <pre>{renderTree}</pre>
      <h3>Module tree</h3>
      <pre>{moduleTree}</pre>
    </div>
  );
}
