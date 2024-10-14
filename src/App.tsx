import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import Todo from "./Components/Todo";
import Page from "./Components/3Page";
import "./App.css";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "todo",
          element: <Todo />,
        },
        {
          path: "page",
          element: <Page />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
