import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import "./App.css";
import ErrorPage from "./components/ErrorPage/ErrorPage";

function App() {
  const router = createBrowserRouter([
    {
      path: '',
      element: <Layout />,
      errorElement: <ErrorPage />,
      children:[
        {
          path:'',
          element: <div>Home News</div>,
          errorElement: <ErrorPage />,
        }
        ,
        {
          path: "news",
          element: <div>Home News</div>,
          errorElement: <ErrorPage />
        },
        {
          path: "videos",
          element: <div>Hello Videos</div>,
          errorElement: <ErrorPage />
        },
        {
          path: "lectures",
          element: <div>Hello Lectures</div>,
          errorElement: <ErrorPage />
        },
        {
          path: "exams",
          element: <div>Hello Exams</div>,
          errorElement: <ErrorPage />
        },
      ]
    }

  ]);
  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}
export default App;