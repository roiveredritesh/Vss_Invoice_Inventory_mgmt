import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App";
import UserHome from "@/pages/UserHome";
import ProductCategory from "@/pages/business/pages/masters/productcategory/pages/ProductCategory";
import ProductCategoryList from "@/pages/business/pages/masters/productcategory/pages/ProductCategoryList";
import ProductMaster from "@/pages/business/pages/masters/productmaster/pages/ProductMaster";
import ProductMasterList from "@/pages/business/pages/masters/productmaster/pages/ProductMasterList";
import VendorMaster from "@/pages/business/pages/masters/vendormaster/pages/VendorMaster";
import VendorMasterList from "@/pages/business/pages/masters/vendormaster/pages/VendorMasterList";

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
    path: "/master/productmasterlist",
    element: <ProductMasterList />,
    
  },
  {
    path: "/master/productmaster",
    element: <ProductMaster />,
  },
  {
    path: "/master/vendormasterlist",
    element: <VendorMasterList />,
    
  },
  {
    path: "/masters/vendormaster",
    element: <VendorMaster />,
  },
  {
    path: "/masters/vendormaster/:id",
    element: <VendorMaster />
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
