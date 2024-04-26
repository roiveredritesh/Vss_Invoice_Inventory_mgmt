import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App";
import ProductCategory from "../pages/business/pages/masters/productcategory/pages/ProductCategory";
import ProductCategoryList from "../pages/business/pages/masters/productcategory/pages/ProductCategoryList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/masters/productcategory",
    element: <ProductCategory />,
  },

  {
    path: "/masters/productcategorylist",
    element: <ProductCategoryList />,
  },

  {
    path: "/masters/productslist",
    element: <ProductCategoryList />,
  },

  {
    path: "/masters/product",
    element: <ProductCategoryList />,
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
