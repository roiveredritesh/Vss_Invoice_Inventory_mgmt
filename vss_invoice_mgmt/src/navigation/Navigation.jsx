import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

function Navigation() {
  return (
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  );
}

export default Navigation;
