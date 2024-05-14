import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App";
import ProductCategory from "@/pages/business/pages/masters/productcategory/pages/ProductCategory";
import ProductCategoryList from "@/pages/business/pages/masters/productcategory/pages/ProductCategoryList";
import ProductMaster from "@/pages/business/pages/masters/productmaster/pages/ProductMaster";
import ProductMasterList from "@/pages/business/pages/masters/productmaster/pages/ProductMasterList";
import UserHome from "@/pages/UserHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/home",
    element: <UserHome />,
  },

  {
    path: "/masters/productcategorylist",
    element: <ProductCategoryList />,
  },
  {
    path: "/masters/productcategory",
    element: <ProductCategory />,
  },
  {
    path: "/masters/productcategory/:id",
    element: <ProductCategory />,
  },
  {
    path: "/master/productmaster",
    element: <ProductMaster />,
  },

  {
    path: "/master/productmasterlist",
    element: <ProductMasterList />,
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
