import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import "./App.css";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Home from "./components/Home/Home";
import Courses from "./components/Courses/Courses";

function App() {
  const router = createBrowserRouter([
    {
      path: '',
      element: <Layout />,
      errorElement: <ErrorPage />,
      children:[
        {
          path:'',
          element:<Home /> ,
          errorElement: <ErrorPage />,
        }
        ,
        {
          path: "news",
          element: <Home />,
          errorElement: <ErrorPage />
        },
        {
          path: "courses",
          element: <Courses />,
          errorElement: <ErrorPage />
        },
        {
          path: "exams",
          element: <div>Hello Exams</div>,
          errorElement: <ErrorPage />
        },
        {
          path: "questions",
          element: <div>Hello Questions</div>,
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