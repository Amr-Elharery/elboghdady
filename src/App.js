import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello Home</div>,
    },
    {
      path: "news",
      element: <div>Hello News</div>,
    },
    {
      path: "videos",
      element: <div>Hello Videos</div>,
    },
    {
      path: "lectures",
      element: <div>Hello Lectures</div>,
    },
    {
      path: "exams",
      element: <div>Hello Exams</div>,
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