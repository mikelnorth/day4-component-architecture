// SOLUTION: the trees differ. Layout renders Posts through children, but never imports it.

import Layout from "./components/Layout.jsx";
import Posts from "./components/Posts.jsx";

const renderTree = `App
 └ Layout
     └ Posts`;
const moduleTree = `App.jsx
 ├ Layout.jsx
 └ Posts.jsx`;

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
