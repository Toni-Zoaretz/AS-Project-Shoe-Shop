import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import UpdateShoe from "./pages/UpdateShoe";
import UpdateShoes from "./UpdateShoes";
import AddShoe from "./pages/AddShoe";
import Error from "./pages/Error";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      errorElement: <Error />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/catalog", element: <Catalog /> },
        { path: "/updateShoe", element: <UpdateShoes /> },
        { path: "/updateShoe/:shoeId", element: <UpdateShoe /> },
        { path: "/addShoe", element: <AddShoe /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
