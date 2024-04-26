import { useFormik } from "formik";
import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import "tailwindcss/tailwind.css";
import AdminNavbar from "../../../../../../components/Navbars/AdminNavbar";
import Sidebar from "../../../../../../components/Sidebar/Sidebar";
import HeaderStats from "../../../../../../components/Headers/HeaderStats";
import FooterAdmin from "../../../../../../components/Footers/FooterAdmin";
import Status_Select from "../../../../../../components/Status-Select/Status_Select";

const productSchema = Yup.object().shape({
  productname: Yup.string().required("Required").max(50).min(5),
  productcode: Yup.string().required("Required").max(50).min(5),
  productstatus: Yup.boolean().oneOf(
    [true],
    "You must accept the terms and conditions"
  ),
});

const ProductCategory = () => {
  const [addProduct, setaddProduct] = useState([]);

  const formik = useFormik({
    initialValues: {
      productname: "",
      productcode: "",
      productstatus: false,
    },
    onSubmit: (values) => {
      setaddProduct([...addProduct, values]);
      console.log("successfully saved");
      formik.resetForm();
    },
    validationSchema: productSchema,
  });

  useEffect(() => {
    localStorage.setItem("addProduct", JSON.stringify(addProduct));
  }, [addProduct]);

  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <div className="rounded-t bg-white mb-0 px-6 py-6">
              <div className="text-center flex justify-between">
                <h6 className="text-blueGray-700 text-xl font-bold">
                  Add Product
                </h6>
                {/* <button
                  className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  Settings
                </button> */}
              </div>
            </div>
            <div className="max-w-md mx-auto mt-10">
              <form
                onSubmit={formik.handleSubmit}
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
              >
                <h1 className="text-2xl mb-4">Add Product</h1>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="productname"
                  >
                    Product Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="productname"
                    type="text"
                    name="productname"
                    value={formik.values.productname}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.productname && (
                    <p className="text-red-500 text-xs italic">
                      {formik.errors.productname}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="productcode"
                  >
                    Product Code
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="productcode"
                    type="text"
                    name="productcode"
                    value={formik.values.productcode}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.productcode && (
                    <p className="text-red-500 text-xs italic">
                      {formik.errors.productcode}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  {/* <select
                    className="block text-gray-700 text-sm font-bold mb-2"
                    name="productstatus"
                    checked={formik.values.productstatus}
                    onChange={formik.handleChange}
                  >
                    <option value=""></option>
                    <option value=""></option>
                  </select> */}

                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    <input
                      type="checkbox"
                      name="productstatus"
                      checked={formik.values.productstatus}
                      onChange={formik.handleChange}
                      className="mr-2 leading-tight"
                    />
                    <span className="text-sm">
                      Status <Status_Select onChange={formik.handleChange} />
                    </span>
                  </label>
                  {formik.errors.productstatus && (
                    <p className="text-red-500 text-xs italic">
                      {formik.errors.productstatus}
                    </p>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Add
                  </button>
                </div>
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
