import { Home } from "./Pages/Home";
import { VerifyAdmin } from "./Components/Admin/VerifyAdmin";
import { Navigate, Outlet, useRoutes } from "react-router";
import Layout from "./Pages/Layout";
import { AdminHome } from "./Components/Admin/AdminHome";

function App() {
  const ProtectedRoutes = () => {
    if (sessionStorage.getItem("admin")) {
      return <Outlet />;
    }
    return <Navigate to={"/verifyadmin"} replace={true} />;
  };

  let element = useRoutes([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "verifyadmin",
          element: <VerifyAdmin />,
        },
        {
          element: <ProtectedRoutes />,
          children: [
            {
              path: "admin",
              element: <AdminHome />,
            },
          ],
        },
      ],
    },
  ]);

  return element;
}

export default App;
