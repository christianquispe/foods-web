import { Link, Route, Routes } from "react-router-dom";

import FoodsLayout from "./Foods/FoodsLayout";

import Layout from "./Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<FoodsLayout />} />
        <Route path="foods" element={<FoodsLayout />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default App;
