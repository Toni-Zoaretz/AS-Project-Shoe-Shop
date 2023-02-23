import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import UpdateShoe from "./pages/UpdateShoe";
import AddShoe from "./pages/AddShoe";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/catalog", element: <Catalog /> },
        { path: "/updateShoe", element: <UpdateShoe /> },
        { path: "/addShoe", element: <AddShoe /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
// (
//   <div>
//     <Header />
//     <Home />
//     <Catalog />
//     <UpdateShoe />
//     <AddShoe />
//   </div>
// );

export default App;
