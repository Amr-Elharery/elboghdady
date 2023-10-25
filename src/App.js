import Layout from "./components/Layout/Layout";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello Home</div>,
    },
    {
      path: "lecs",
      element: <div>Hello Lectures</div>,
    },
  ]);
  return (
    <div className="App">
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </div>
  );
}

export default App;
