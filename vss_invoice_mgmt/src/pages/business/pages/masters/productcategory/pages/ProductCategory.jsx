import { useFormik } from "formik";
import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import "tailwindcss/tailwind.css";
import AdminNavbar from "@/components/Navbars/AdminNavbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import HeaderStats from "@/components/Headers/HeaderStats";
import FooterAdmin from "@/components/Footers/FooterAdmin";
import Status_Select from "@/components/Status-Select/Status_Select";
import Toast_success from "@/components/Show-Messages/Toast_success";
import { Link } from "react-router-dom";

const productcategory_validationSchema = Yup.object().shape({
  productcategoryname: Yup.string()
    .required("Please enter product category name")
    .max(50)
    .min(5),
  productcategorycode: Yup.string()
    .required("Please enter product category code")
    .max(50)
    .min(2),
  productcategorystatus: Yup.string().required("Please select status"),
});

const ProductCategory = () => {
  const [addProductCategory, setaddProductCategory] = useState([]);

  const formik = useFormik({
    initialValues: {
      productcategoryname: "",
      productcategorycode: "",
      productcategorystatus: "",
    },
    onSubmit: (values) => {
      setaddProductCategory([...addProductCategory, values]);
      //formik.resetForm();
      return <Toast_success message="Added successfully." />;
    },
    validationSchema: productcategory_validationSchema,
  });

  useEffect(() => {
    localStorage.setItem("addProduct", JSON.stringify(addProductCategory));
  }, [addProductCategory]);

  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        <HeaderStats />

        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <div className="rounded-t bg-white mb-0 px-6 py-6">
              <div className="text-center flex justify-between">
                <h6 className="text-blueGray-700 text-xl font-bold">
                  Add Product Category
                </h6>
              </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form onSubmit={formik.handleSubmit}>
                <div className="flex flex-wrap mt-6 mb-6">
                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Product Category
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="productcategoryname"
                        type="text"
                        name="productcategoryname"
                        value={formik.values.productcategoryname}
                        onChange={formik.handleChange}
                      />
                      {formik.errors.productcategoryname && (
                        <p className="text-red-500 text-xs italic">
                          {formik.errors.productcategoryname}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Product Category Code
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="productcategorycode"
                        type="text"
                        name="productcategorycode"
                        value={formik.values.productcategorycode}
                        onChange={formik.handleChange}
                      />
                      {formik.errors.productcategorycode && (
                        <p className="text-red-500 text-xs italic">
                          {formik.errors.productcategorycode}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Status
                      </label>
                      <Status_Select
                        name="productcategorystatus"
                        onChange={formik.handleChange}
                        value={formik.values.productcategorystatus}
                        classname="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />

                      {formik.errors.productcategorystatus && (
                        <p className="text-red-500 text-xs italic">
                          {formik.errors.productcategorystatus}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-end justify-end">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Add
                  </button>

                  <Link
                    to={"/masters/productcategorylist"}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mx-2 rounded focus:outline-none focus:shadow-outline"
                  >
                    Back
                  </Link>
                </div>

                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </form>
            </div>
          </div>

          <FooterAdmin />
        </div>
      </div>
    </>
  );
};

export default ProductCategory;
