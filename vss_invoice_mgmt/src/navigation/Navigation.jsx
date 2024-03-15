import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

function Navigation() {
  return <div>Navigation</div>;
}

export default Navigation;
