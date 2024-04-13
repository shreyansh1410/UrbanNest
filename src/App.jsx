import Navbar from "./components/navbar/navbar";
import HomePage from "./routes/homePage/HomePage";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import ListPage from "./routes/listPage/ListPage";
import Layout from "./routes/layout/Layout";
import SinglePage from "./routes/singlePage/SinglePage";
import Login from "./routes/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: 
      <Layout/>,
      children:[
        {
          path: "/",
          element: <HomePage/>
        },
        {
          path: "/list",
          element: <ListPage/>
        },
        {
          path: "/:id",
          element: <SinglePage/>
        },
        {
          path: "/login",
          element: <Login/>
        }
      ]
  }
]);

function App() {
  return (
    

    <RouterProvider router={router}/>
  );
}

export default App;
